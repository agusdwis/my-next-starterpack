import { BaseAction } from '@/interfaces';

export const TypesMovies = {
  GET_MOVIES: 'GET_MOVIES_START' as const,
  GET_MOVIES_SUCCESS: 'GET_MOVIES_SUCCESS' as const,
  GET_MOVIES_ERROR: 'GET_MOVIES_ERROR' as const,
};

export const movieActions = {
  SuccessGetMovies: (movies: any): BaseAction => ({
    type: TypesMovies.GET_MOVIES_SUCCESS,
    payload: {
      movies,
    },
  }),

  FailedGetMovies: (message: string): BaseAction => ({
    type: TypesMovies.GET_MOVIES_ERROR,
    payload: {
      message,
    },
  }),
};
