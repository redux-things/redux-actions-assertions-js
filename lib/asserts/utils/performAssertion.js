'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.performAssertion = undefined;

var _utils = require('../../utils');

var _getDispatchedActions = require('./getDispatchedActions');

var _unrollActions = require('./unrollActions');

function performAssertion(assertFunction, initialState, action, expectedActions, done, fail) {
  if (!(0, _utils.isFunction)(action) && !(0, _utils.isObject)(action)) {
    throw new Error('The "action" argument must be a function or an object');
  }

  if (!(0, _utils.isFunction)(expectedActions) && !(0, _utils.isObject)(expectedActions) && !Array.isArray(expectedActions)) {
    throw new Error('The "expectedActions" argument must be ' + 'an action creator function, an action object, or an array of them');
  }

  return (0, _getDispatchedActions.getDispatchedActions)(initialState, action).then(function (dispatchedActions) {
    return (0, _unrollActions.unrollActions)(initialState, expectedActions).then(function (expectedUnrolledActions) {
      assertFunction(dispatchedActions, expectedUnrolledActions);

      if ((0, _utils.isFunction)(done)) {
        done();
      }
    });
  }).catch(function (err) {
    if ((0, _utils.isFunction)(fail)) {
      fail(err);
      return;
    } else if ((0, _utils.isFunction)(done)) {
      done(err);
      return;
    }
    throw new Error(JSON.stringify(err));
  });
}

exports.performAssertion = performAssertion;