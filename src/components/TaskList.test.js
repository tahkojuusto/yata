import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TaskList } from './TaskList';

const tasks = [
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

test('renders task list component', () => {
  expect.assertions(7);

  const component = render(<TaskList tasks={tasks} pending={false} />);
  const headers = component.container.querySelectorAll('th');
  const rows = component.container.querySelectorAll('tr');
  const checkboxes = component.container.querySelectorAll('input');

  expect(headers.length).toBe(4);
  expect(rows.length).toBe(3);
  expect(checkboxes.length).toBe(2);
  expect(component.getByText('Buy bananas')).toBeTruthy();
  expect(component.getAllByText('Alice').length).toBe(2);
  expect(checkboxes[0].checked).toBeFalsy();
  expect(checkboxes[1].checked).toBeTruthy();
});

test('checks completed tasks', () => {
  expect.assertions(6);

  const toggleCompletedMockFn = jest.fn();

  const component = render(
    <TaskList
      tasks={tasks}
      pending={false}
      toggleCompleted={toggleCompletedMockFn}
    />
  );
  const checkboxes = component.container.querySelectorAll('input');

  checkboxes[0].click();
  expect(toggleCompletedMockFn).toHaveBeenCalledWith('1', true);
  expect(toggleCompletedMockFn.mock.calls.length).toBe(1);
  expect(checkboxes[0].checked).toBeTruthy();

  checkboxes[1].click();
  expect(toggleCompletedMockFn.mock.calls.length).toBe(2);
  expect(toggleCompletedMockFn).toHaveBeenCalledWith('2', false);
  expect(checkboxes[1].checked).toBeFalsy();
});

test('deletes task', () => {
  expect.assertions(2);

  const removeTaskMockFn = jest.fn();

  const component = render(
    <TaskList tasks={tasks} pending={false} removeTask={removeTaskMockFn} />
  );
  const removeLink = component.container.querySelector('a');
  removeLink.click();

  expect(removeTaskMockFn.mock.calls.length).toBe(1);
  expect(removeTaskMockFn).toHaveBeenCalledWith('1');
});
