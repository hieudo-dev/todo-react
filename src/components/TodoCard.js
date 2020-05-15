import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
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
   setDeleting,
   setEditing,
   setUpdated
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

   // const handleDone = () => {
   //    // TODO: move todo to completed list
   // };

   const handleEditClick = () => {
      switch (props.editing) {
         case props.id:
            props.setEditing(null);
            props.editTodo(props.id);
            break;
         default:
            props.setEditing(props.id);
            props.setUpdated(props.data);
            break;
      }
   };

   const handleDelete = () => {
      props.setDeleting(props.id);
      setTimeout(() => {
         props.delTodo(props.id);
         props.setDeleting(null);
      }, 300);
   };

   const handleTextChange = event => {
      props.setUpdated(event.target.value);
   };

   return (
      <ThemeProvider theme={theme}>
         <Fade
            in={props.id !== props.deleting}
            timeout={{ appear: 0, enter: 0, exit: 300 }}
         >
            <ExpansionPanel>
               <ExpansionPanelSummary>
                  <TextField
                     fullWidth
                     classes={{
                        root: classes.contentText
                        // disabled: classes.disabled
                     }}
                     disabled={props.id !== props.editing}
                     multiline={true}
                     defaultValue={props.data}
                     InputProps={{ disableUnderline: true }}
                     onChange={handleTextChange}
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
                        onClick={props.onDone}
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
                     <EditIcon
                        onClick={() => handleEditClick()}
                        style={{ marginRight: 10 }}
                     />
                     <DeleteIcon
                        onClick={() => handleDelete()}
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
   editing: state.editing,
   deleting: state.deleting
});

const actionsCreator = {
   delTodo,
   editTodo,
   setDeleting,
   setEditing,
   setUpdated
};

export default connect(mapState, actionsCreator)(TodoCard);
