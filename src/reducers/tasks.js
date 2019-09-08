const initialState = {
  tasks: [],
  pending: false,
};

const taskState = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TASKS_START': {
      return {
        ...state,
        pending: true,
      };
    }
    case 'GET_TASKS_SUCCESS': {
      return {
        ...state,
        tasks: action.tasks,
        pending: false,
      };
    }
    case 'ADD_TASK_SUCCESS':
      const task = {
        id: action.id,
        owner: action.owner,
        content: action.content,
        completed: action.completed,
      };
      return {
        ...state,
        tasks: [...state.tasks, task],
      };
    case 'DELETE_TASK_SUCCESS': {
      const index = state.tasks.findIndex(task => task.id === action.id);
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, index),
          ...state.tasks.slice(index + 1),
        ],
      };
    }

    case 'TOGGLE_COMPLETED_SUCCESS':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.id
            ? {
                ...task,
                completed: action.completed,
              }
            : task
        ),
      };
    default:
      return state;
  }
};

export default taskState;
