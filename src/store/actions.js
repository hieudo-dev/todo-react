import * as actions from "./constants";

export const setTodos = (id, list) => ({
   type: actions.SET_TODOS,
   id: id,
   list: list
});

export const addTodo = (category, todo) => ({
   type: actions.ADD_TODO,
   category: category,
   todo: todo
});

export const delTodo = id => ({
   type: actions.DEL_TODO,
   id: id
});

export const editTodo = (id, data) => ({
   type: actions.EDIT_TODO,
   id: id,
   data: data
});

export const doneTodo = (id, data) => ({
   type: actions.DONE_TODO,
   id: id,
   data: data
});
