import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import { red } from "@material-ui/core/colors";
import {
   ExpansionPanel,
   ExpansionPanelSummary,
   ExpansionPanelDetails,
   createMuiTheme,
   ThemeProvider,
   Fade,
   TextField
} from "@material-ui/core";
import {
   delTodo,
   editTodo,
   doneTodo,
   setDeleting,
   setEditing
} from "../store/actions";

const theme = createMuiTheme({
   overrides: {
      MuiExpansionPanelSummary: {
         content: {
            "&$expanded": {
               margin: "12px 0px"
            }
         }
      }
   }
});

const useStyles = makeStyles(theme => ({
   root: {
      padding: theme.spacing(0.5)
   },
   contentText: {
      color: theme.palette.text.hint,
      "&$disabled": {
         color: "white"
      }
   },
   checkIcon: {
      color: theme.palette.primary.main,
      marginLeft: 5
   },
   editIcons: {
      color: theme.palette.text.primary.main
   },
   disabled: {}
}));

const TodoCard = props => {
   const classes = useStyles();
   const [text, setText] = useState(props.data);

   const handleDone = () => {
      props.doneTodo(props.id);
      props.setEditing(null);
   };

   const handleEditSave = () => {
      props.setEditing(null);
      props.editTodo(props.id, text);
   };

   const handleDelete = () => {
      props.setDeleting(props.id);
      setTimeout(() => {
         props.delTodo(props.id);
         props.setDeleting(null);
      }, 300);
   };

   const handleTextChange = event => {
      setText(event.target.value);
   };

   return (
      <ThemeProvider theme={theme}>
         <Fade
            in={props.id !== props.deleting}
            timeout={{ appear: 0, enter: 0, exit: 300 }}
         >
            <ExpansionPanel expanded={props.id === props.editing}>
               <ExpansionPanelSummary>
                  <TextField
                     fullWidth
                     classes={{
                        root: classes.contentText
                     }}
                     multiline={true}
                     value={text}
                     InputProps={{
                        disableUnderline: true,
                        onClick: () => {
                           props.setEditing(props.id);
                        }
                     }}
                     onChange={handleTextChange}
                     onBlur={handleEditSave}
                  />
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                  <Grid
                     container
                     alignItems="center"
                     justify="flex-start"
                     xs={6}
                  >
                     <CheckIcon
                        onClick={handleDone}
                        className={classes.checkIcon}
                     />
                  </Grid>
                  <Grid
                     container
                     className={classes.editIcons}
                     alignItems="center"
                     justify="flex-end"
                     xs={6}
                     spacing={1}
                  >
                     <DeleteIcon
                        onClick={handleDelete}
                        style={{ color: red[500] }}
                     />
                  </Grid>
               </ExpansionPanelDetails>
            </ExpansionPanel>
         </Fade>
      </ThemeProvider>
   );
};

const mapState = state => ({
   editing: state.app.editing,
   deleting: state.app.deleting
});

const actionsCreator = {
   delTodo,
   editTodo,
   doneTodo,
   setDeleting,
   setEditing
};

export default connect(mapState, actionsCreator)(TodoCard);
