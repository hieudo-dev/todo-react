// const initialState = {
//    todos: []
// };

// Mock data
const initialState = {
   todos: {
      done: [
         "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. At per augue perfecto, quo persecuti posidonium in. His id vero labore, epicurei insolens in qui. Ad purto verear expetendis vim, ad posse clita sadipscing vel. Id est nulla eripuit dignissim, elit tibique definitionem nam ex.",
         "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. At per augue perfecto, quo persecuti posidonium in. ",
         "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. "
      ],
      important: [
         "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. ",
         "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. ",
         "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. ",
         "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. "
      ],
      common: [
         "Lorem ipsum dolor sit amet, vidit eruditi percipitur vis ad, per sonet everti ne. ",
         "Lorem ipsum dolor sit amet per sonet everti ne. ",
         "Lorem ipsum dolor sit amet. "
      ]
   }
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      default:
         return state;
   }
};

export default reducer;
