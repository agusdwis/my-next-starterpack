import { combineReducers } from 'redux';

import appReducers from './appReducers';
import movieReducers from './movieReducers';

export default combineReducers({
  app: appReducers,
  movie: movieReducers,
});
