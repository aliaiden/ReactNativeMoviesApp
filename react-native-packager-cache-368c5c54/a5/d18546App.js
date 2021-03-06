Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/home/ali/ReactNativeProjects/FirstReactNativeApp/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Header = require('./src/components/Header');

var _Header2 = babelHelpers.interopRequireDefault(_Header);

var _AlbumList = require('./src/components/AlbumList');

var _AlbumList2 = babelHelpers.interopRequireDefault(_AlbumList);

var App = function (_React$Component) {
  babelHelpers.inherits(App, _React$Component);

  function App() {
    babelHelpers.classCallCheck(this, App);
    return babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  babelHelpers.createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        _react2.default.createElement(_Header2.default, { text: 'Movies!', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        }),
        _react2.default.createElement(_AlbumList2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        })
      );
    }
  }]);
  return App;
}(_react2.default.Component);

exports.default = App;


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});