// Import

// Libraries
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import userReducer from '../modules/user/userReducers';
import dashboardReducer from '../modules/dashboard/dashboardReducer';

const rootReducer = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
