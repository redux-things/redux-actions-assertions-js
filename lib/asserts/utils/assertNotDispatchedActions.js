'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNotDispatchedActions = undefined;

var _lodash = require('lodash.findindex');

var _lodash2 = _interopRequireDefault(_lodash);

var _dispatchedActionError = require('../errors/dispatchedActionError');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assertNotDispatchedActions(dispatched, expected) {
  for (var indexInExpected = 0; indexInExpected < expected.length; indexInExpected++) {
    if ((0, _lodash2.default)(dispatched, expected[indexInExpected]) !== -1) {
      throw (0, _dispatchedActionError.dispatchedActionError)(dispatched, expected, expected[indexInExpected]);
    }
  }
}

exports.assertNotDispatchedActions = assertNotDispatchedActions;