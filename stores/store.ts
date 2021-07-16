import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Import Root Saga
import rootSaga from './sagas';
import rootReducer from './reducers';

// Cretae Middleware
const sagaMiddleware = createSagaMiddleware();

// Create stores
const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(rootReducer, {}, bindMiddleware([sagaMiddleware]));

// Run Stores
sagaMiddleware.run(rootSaga);

export default store;
