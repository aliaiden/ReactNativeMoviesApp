

'use strict';

var _jsxFileName = '/home/ali/ReactNativeProjects/myapp2/my-project/node_modules/react-native/Libraries/Components/TabBarIOS/TabBarIOS.android.js';
var React = require('React');
var View = require('View');
var StyleSheet = require('StyleSheet');

var DummyTabBarIOS = function (_React$Component) {
  babelHelpers.inherits(DummyTabBarIOS, _React$Component);

  function DummyTabBarIOS() {
    babelHelpers.classCallCheck(this, DummyTabBarIOS);
    return babelHelpers.possibleConstructorReturn(this, (DummyTabBarIOS.__proto__ || Object.getPrototypeOf(DummyTabBarIOS)).apply(this, arguments));
  }

  babelHelpers.createClass(DummyTabBarIOS, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        View,
        { style: [this.props.style, styles.tabGroup], __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        this.props.children
      );
    }
  }]);
  return DummyTabBarIOS;
}(React.Component);

var styles = StyleSheet.create({
  tabGroup: {
    flex: 1
  }
});

module.exports = DummyTabBarIOS;