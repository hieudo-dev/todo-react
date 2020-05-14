/* eslint-disable no-undef */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyle = makeStyles(theme => ({
   root: {
      minWidth: 300
   },
   input: {
      marginTop: 20,
      backgroundColor: "white"
   }
}));

export default props => {
   const classes = useStyle();

   return (
      <Grid container justify="center" style={{ marginTop: 25 }}>
         <Grid item xs={6} className={classes.root}>
            <TextField
               className={classes.input}
               placeholder="Take a note..."
               fullWidth
               InputProps={{
                  style: { padding: 5, paddingLeft: 15 }
               }}
            />
         </Grid>
      </Grid>
   );
};
