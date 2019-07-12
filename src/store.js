import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers/rootReducer';
export const history = createBrowserHistory();
export default function configureStore(initialState = {}) {
  // Middleware and store enhancers
  return createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
  );
}
