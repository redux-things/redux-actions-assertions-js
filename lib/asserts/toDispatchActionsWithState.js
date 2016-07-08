'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDispatchActionsWithState = undefined;

var _performAssertion = require('./utils/performAssertion');

var _assertDispatchedActions = require('./utils/assertDispatchedActions');

function toDispatchActionsWithState(initialState, action, expectedActions, done, fail) {
  (0, _performAssertion.performAssertion)(_assertDispatchedActions.assertDispatchedActions, initialState, action, expectedActions, done, fail);
}

exports.toDispatchActionsWithState = toDispatchActionsWithState;