'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertions = exports.buildInitialStoreState = exports.registerInitialStoreState = exports.registerMiddlewares = undefined;

var _mockStore = require('./mockStore');

var _initialState = require('./initialState');

var _assertions = require('./assertions');

var _assertions2 = _interopRequireDefault(_assertions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.registerMiddlewares = _mockStore.registerMiddlewares;
exports.registerInitialStoreState = _initialState.registerInitialStoreState;
exports.buildInitialStoreState = _initialState.buildInitialStoreState;
exports.assertions = _assertions2.default;