import * as actions from "./constants";

// const initialState = {
//    todos: []
// };

// Mock data
const initialState = {
   todos: {
      done: [
         [
            1,
            "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. At per augue perfecto, quo persecuti posidonium in. "
         ],
         [
            2,
            "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. "
         ]
      ],
      important: [
         [
            3,
            "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. At per augue perfecto, quo persecuti posidonium in. His id vero labore, epicurei insolens in qui. Ad purto verear expetendis vim, ad posse clita sadipscing vel. Id est nulla eripuit dignissim, elit tibique definitionem nam ex."
         ],
         [
            4,
            "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. "
         ]
      ],
      common: [
         [5, "Lorem ipsum dolor sit amet per sonet everti ne. "],
         [6, "6 Lorem ipsum dolor sit amet. "],
         [7, "7 Lorem ipsum dolor sit amet. "],
         [8, "8 Lorem ipsum dolor sit amet. "],
         [9, "9 Lorem ipsum dolor sit amet. "],
         [10, "10 Lorem ipsum dolor sit amet. "]
      ]
   }
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actions.DEL_TODO:
         return {
            ...state,
            todos: {
               done: state.todos.done.filter(([id]) => id !== action.id),
               important: state.todos.important.filter(
                  ([id]) => id !== action.id
               ),
               common: state.todos.common.filter(([id]) => id !== action.id)
            }
         };
      default:
         return state;
   }
};

export default reducer;
