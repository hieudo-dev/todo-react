import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
import {
   ExpansionPanel,
   ExpansionPanelSummary,
   Typography,
   ExpansionPanelDetails,
   createMuiTheme,
   ThemeProvider
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

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
      color: theme.palette.text.primary
   },
   checkIcon: {
      color: theme.palette.primary.main,
      marginLeft: 5
   },
   editIcons: {
      color: theme.palette.text.primary.main
   }
}));

const TodoCard = props => {
   const classes = useStyles();

   return (
      <ThemeProvider theme={theme}>
         <ExpansionPanel>
            <ExpansionPanelSummary>
               <Typography className={classes.contentText}>
                  {props.children}
               </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
               <Grid container alignItems="center" justify="flex-start" xs={6}>
                  <CheckIcon className={classes.checkIcon} />
               </Grid>
               <Grid
                  container
                  className={classes.editIcons}
                  alignItems="center"
                  justify="flex-end"
                  xs={6}
                  spacing={1}
               >
                  <EditIcon style={{ marginRight: 10 }} />
                  <DeleteIcon style={{ color: red[500] }} />
               </Grid>
            </ExpansionPanelDetails>
         </ExpansionPanel>
      </ThemeProvider>
   );
};

export default TodoCard;
