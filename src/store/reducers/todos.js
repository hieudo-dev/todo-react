import * as actions from "../constants";

const todoState = {
   done: [],
   important: [],
   active: []
};

// // Mock data
// const todoState = {
//    done: [
//       [
//          1,
//          "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. At per augue perfecto, quo persecuti posidonium in. "
//       ],
//       [
//          2,
//          "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. "
//       ]
//    ],
//    important: [
//       [
//          3,
//          "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. At per augue perfecto, quo persecuti posidonium in. His id vero labore, epicurei insolens in qui. Ad purto verear expetendis vim, ad posse clita sadipscing vel. Id est nulla eripuit dignissim, elit tibique definitionem nam ex."
//       ],
//       [
//          4,
//          "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. "
//       ]
//    ],
//    active: [
//       [5, "Lorem ipsum dolor sit amet per sonet everti ne. "],
//       [6, "6 Lorem ipsum dolor sit amet. "],
//       [7, "7 Lorem ipsum dolor sit amet. "],
//       [8, "8 Lorem ipsum dolor sit amet. "],
//       [9, "9 Lorem ipsum dolor sit amet. "],
//       [10, "10 Lorem ipsum dolor sit amet. "]
//    ]
// };

const todosReducer = (state = todoState, action) => {
   switch (action.type) {
      case actions.SET_TODOS:
         return {
            ...state,
            done: action.id === "Done" ? action.list : state.done,
            important:
               action.id === "Important" ? action.list : state.important,
            active: action.id === "Active" ? action.list : state.active
         };
      case actions.DEL_TODO:
         return {
            ...state,
            done: state.done.filter(([id]) => id !== action.id),
            important: state.important.filter(([id]) => id !== action.id),
            active: state.active.filter(([id]) => id !== action.id)
         };
      case actions.EDIT_TODO:
         return {
            ...state,
            done: state.done.map(([id, data]) =>
               id === action.id ? [id, action.data] : [id, data]
            ),
            important: state.important.map(([id, data]) =>
               id === action.id ? [id, action.data] : [id, data]
            ),
            active: state.active.map(([id, data]) =>
               id === action.id ? [id, action.data] : [id, data]
            )
         };
      case actions.DONE_TODO:
         let doneTodo;
         let doneInd = state.important.findIndex(([id]) => id === action.id);
         if (doneInd !== -1) {
            doneTodo = state.important[doneInd];
         }
         doneInd = state.active.findIndex(([id]) => id === action.id);
         if (doneInd !== -1) {
            doneTodo = state.active[doneInd];
         }

         return {
            ...state,
            done: state.done.concat([doneTodo]),
            important: state.important.filter(([id]) => id !== action.id),
            active: state.active.filter(([id]) => id !== action.id)
         };
      default:
         return state;
   }
};

export default todosReducer;
