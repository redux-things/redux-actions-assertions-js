'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDispatchedActions = undefined;

var _mockStore = require('../../mockStore');

var _mockStore2 = _interopRequireDefault(_mockStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDispatchedActions(initialState, action) {
  return new Promise(function (resolve, reject) {
    var store = (0, _mockStore2.default)()(initialState);
    var dispatchResult = store.dispatch(action);

    if (dispatchResult instanceof Promise) {
      dispatchResult.then(function () {
        resolve(store.getActions());
      }).catch(function (result) {
        reject(result);
      });
    } else {
      resolve(store.getActions());
    }
  });
}

exports.getDispatchedActions = getDispatchedActions;