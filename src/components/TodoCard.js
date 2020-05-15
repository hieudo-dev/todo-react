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
import { delTodo, editTodo, doneTodo } from "../store/actions";

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
   const ANIMATION_LENGTH = 300;
   const [text, setText] = useState(props.data);
   const [active, setActive] = useState(true);
   const [editing, setEditing] = useState(false);

   const handleDone = () => {
      setEditing(false);
      setActive(false);
      setTimeout(() => props.doneTodo(props.id), ANIMATION_LENGTH);
   };

   const handleEditSave = () => {
      props.editTodo(props.id, text);
      setTimeout(() => setEditing(false), ANIMATION_LENGTH);
   };

   const handleDelete = () => {
      setActive(false);
      setTimeout(() => props.delTodo(props.id), ANIMATION_LENGTH);
   };

   const handleTextChange = event => {
      setText(event.target.value);
   };

   return (
      <ThemeProvider theme={theme}>
         <Fade in={active} timeout={{ appear: 0, enter: 0, exit: 300 }}>
            <ExpansionPanel expanded={editing}>
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
                           setEditing(true);
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
                     {!props.done ? (
                        <CheckIcon
                           onClick={handleDone}
                           className={classes.checkIcon}
                        />
                     ) : null}
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

const actionsCreator = {
   delTodo,
   editTodo,
   doneTodo
};

export default connect(null, actionsCreator)(TodoCard);
