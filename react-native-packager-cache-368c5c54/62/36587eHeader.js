Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/ali/ReactNativeProjects/FirstReactNativeApp/src/components/Header.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Header = function Header(props) {
    return _react2.default.createElement(
        _reactNative.View,
        { style: styles.viewStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        _react2.default.createElement(
            _reactNative.Text,
            { style: styles.textStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            props.text
        )
    );
};

var styles = {
    textStyle: {
        fontSize: 20,
        color: '#ffffff'
    },
    viewStyle: {
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        elevation: 5,
        position: 'relative'
    }

};

exports.default = Header;