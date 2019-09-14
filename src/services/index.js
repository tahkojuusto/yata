import API, { graphqlOperation } from '@aws-amplify/api';
import { listTasks as listTasksGQL } from '../graphql/queries';
import {
  createTask as createTaskGQL,
  updateTask as updateTaskGQL,
  deleteTask as deleteTaskGQL,
} from '../graphql/mutations';

export function fetchTasks() {
  return API.graphql(graphqlOperation(listTasksGQL)).then(
    res => res.data.listTasks.items
  );
}

export function createTask(task) {
  return API.graphql(
    graphqlOperation(createTaskGQL, {
      input: task,
    })
  ).then(res => res.data.createTask);
}

export function updateTask(task) {
  return API.graphql(
    graphqlOperation(updateTaskGQL, {
      input: task,
    })
  ).then(res => res.data.updateTask);
}

export function deleteTask(task) {
  return API.graphql(
    graphqlOperation(deleteTaskGQL, {
      input: task,
    })
  ).then(res => res.data.deleteTask);
}
