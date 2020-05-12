/* eslint-disable no-undef */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default props => {
   return (
      <Grid container justify='center' style={{marginTop: 25}}>
         <Grid item xs={6}>
         <TextField 
            style={{ marginTop: 20, backgroundColor: 'white'}}
            placeholder="Take a note..."
            fullWidth
            InputProps={{
               style: { padding: 5, paddingLeft: 15 }
            }}
         />
         </Grid>
      </Grid>
   );
}