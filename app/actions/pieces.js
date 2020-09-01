import {
  REQUEST_ALL_PIECE_DATA,
  RECEIVE_ALL_PIECE_DATA,
} from '../constants/index.js';

const API = 'http://192.168.2.37:3000';
function requestAllPieceData() {
  return {type: REQUEST_ALL_PIECE_DATA};
}
function receiveAllPieceData(json) {
  'receiveAllPieceData: ' + json;
  return {
    type: RECEIVE_ALL_PIECE_DATA,
    pieces: json,
    //receivedAt: Date.now(),
  };
}
export function fetchAllPieceData() {
  console.log('fetchAllPieceData');
  return dispatch => {
    dispatch(requestAllPieceData());
    return fetch(`${API}/pieces.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveAllPieceData(json)));
  };
}
