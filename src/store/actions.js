import * as actions from "./constants";

export const addTodo = data => ({
   type: actions.ADD_TODO,
   data: data
});

export const delTodo = id => ({
   type: actions.DEL_TODO,
   id: id
});

export const editTodo = ({ id, data }) => ({
   type: actions.EDIT_TODO,
   id: id,
   data: data
});
