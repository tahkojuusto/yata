import React from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';

import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(awsconfig);

const App = () => (
  <>
    <AddTask />
    <TaskList />
  </>
);

export default withAuthenticator(App, true);
