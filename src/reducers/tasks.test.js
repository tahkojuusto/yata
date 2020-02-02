import cases from 'jest-in-case';

import taskReducer from './tasks';

const mockTasks = [
  {
    id: '1',
    content: 'Buy bananas',
    owner: 'Alice',
    completed: false,
  },
  {
    id: '2',
    content: 'Buy apples',
    owner: 'Alice',
    completed: true,
  },
];

const getTasksStartTest = {
  name: 'Start fetching tasks',
  state: { tasks: [], pending: false },
  action: {
    type: 'GET_TASKS_START',
    payload: null,
  },
  assertions: (newState, state, action) => {
    expect(newState.pending).toBeTruthy();
  },
};

const getTasksSuccessTest = {
  name: 'Finish fetching tasks',
  state: { tasks: [], pending: true },
  action: {
    type: 'GET_TASKS_SUCCESS',
    tasks: mockTasks,
  },
  assertions: (newState, state, action) => {
    expect(newState.pending).toBeFalsy();
    expect(newState.tasks.length).toBe(2);
  },
};

const addTaskSuccessTest = {
  name: 'Adding new task',
  state: { tasks: [mockTasks[0]], pending: false },
  action: {
    type: 'ADD_TASK_SUCCESS',
    id: mockTasks[1].id,
    owner: mockTasks[1].owner,
    content: mockTasks[1].content,
    completed: mockTasks[1].completed,
  },
  assertions: (newState, state, action) => {
    expect(newState.tasks.length).toBe(2);
  },
};

const deleteTaskSuccessTest = {
  name: 'Removing task',
  state: { tasks: mockTasks, pending: false },
  action: {
    type: 'DELETE_TASK_SUCCESS',
    id: mockTasks[0].id,
  },
  assertions: (newState, state, action) => {
    expect(newState.tasks.length).toBe(1);
    expect(newState.tasks[0].id).toBe('2');
  },
};

const toggleCompletedSuccessTest = {
  name: 'Toggling task',
  state: { tasks: mockTasks, pending: false },
  action: {
    type: 'TOGGLE_COMPLETED_SUCCESS',
    id: mockTasks[0].id,
    completed: true,
  },
  assertions: (newState, state, action) => {
    expect(newState.tasks[0].completed).toBeTruthy();
  },
};

const tests = [
  getTasksStartTest,
  getTasksSuccessTest,
  addTaskSuccessTest,
  deleteTaskSuccessTest,
  toggleCompletedSuccessTest,
];

const runTest = reducerTest => {
  const newState = taskReducer(reducerTest.state, reducerTest.action);
  reducerTest.assertions(newState, reducerTest.state, reducerTest.action);
};

cases('TaskReducer', runTest, tests);
