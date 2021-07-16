import { createStore, applyMiddleware } from 'redux';

// Create middleware for saga
import createSagaMiddleware from 'redux-saga';

// Import Saga and Middleware
import rootSaga from './sagas';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

// Create stores
const store = createStore(reducer, {}, applyMiddleware(sagaMiddleware));

// Run saga stores
sagaMiddleware.run(rootSaga);

export default store;

// import { applyMiddleware, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { createWrapper } from 'next-redux-wrapper';

// import rootReducer from './reducers';
// import rootSaga from './sagas';

// const bindMiddleware = (middleware: any) => applyMiddleware(...middleware);

// export const makeStore = () => {
//   const sagaMiddleware = createSagaMiddleware();
//   const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

//   sagaMiddleware.run(rootSaga);

//   return store;
// };

// export const wrapper = createWrapper(makeStore, { debug: true });
