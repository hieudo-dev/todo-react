import * as actions from "./constants";

export const addTodo = data => ({
   type: actions.ADD_TODO,
   data: data
});

export const delTodo = id => ({
   type: actions.DEL_TODO,
   id: id
});

export const editTodo = id => ({
   type: actions.EDIT_TODO,
   id: id
});

export const doneTodo = (id, data) => ({
   type: actions.DONE_TODO,
   id: id,
   data: data
});

export const setDeleting = val => ({
   type: actions.SET_DELETING,
   val: val
});

export const setEditing = val => ({
   type: actions.SET_EDITING,
   val: val
});

export const setUpdated = val => ({
   type: actions.SET_UPDATED,
   val: val
});
