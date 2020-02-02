import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AddTask } from './AddTask';

test('renders add task component', () => {
  expect.assertions(2);

  const component = render(<AddTask />);
  const button = component.container.querySelector('button');
  const input = component.container.querySelector('input');

  expect(button).toHaveTextContent('Add');
  expect(input).toHaveAttribute('placeholder', 'Add todo item here');
});

test('adds new task', () => {
  expect.assertions(2);

  const addTaskMockFn = jest.fn();
  const component = render(<AddTask addTask={addTaskMockFn} />);

  const inputField = component.getByPlaceholderText('Add todo item here');
  fireEvent.change(inputField, { target: { value: 'Buy bananas' } });
  const form = component.container.querySelector('form');
  fireEvent.submit(form);

  expect(addTaskMockFn.mock.calls.length).toBe(1);
  expect(addTaskMockFn).toHaveBeenCalledWith('Buy bananas');
});

test("doesn't add empty tasks", () => {
  expect.assertions(1);

  const addTaskMockFn = jest.fn();
  const component = render(<AddTask addTask={addTaskMockFn} />);

  const form = component.container.querySelector('form');
  fireEvent.submit(form);

  expect(addTaskMockFn.mock.calls.length).toBe(0);
});
