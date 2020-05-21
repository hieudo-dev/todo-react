/* eslint-disable no-undef */
import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import { Button, InputBase, Checkbox, Snackbar } from "@material-ui/core";
import StarBorderRounded from "@material-ui/icons/StarBorderRounded";
import StarRounded from "@material-ui/icons/StarRounded";
import { addTodo } from "../store/actions";
import { red } from "@material-ui/core/colors";

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: 300,
  },
  input: {
    backgroundColor: "white",
    padding: ".4em .8em",
    width: "100%",
    border: `solid 1px ${theme.palette.primary.main}`,
    borderRight: "none",
    borderRadius: "1em 0 0 1em",
  },
  check: {
    border: `solid 1px ${theme.palette.primary.main}`,
    borderLeft: "none",
    backgroundColor: "white",
    borderRadius: 0,
    "&$checked": {
      color: red[500],
    },
  },
  checked: {},
  btn: {
    borderRadius: "0 1em 1em 0",
  },
}));

const NewTodoBar = (props) => {
  const classes = useStyle();
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [important, setImportant] = useState(false);

  const handleClick = () => {
    // TODO: add important todo
    if (important) {
      props.addTodo("Important", text);
    } else {
      props.addTodo("Active", text);
    }
    setOpen(true);
    setText("");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Grid container justify="center" style={{ marginTop: "3em", marginBottom: "1em" }}>
      <Grid container xs={5} wrap="nowrap" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Take a note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Checkbox
          checked={important}
          onChange={() => setImportant((v) => !v)}
          classes={{ root: classes.check, checked: classes.checked }}
          icon={<StarBorderRounded />}
          checkedIcon={<StarRounded />}
        />
        <Button
          className={classes.btn}
          variant="contained"
          disableElevation
          size="medium"
          color="primary"
          onClick={handleClick}
        >
          ADD
        </Button>
      </Grid>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" variant="filled">
          To do added!
        </Alert>
      </Snackbar>
    </Grid>
  );
};

const actionCreator = {
  addTodo,
};

export default connect(null, actionCreator)(NewTodoBar);
