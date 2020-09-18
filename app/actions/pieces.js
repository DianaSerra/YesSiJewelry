import {
  REQUEST_ALL_PIECE_DATA,
  RECEIVE_ALL_PIECE_DATA,
  REQUEST_ADD_PIECE,
  RECEIVE_ADD_PIECE,
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

export function requestAddPiece(data) {
  return {
    type: REQUEST_ADD_PIECE,
    newPiece: data,
  };
}

export function receiveAddPiece(newPiece) {
  return {
    type: RECEIVE_ADD_PIECE,
    newPiece: newPiece,
  };
}

export function addNewPiece(newPieceData) {
  console.log('addNewPiece');
  return dispatch => {
    dispatch(requestAddPiece(newPieceData));
    console.log('NEWPIECEDATA: ' + JSON.stringify(newPieceData));
    return fetch(`${API}/add-piece`, {
      method: 'POST',
      body: JSON.stringify(newPieceData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => dispatch(receiveAddPiece(json)));
  };
}
