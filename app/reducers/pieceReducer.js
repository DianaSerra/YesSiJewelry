import {
  REQUEST_ALL_PIECE_DATA,
  RECEIVE_ALL_PIECE_DATA,
} from '../constants/index.js';

function pieceReducer(
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

export default pieceReducer;
