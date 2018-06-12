import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from '../reducers';

const logger = createLogger({
  collapsed: true,
  duration: true,
});

const middlewares = compose(applyMiddleware(thunk));

const configureStore = () => {
  const store = createStore(reducers, undefined, middlewares);
  return store;
};

export default configureStore;
