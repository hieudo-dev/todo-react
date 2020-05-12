import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
   overrides: {
      MuiExpansionPanelSummary: {
         content: {
            "&$expanded": {
               margin: '12px 0px'
            }
         }
      },
   }
});

const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(.5),
   },
   contentText: {
      color: theme.palette.text.primary.main
   },
   contentButtons: {
      color: theme.palette.primary.main,
      padding: 10
   }
}));

export default props => {
   const classes = useStyles();
   const [, setChecked] = React.useState(true);

   const handleChange = () => {
      setChecked((prev) => !prev);
   };

   return (
      <ThemeProvider theme={theme}>
         <Grid className={classes.root} item onClick={handleChange}>
            <ExpansionPanel>
               <ExpansionPanelSummary>
                  <Typography>
                     {props.children}
                  </Typography>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails classes={{root: classes.contentButtons}}>
                  <Grid container justify='flex-end' spacing={1}>
                     <Grid item>
                        <EditIcon/>
                     </Grid>
                     <Grid item>
                        <DeleteIcon/>
                     </Grid>
                  </Grid>
               </ExpansionPanelDetails>
            </ExpansionPanel>
         </Grid>
      </ThemeProvider>
   );
}