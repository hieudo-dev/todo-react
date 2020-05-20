import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TodoColumn from "./TodoColumn";
import { green, red, blue } from "@material-ui/core/colors";
import { setTodos } from "../store/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1% 5%",
  },
}));

const TodoGrid = (props) => {
  const classes = useStyles();
  const [initiated, setInitiated] = useState(false);

  // Update local storage upon Mount and Unmount
  useEffect(() => {
    const done = JSON.parse(localStorage.getItem("Done"));
    props.setTodos("Done", done);

    const important = JSON.parse(localStorage.getItem("Important"));
    props.setTodos("Important", important);

    const active = JSON.parse(localStorage.getItem("Active"));
    props.setTodos("Active", active);

    setInitiated(true);

    return () => {
      localStorage.setItem("Done", JSON.stringify(props.done));
      localStorage.setItem("Important", JSON.stringify(props.important));
      localStorage.setItem("Active", JSON.stringify(props.active));
    };
  }, []);

  // Update important
  useEffect(() => {
    if (initiated) return localStorage.setItem("Important", JSON.stringify(props.important));
  }, [props.important, initiated]);

  // Update active
  useEffect(() => {
    if (initiated) localStorage.setItem("Active", JSON.stringify(props.active));
  }, [props.active, initiated]);

  // Update done
  useEffect(() => {
    if (initiated) localStorage.setItem("Done", JSON.stringify(props.done));
  }, [props.done, initiated]);

  return (
    <Grid className={classes.root} container alignItems="flex-start">
      <TodoColumn key={1} header="Important" todos={props.important} backColor={red[800]} />
      <TodoColumn key={2} header="Active" todos={props.active} backColor={blue[800]} />
      <TodoColumn key={0} header="Done" todos={props.done} backColor={green[800]} done={true} />
    </Grid>
  );
};

const mapState = (state) => ({
  done: state.todos.done,
  important: state.todos.important,
  active: state.todos.active,
});

const actionsCreator = {
  setTodos,
};

export default connect(mapState, actionsCreator)(TodoGrid);
