import { BaseAction } from '@/interfaces';
import { HYDRATE } from 'next-redux-wrapper';
import { TypesMovies } from '../actions';

export type InitialMovieState = typeof initialMovieState;

const initialMovieState = {
  error: false,
  message: '',
  movies: [],
};

const movieReducers = (
  state: InitialMovieState = initialMovieState,
  action: BaseAction
): InitialMovieState => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case TypesMovies.GET_MOVIES_SUCCESS: {
      return { ...state, movies: action.payload };
    }
    case TypesMovies.GET_MOVIES_ERROR: {
      return { ...state, error: true, message: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default movieReducers;
