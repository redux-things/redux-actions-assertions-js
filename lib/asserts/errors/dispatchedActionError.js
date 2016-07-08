"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function dispatchedActionError(dispatchedActions, expectedActions, action) {
  return new Error("Action " + JSON.stringify(action) + " was dispatched when it was unexpected.\n" + ("Actions expected to be not dispatched: " + JSON.stringify(expectedActions) + "\n") + ("Actual dispatched actions: " + JSON.stringify(dispatchedActions)));
}

exports.dispatchedActionError = dispatchedActionError;