Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/ali/ReactNativeProjects/FirstReactNativeApp/src/components/Card.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Card = function Card(props) {
    return _react2.default.createElement(
        _reactNative.View,
        { style: styles.containerStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        props.children
    );
};

var styles = {
    containerStyle: {

        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 2,

        elevation: 1,

        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

exports.default = Card;