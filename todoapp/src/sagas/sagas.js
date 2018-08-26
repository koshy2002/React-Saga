import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {receiveApiData } from "./../actions/TaskActions";
import * as types from '../actions/actionTypes';
import { fetchData } from "./../api/api";

// worker Saga: will be fired on US/ER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    // do api call
   yield  console.log('hiii 2');
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield  console.log('hiii 1');
  yield takeLatest(types.REQUEST_API_DATA, getApiData);
}