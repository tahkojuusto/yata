import uuidv4 from 'uuid/v4';

export const addTask = description => ({
  type: 'ADD_TASK',
  id: uuidv4(),
  description,
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
};
