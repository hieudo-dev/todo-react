import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TodoCard from './TodoCard';
import { green, red, blue } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      padding: '1% 5%'
   },
   category:{
      padding: 6,
   },
   categoryHeader:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 4,
      color: "white",
      minHeight: 40
   }
}));

export default () => {
   const classes = useStyles();
   const mockTodos = {
      done: [
         "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. At per augue perfecto, quo persecuti posidonium in. His id vero labore, epicurei insolens in qui. Ad purto verear expetendis vim, ad posse clita sadipscing vel. Id est nulla eripuit dignissim, elit tibique definitionem nam ex.",
         "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. At per augue perfecto, quo persecuti posidonium in. ",
         "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. "
      ],
      important: [
         "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. ",
         "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. ",
         "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. ",
         "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. "
      ],
      common: [
         "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. ",
         "Lorem ipsum dolor sit amet per sonet everti ne. ",
         "Lorem ipsum dolor sit amet. "
      ]
   }

   return (
      <Grid className={classes.root} container alignItems='flex-start'>
         <Grid className={classes.category} container xs={6} sm={4} direction='column' justify='flex-start'>
            <Grid item>
               <Typography>
                  <h3 className={classes.categoryHeader} style={{backgroundColor: green[700]}}>Done</h3>
               </Typography>
            </Grid>
            {mockTodos.done.map(todo => (
               <TodoCard>
                  {todo}
               </TodoCard>
            ))}                  
         </Grid>
         <Grid className={classes.category} container xs={6} sm={4} direction='column' justify='flex-start'>
            <Grid item>
               <Typography>
                  <h3 className={classes.categoryHeader} style={{backgroundColor: red[700]}}>Important</h3>
               </Typography>
            </Grid>               
            {mockTodos.important.map(todo => (
               <TodoCard>
                  {todo}
               </TodoCard>
            ))}     
         </Grid>
         <Grid className={classes.category} container xs={6} sm={4} direction='column' justify='flex-start'>
            <Grid item>
               <Typography>
                  <h3 className={classes.categoryHeader} style={{backgroundColor: blue[700]}}>To do</h3>
               </Typography>
            </Grid>            
            {mockTodos.common.map(todo => (
               <TodoCard>
                  {todo}
               </TodoCard>
            ))}     
         </Grid>
      </Grid>
   );
}