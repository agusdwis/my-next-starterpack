import { call, put, takeLatest } from 'redux-saga/effects';

// Import all actions
import { getMovies } from '../apis/movieAPIs';
import { TypesMovies, appActions, movieActions } from '../actions';

// Get movies list
async function getMovie() {
  const response = await getMovies();
  return response;
}

function* GetAllMovies(): Generator<any, void, never> {
  try {
    yield put(appActions.startLoading());

    const response = yield call(getMovie);
    yield put(movieActions.SuccessGetMovies(response));
  } catch (error) {
    yield put(movieActions.FailedGetMovies(error.message));
  }
}

export default function* movieSagas(): Generator<any, void, never> {
  yield takeLatest(TypesMovies.GET_MOVIES, GetAllMovies);
}
