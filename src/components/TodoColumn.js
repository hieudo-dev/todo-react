import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TodoCard from "./TodoCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1% 5%",
  },
  card: {
    margin: 4,
  },
  category: {
    padding: 6,
  },
  categoryHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    minHeight: 40,
    borderRadius: "1em",
  },
}));

const TodoColumn = (props) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.category}
      container
      xs={12}
      sm={4}
      direction="column"
      justify="flex-start"
    >
      <Typography>
        <h3 className={classes.categoryHeader} style={{ backgroundColor: props.backColor }}>
          {props.header}
        </h3>
      </Typography>
      {props.todos.map(([id, data]) => (
        <Grid className={classes.card} item>
          <TodoCard key={id} id={id} data={data} done={props.done}>
            {data}
          </TodoCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default TodoColumn;
