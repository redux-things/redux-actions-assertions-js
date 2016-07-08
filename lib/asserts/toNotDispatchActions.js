'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toNotDispatchActions = undefined;

var _initialState = require('../initialState');

var _toNotDispatchActionsWithState = require('./toNotDispatchActionsWithState');

function toNotDispatchActions(action, expectedActions, done, fail) {
  return (0, _toNotDispatchActionsWithState.toNotDispatchActionsWithState)((0, _initialState.getInitialStoreState)(), action, expectedActions, done, fail);
}

exports.toNotDispatchActions = toNotDispatchActions;