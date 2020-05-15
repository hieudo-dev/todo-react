import { createStore, combineReducers } from "redux";
import appReducer from "./reducers/app";
import todosReducer from "./reducers/todos";

const rootReducer = combineReducers({
   app: appReducer,
   todos: todosReducer
});

const store = createStore(rootReducer);

export default store;
