import { call, put, takeLatest, StrictEffect } from 'redux-saga/effects';

// Import Actions
import API from '../apis/movieAPI';
import { TypesMovies, appActions, movieActions } from '../actions';

// Get Movies List
function* GetAllMovies(actions: any): Generator<StrictEffect, void, any> {
  try {
    yield put(appActions.startLoading());

    const response = yield call(API.getMovies, actions.payload);

    if (response.Response === 'True') {
      yield put(movieActions.SuccessGetMovies(response));
    } else {
      yield put(movieActions.FailedGetMovies(response.Error));
    }
    yield put(appActions.stopLoading());
  } catch (error) {
    yield put(movieActions.FailedGetMovies(error.message));
  }
}

export default function* movieSagasWatcher(): Generator<any, void, never> {
  yield takeLatest(TypesMovies.GET_MOVIES_START, GetAllMovies);
}
