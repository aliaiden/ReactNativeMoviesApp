Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/ali/ReactNativeProjects/FirstReactNativeApp/src/components/CardSection.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var CardSection = function CardSection(props) {
    return _react2.default.createElement(
        _reactNative.View,
        { style: styles.containerStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        props.children
    );
};

var styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

exports.default = CardSection;