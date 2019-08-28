const tasks = (state = [], action) => {
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
