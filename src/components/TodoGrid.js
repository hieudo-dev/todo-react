import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      margin: 0
   },
   paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
   },
   category:{
      padding: 15
   }
}));

export default () => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Grid container justify='center'>
            <Grid className={classes.category} container xs={6} sm={3} direction='column' justify='flex-start' spacing={1} >
               <Grid item>
                  <Paper className={classes.paper}>1</Paper>
               </Grid>
               <Grid item>
                  <Paper className={classes.paper}>2</Paper>
               </Grid>
               <Grid item>
                  <Paper className={classes.paper}>3</Paper>
               </Grid>
            </Grid>
            <Grid className={classes.category} container xs={6} sm={3} direction='column' justify='flex-start' spacing={1}>
               <Grid item>
                  <Paper className={classes.paper}>4</Paper>
               </Grid>
               <Grid item>
                  <Paper className={classes.paper}>5</Paper>
               </Grid>
               <Grid item>
                  <Paper className={classes.paper}>6</Paper>
               </Grid>
               <Grid item>
                  <Paper className={classes.paper}>7</Paper>
               </Grid>
            </Grid>
            <Grid className={classes.category} container xs={6} sm={3} direction='column' justify='flex-start' spacing={1} >
               <Grid item>
                  <Paper className={classes.paper}>1</Paper>
               </Grid>
               <Grid item>
                  <Paper className={classes.paper}>2</Paper>
               </Grid>
               <Grid item>
                  <Paper className={classes.paper}>3</Paper>
               </Grid>
            </Grid>
            <Grid className={classes.category} container xs={6} sm={3} direction='column' justify='flex-start' spacing={1} >
               <Grid item>
                  <Paper className={classes.paper}>1</Paper>
               </Grid>
               <Grid item>
                  <Paper className={classes.paper}>2</Paper>
               </Grid>
               <Grid item>
                  <Paper className={classes.paper}>3</Paper>
               </Grid>
            </Grid>
         </Grid>
      </div>
   );
}