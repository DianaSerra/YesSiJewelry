import {
  REQUEST_ALL_PIECE_DATA,
  RECEIVE_ALL_PIECE_DATA,
  REQUEST_ADD_PIECE,
  RECEIVE_ADD_PIECE,
} from '../constants/index.js';

export function pieces(
  state = {
    isFetching: false,
    items: [],
  },
  action,
) {
  switch (action.type) {
    case REQUEST_ALL_PIECE_DATA:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_ALL_PIECE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.pieces,
      });
    default:
      return state;
  }
}
export function newPiece(state = {isCreating: false, newPiece: {}}, action) {
  switch (action.type) {
    case REQUEST_ADD_PIECE:
      return Object.assign({}, state, {isCreating: true});
    case RECEIVE_ADD_PIECE:
      return Object.assign({}, state, {
        isCreating: false,
        newPiece: action.newPiece,
      });
    default:
      return state;
  }
}
