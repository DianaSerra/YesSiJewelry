import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {pieces, newPiece} from '../reducers/pieceReducer.js';
const rootReducer = combineReducers({all_pieces: pieces, new_piece: newPiece});

const loggerMiddleware = createLogger();
export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware),
  );
}
