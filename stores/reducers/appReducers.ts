import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction } from 'redux';
import { TypesApps } from '../actions';

export type InitialAppState = typeof initialAppState;

const initialAppState = {
  loading: false,
};

const appReducers = (
  state: InitialAppState = initialAppState,
  action: AnyAction
): InitialAppState => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case TypesApps.START_LOADING: {
      return { ...state, loading: true };
    }
    case TypesApps.STOP_LOADING: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};

export default appReducers;
