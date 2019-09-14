import {
  createTask as createTaskGQL,
  updateTask as updateTaskGQL,
  deleteTask as deleteTaskGQL,
  fetchTasks as getTasksGQL,
} from '../services';

export const getTasksStart = () => {
  return {
    type: 'GET_TASKS_START',
  };
};

export const getTasksSuccess = tasks => {
  return {
    type: 'GET_TASKS_SUCCESS',
    tasks,
  };
};

export const getTasksError = content => {
  return {
    type: 'GET_TASKS_ERROR',
    content,
  };
};

export const addTaskStart = () => {
  return {
    type: 'ADD_TASK_START',
  };
};

export const addTaskSuccess = ({ id, owner, content, completed }) => {
  return {
    type: 'ADD_TASK_SUCCESS',
    owner,
    id,
    content,
    completed,
  };
};

export const addTaskError = content => {
  return {
    type: 'ADD_TASK_ERROR',
    content,
  };
};

export const deleteTaskSuccess = ({ id }) => {
  return {
    type: 'DELETE_TASK_SUCCESS',
    id,
  };
};

export const deleteTaskError = content => {
  return {
    type: 'DELETE_TASK_ERROR',
    content,
  };
};

export const toggleCompletedStart = (id, completed) => {
  return {
    type: 'TOGGLE_COMPLETED_START',
    id,
    completed,
  };
};

export const toggleCompletedSuccess = ({ id, completed }) => ({
  type: 'TOGGLE_COMPLETED_SUCCESS',
  id,
  completed,
});

export const toggleCompletedError = content => {
  return {
    type: 'TOGGLE_COMPLETED_ERROR',
    content,
  };
};

export function getTasks() {
  return function(dispatch) {
    dispatch(getTasksStart());

    return getTasksGQL().then(
      res => dispatch(getTasksSuccess(res)),
      err => dispatch(getTasksError(err))
    );
  };
}

export function addTask(content) {
  return function(dispatch) {
    dispatch(addTaskStart);

    const task = {
      content,
      completed: false,
    };
    return createTaskGQL(task).then(
      res => dispatch(addTaskSuccess(res)),
      err => dispatch(addTaskError(err))
    );
  };
}

export function toggleCompleted(id, completed) {
  return function(dispatch) {
    dispatch(toggleCompletedStart(id, completed));

    return updateTaskGQL({
      id,
      completed,
    }).then(
      res => dispatch(toggleCompletedSuccess(res)),
      err => dispatch(toggleCompletedError(err))
    );
  };
}

export function removeTask(id) {
  return function(dispatch) {
    return deleteTaskGQL({
      id,
    }).then(
      res => dispatch(deleteTaskSuccess(res)),
      err => dispatch(deleteTaskError(err))
    );
  };
}
