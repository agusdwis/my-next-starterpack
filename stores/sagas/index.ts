import { spawn } from 'redux-saga/effects';

// Import Sagas
import movieSagas from './movieSagas';

// Export Sagas
export default function* rootSaga() {
  // eslint-disable-next-line no-console
  console.log('Hello From Redux-Saga!');
  yield spawn(movieSagas);
}
