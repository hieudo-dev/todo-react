import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
import {
   ExpansionPanel,
   ExpansionPanelSummary,
   ExpansionPanelDetails,
   createMuiTheme,
   ThemeProvider,
   Fade,
   TextField
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
// import { delTodo, editTodo } from "../store/actions";

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

   return (
      <ThemeProvider theme={theme}>
         <Fade in={props.active} timeout={{ appear: 0, enter: 0, exit: 300 }}>
            <ExpansionPanel>
               <ExpansionPanelSummary>
                  <TextField
                     fullWidth
                     classes={{
                        root: classes.contentText,
                        disabled: classes.disabled
                     }}
                     disabled={!props.editing}
                     multiline={true}
                     defaultValue={props.data}
                     InputProps={{ disableUnderline: true }}
                     onChange={props.onTextChange}
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
                        onClick={props.onEdit}
                        style={{ marginRight: 10 }}
                     />
                     <DeleteIcon
                        onClick={props.onDelete}
                        style={{ color: red[500] }}
                     />
                  </Grid>
               </ExpansionPanelDetails>
            </ExpansionPanel>
         </Fade>
      </ThemeProvider>
   );
};

export default TodoCard;
