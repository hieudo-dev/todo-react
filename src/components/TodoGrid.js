import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TodoColumn from "./TodoColumn";
import { green, red, blue } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
   root: {
      flexGrow: 1,
      padding: "1% 5%"
   }
}));

const TodoGrid = ({ todos, delTodo, editTodo }) => {
   const classes = useStyles();

   return (
      <Grid className={classes.root} container alignItems="flex-start">
         <TodoColumn
            key={0}
            header="Done"
            todos={todos.done}
            backColor={green[800]}
         />
         <TodoColumn
            key={1}
            header="Important"
            todos={todos.important}
            backColor={red[800]}
         />
         <TodoColumn
            key={2}
            header="Common"
            todos={todos.common}
            backColor={blue[800]}
         />
      </Grid>
   );
};

const mapState = state => ({
   todos: state.todos
});

export default connect(mapState)(TodoGrid);
