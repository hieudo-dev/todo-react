import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TodoCard from "./TodoCard";

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

const TodoColumn = props => {
   const classes = useStyles();

   const handleDone = () => {
      // TODO: move todo to completed list
   };

   const handleDelete = id => {
      // setState({ ...state, deleting: id });
      // setTimeout(() => delTodo(id), 300);
   };

   const handleEditClick = id => {
      // switch (state.editing) {
      //    case id:
      //       setState({ ...state, editing: -1 });
      //       editTodo(id, state.updatedTodo);
      //       break;
      //    default:
      //       setState({ ...state, editing: id });
      //       break;
      // }
   };

   const handleTextChange = event => {
      // setState({ ...state, updatedTodo: event.target.value });
   };

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
            <h3
               className={classes.categoryHeader}
               style={{ backgroundColor: props.backColor }}
            >
               {props.header}
            </h3>
         </Typography>
         {props.todos.map(([id, data]) => (
            <Grid className={classes.card} item>
               <TodoCard
                  key={id}
                  id={id}
                  active={id !== props.deleting}
                  editing={id === props.editing}
                  data={data}
                  onDone={() => handleDone()}
                  onTextChange={handleTextChange}
                  onEdit={() => handleEditClick(id)}
                  onDelete={() => handleDelete(id)}
               >
                  {data}
               </TodoCard>
            </Grid>
         ))}
      </Grid>
   );
};

export default TodoColumn;
