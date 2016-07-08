'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unrollActions = undefined;

var _lodash = require('lodash.flattendeep');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('../../utils');

var _getDispatchedActions = require('./getDispatchedActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unrollActions(initialState, expectedActions) {
  var promises = [];
  var actions = (0, _utils.toArray)(expectedActions);

  for (var index = 0; index < actions.length; index++) {
    promises.push((0, _getDispatchedActions.getDispatchedActions)(initialState, actions[index]));
  }

  return Promise.all(promises).then(function (resultActions) {
    return (0, _lodash2.default)(resultActions);
  });
}

exports.unrollActions = unrollActions;