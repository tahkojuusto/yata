import { Status } from '../actions';

const initialState = [
  {
    id: '1',
    content: 'Buy bananas',
    completed: false,
    status: 'AWAITING_SYNC',
  },
  {
    id: '2',
    content: 'Do code review',
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
          content: action.content,
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
    case 'SYNC_REMOTE': {
      // TODO: Invoke remote Amplify and sync tasks here.
      return state.map(task =>
        task.status === Status.AWAITING_SYNC
          ? {
              ...task,
              status: Status.SYNC_OK,
            }
          : task
      );
    }
    default:
      return state;
  }
};

export default tasks;
