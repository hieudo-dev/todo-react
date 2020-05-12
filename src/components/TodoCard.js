import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
   },
}));

export default props => {
   const classes = useStyles();

   return (
      <Grid item>
         <Paper className={classes.paper}>
            props.children
         </Paper>
      </Grid>
   );
}