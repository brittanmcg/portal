import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import siteReducer from '../modules/Site/reducer';
import homeReducer from '../modules/Home/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    homeReducer,
    siteReducer
  });
