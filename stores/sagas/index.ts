import { all, spawn } from 'redux-saga/effects';

// Import Sagas
import movieSagasWatcher from './movieSagas';

// Export Combined Saga
export default function* rootSaga() {
  // eslint-disable-next-line no-console
  console.log('Redux Saga is Running!');
  yield all([spawn(movieSagasWatcher)]);
}
