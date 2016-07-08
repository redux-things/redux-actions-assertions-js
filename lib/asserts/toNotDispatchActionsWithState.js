'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toNotDispatchActionsWithState = undefined;

var _performAssertion = require('./utils/performAssertion');

var _assertNotDispatchedActions = require('./utils/assertNotDispatchedActions');

function toNotDispatchActionsWithState(initialState, action, expectedActions, done, fail) {
  (0, _performAssertion.performAssertion)(_assertNotDispatchedActions.assertNotDispatchedActions, initialState, action, expectedActions, done, fail);
}

exports.toNotDispatchActionsWithState = toNotDispatchActionsWithState;