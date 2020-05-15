import * as actions from "../constants";

const appState = {
   deleting: null,
   editing: null
};

const appReducer = (state = appState, action) => {
   switch (action.type) {
      case actions.SET_DELETING:
         return {
            ...state,
            deleting: action.val
         };
      case actions.SET_EDITING:
         return {
            ...state,
            editing: action.val
         };
      default:
         return state;
   }
};

export default appReducer;
