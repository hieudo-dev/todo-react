import React, { useState } from "react";
import { connect } from "react-redux";
import { delTodo, editTodo } from "../store/actions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TodoCard from "./TodoCard";
import { green, red, blue } from "@material-ui/core/colors";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
   root: {
      flexGrow: 1,
      padding: "1% 5%"
   },
   card: {
      margin: 4
   },
   category: {
      padding: 6
   },
   categoryHeader: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 4,
      color: "white",
      minHeight: 40
   }
}));

const TodoGrid = ({ todos, delTodo, editTodo }) => {
   const classes = useStyles();
   const [state, setState] = useState({ deleting: -1, editing: -1 });

   const handleDelete = id => {
      setState({ ...state, deleting: id });
      setTimeout(() => delTodo(id), 300);
   };

   return (
      <Grid className={classes.root} container alignItems="flex-start">
         <Grid
            className={classes.category}
            container
            xs={12}
            sm={4}
            direction="column"
            justify="flex-start"
         >
            <Typography>
               <h3
                  className={classes.categoryHeader}
                  style={{ backgroundColor: green[700] }}
               >
                  Done
               </h3>
            </Typography>
            {todos.done.map(([id, data]) => (
               <Grid className={classes.card} item>
                  <TodoCard
                     key={id}
                     id={id}
                     active={id !== state.deleting}
                     onEdit={() => null}
                     onDelete={() => handleDelete(id)}
                  >
                     {data}
                  </TodoCard>
               </Grid>
            ))}
         </Grid>
         <Grid
            className={classes.category}
            container
            xs={12}
            sm={4}
            direction="column"
            justify="flex-start"
         >
            <Typography>
               <h3
                  className={classes.categoryHeader}
                  style={{ backgroundColor: red[700] }}
               >
                  Important
               </h3>
            </Typography>
            {todos.important.map(([id, data]) => (
               <Grid className={classes.card} item>
                  <TodoCard
                     key={id}
                     id={id}
                     active={id !== state.deleting}
                     onEdit={() => null}
                     onDelete={() => handleDelete(id)}
                  >
                     {data}
                  </TodoCard>
               </Grid>
            ))}
         </Grid>
         <Grid
            className={classes.category}
            container
            xs={12}
            sm={4}
            direction="column"
            justify="flex-start"
         >
            <Typography>
               <h3
                  className={classes.categoryHeader}
                  style={{ backgroundColor: blue[700] }}
               >
                  To do
               </h3>
            </Typography>
            {todos.common.map(([id, data]) => (
               <Grid className={classes.card} item>
                  <TodoCard
                     key={id}
                     id={id}
                     active={id !== state.deleting}
                     onEdit={() => null}
                     onDelete={() => handleDelete(id)}
                  >
                     {data}
                  </TodoCard>
               </Grid>
            ))}
         </Grid>
      </Grid>
   );
};

const mapState = state => ({
   todos: state.todos
});

const actionCreators = {
   editTodo,
   delTodo
};

export default connect(mapState, actionCreators)(TodoGrid);
