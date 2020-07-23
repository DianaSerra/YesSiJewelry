import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import pieceReducer from '../reducers/pieceReducer.js';
const rootReducer = combineReducers({all_pieces: pieceReducer});

const loggerMiddleware = createLogger();
export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware),
  );
}
