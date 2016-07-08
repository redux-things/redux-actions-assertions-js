"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function notDispatchedActionError(dispatchedActions, expectedActions, action) {
  return new Error("Action " + JSON.stringify(action) + " was not dispatched when it was expected.\n" + ("Actions expected to be dispatched: " + JSON.stringify(expectedActions) + "\n") + ("Actual dispatched actions: " + JSON.stringify(dispatchedActions)));
}

exports.notDispatchedActionError = notDispatchedActionError;