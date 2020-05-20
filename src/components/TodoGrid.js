import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TodoColumn from "./TodoColumn";
import { green, red, blue } from "@material-ui/core/colors";
import { setTodos } from "../store/actions";

const useStyles = makeStyles(theme => ({
   root: {
      flexGrow: 1,
      padding: "1% 5%"
   }
}));

const TodoGrid = props => {
   const classes = useStyles();

   //
   useEffect(() => {
      const done = localStorage.getItem("Done");
      props.setTodos("Done", done ? done : []);

      const important = localStorage.getItem("Important");
      props.setTodos("Important", important ? important : []);

      const active = localStorage.getItem("Active");
      props.setTodos("Active", active ? active : []);

      return () => {
         localStorage.setItem("Done", JSON.stringify(props.done));
         localStorage.setItem("Important", JSON.stringify(props.important));
         localStorage.setItem("Active", JSON.stringify(props.active));
      };
   }, []);

   return (
      <Grid className={classes.root} container alignItems="flex-start">
         <TodoColumn
            key={1}
            header="Important"
            todos={props.important}
            backColor={red[800]}
         />
         <TodoColumn
            key={2}
            header="Active"
            todos={props.active}
            backColor={blue[800]}
         />
         <TodoColumn
            key={0}
            header="Done"
            todos={props.done}
            backColor={green[800]}
            done={true}
         />
      </Grid>
   );
};

const mapState = state => ({
   done: state.todos.done,
   important: state.todos.important,
   active: state.todos.active
});

const actionsCreator = {
   setTodos
};

export default connect(mapState, actionsCreator)(TodoGrid);
