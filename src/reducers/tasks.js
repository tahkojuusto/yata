import { Status } from '../actions';

const initialState = [
  {
    id: '1',
    description: 'Buy bananas',
    completed: false,
    status: 'AWAITING_SYNC',
  },
  {
    id: '2',
    description: 'Do code review',
    completed: true,
    status: 'AWAITING_SYNC',
  },
];

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          status: Status.AWAITING_SYNC,
          completed: false,
          description: action.description,
        },
      ];
    case 'TOGGLE_COMPLETED':
      return state.map(task =>
        task.id === action.id
          ? {
              ...task,
              completed: action.completed,
            }
          : task
      );
    default:
      return state;
  }
};

export default tasks;
