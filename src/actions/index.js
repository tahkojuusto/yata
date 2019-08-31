import uuidv4 from 'uuid/v4';

export const addTask = description => ({
  type: 'ADD_TASK',
  id: uuidv4(),
  status: 'AWAITING_SYNC',
  completed: false,
  description,
});

export const toggleCompleted = (id, completed) => ({
  type: 'TOGGLE_COMPLETED',
  id,
  completed,
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
};

export const Status = {
  AWAITING_SYNC: 'AWAITING_SYNC',
  SYNC_OK: 'SYNC_OK',
  SYNC_ERROR: 'SYNC_ERROR',
};
