const initialState = [
  {
    id: '59cfcd48-5e73-4476-b2ed-b4160a0cbdef',
    description: 'I need help to Exercise 1.',
  },
  {
    id: '86723077-8c0f-4ef3-9d8e-6296a703c199',
    description: "I don't know how to solve Exercise 2.",
  },
];

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          description: action.description,
        },
      ];
    default:
      return state;
  }
};

export default tasks;
