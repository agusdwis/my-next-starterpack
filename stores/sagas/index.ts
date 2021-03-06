import { all, spawn } from 'redux-saga/effects';

// Import Sagas
import movieSagasWatcher from './movieSagas';

// Export Combined Saga
export default function* rootSaga() {
  // eslint-disable-next-line no-console
  yield all([spawn(movieSagasWatcher)]);
}
