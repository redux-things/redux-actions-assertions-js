'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDispatchActions = undefined;

var _initialState = require('../initialState');

var _toDispatchActionsWithState = require('./toDispatchActionsWithState');

function toDispatchActions(action, expectedActions, done, fail) {
  return (0, _toDispatchActionsWithState.toDispatchActionsWithState)((0, _initialState.getInitialStoreState)(), action, expectedActions, done, fail);
}

exports.toDispatchActions = toDispatchActions;