import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TodoCard from './TodoCard';

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      margin: 0
   },
   category:{
      padding: 15
   },
   categoryHeader:{
      margin: 4,
      textAlign: "center"
   }
}));

export default () => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Grid container alignItems='flex-start'>
            <Grid className={classes.category} container xs={6} sm={4} direction='column' justify='flex-start' spacing={1} >
               <Grid item>
                  <h3 className={classes.categoryHeader}>Completed</h3>
               </Grid>
               <TodoCard>
                  Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. At per augue perfecto, quo persecuti posidonium in. His id vero labore, epicurei insolens in qui. Ad purto verear expetendis vim, ad posse clita sadipscing vel. Id est nulla eripuit dignissim, elit tibique definitionem nam ex.
               </TodoCard>
               <TodoCard>
                  Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. 
               </TodoCard>
               <TodoCard>
                  Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. At per augue perfecto, quo persecuti posidonium in. 
               </TodoCard>
            </Grid>
            <Grid className={classes.category} container xs={6} sm={4} direction='column' justify='flex-start' spacing={1}>
               <Grid item>
                  <h3 className={classes.categoryHeader}>Important</h3>
               </Grid>
               <TodoCard>
                  Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. 
               </TodoCard>
               <TodoCard>
                  Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. 
               </TodoCard>
               <TodoCard>
                  Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. 
               </TodoCard>
               <TodoCard>
                  Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. 
               </TodoCard>
            </Grid>
            <Grid className={classes.category} container xs={6} sm={4} direction='column' justify='flex-start' spacing={1} >
            <Grid item>
                  <h3 className={classes.categoryHeader}>Common</h3>
               </Grid>
               <TodoCard>
                  Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. 
               </TodoCard>
               <TodoCard>
                  Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. 
               </TodoCard>
               <TodoCard>
                  Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. 
               </TodoCard>
            </Grid>
         </Grid>
      </div>
   );
}