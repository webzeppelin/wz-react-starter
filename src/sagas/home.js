import { call, put, select } from "redux-saga/effects";
import { takeLatest, delay } from "redux-saga";

// IMPORT YOUR ACTION TYPES AND ACTION CREATORS
import * as Action from "../action";

// IMPORT NEED API FUNCTIONS
import HomeApi from "../api/home";

// export default function* homeSaga() {
//   yield takeLatest(Action.ACTION_TYPE, doSideEffect);
// }

// DEFINE YOUR SAGA SIDE EFFECT FUNCTIONS
// export function* doSideEffect(action) {
//   const result = yield call(JobApi.fetchJobState);
//   yield put(Action.actionType(result.arg1, result.arg2));
// }

