import { takeLatest } from "redux-saga";
import { race, call, put, fork, take } from "redux-saga/effects";

// IMPORT YOUR ACTION TYPES AND ACTION CREATORS
import * as Action from "../action";

// IMPORT YOUR SIDE EFFECTS
// import { doSideEffect } from "./home";

// root saga generators
export function* sagas() {
  yield [
    // REGISTER YOUR SIDE EFFECT SAGAS BELOW
    // fork(takeLatest, Action.ACTION_TYPE, doSideEffect),
    // fork(takeLatest, Action.ACTION_TYPE, logAction),
    
  ];
}

export function* logAction(action) {
  console.log("logAction: "+action.type);
}