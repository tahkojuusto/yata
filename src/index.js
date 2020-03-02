import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import App from './components/App';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(loggerMiddleware)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//store.dispatch(getTasks());

render(
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline />
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);
