'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertDispatchedActions = undefined;

var _lodash = require('lodash.findindex');

var _lodash2 = _interopRequireDefault(_lodash);

var _notDispatchedActionError = require('../errors/notDispatchedActionError');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assertDispatchedActions(dispatched, expected) {
  var availableActions = dispatched.slice();

  for (var indexInExpected = 0; indexInExpected < expected.length; indexInExpected++) {
    var indexInAvailable = (0, _lodash2.default)(availableActions, expected[indexInExpected]);

    if (indexInAvailable !== -1) {
      availableActions.splice(indexInAvailable, 1);
    } else {
      throw (0, _notDispatchedActionError.notDispatchedActionError)(dispatched, expected, expected[indexInExpected]);
    }
  }
}

exports.assertDispatchedActions = assertDispatchedActions;