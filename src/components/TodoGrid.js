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

const TodoGrid = props => {
   const classes = useStyles();

   return (
      <Grid className={classes.root} container alignItems="flex-start">
         <TodoColumn
            key={0}
            header="Done"
            todos={props.done}
            backColor={green[800]}
         />
         <TodoColumn
            key={1}
            header="Important"
            todos={props.important}
            backColor={red[800]}
         />
         <TodoColumn
            key={2}
            header="Common"
            todos={props.common}
            backColor={blue[800]}
         />
      </Grid>
   );
};

const mapState = state => ({
   done: state.done,
   important: state.important,
   common: state.common
});

export default connect(mapState)(TodoGrid);
