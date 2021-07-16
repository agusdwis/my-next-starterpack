import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Import Root Saga
import rootSaga from './sagas';
import rootReducer from './reducers';

// Cretae Middleware
const sagaMiddleware = createSagaMiddleware();

// Create stores
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

// Run Stores
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
