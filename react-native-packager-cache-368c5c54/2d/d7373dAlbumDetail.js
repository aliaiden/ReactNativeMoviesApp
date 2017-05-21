Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/ali/ReactNativeProjects/FirstReactNativeApp/src/components/AlbumDetail.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Card = require('./Card');

var _Card2 = babelHelpers.interopRequireDefault(_Card);

var _CardSection = require('./CardSection');

var _CardSection2 = babelHelpers.interopRequireDefault(_CardSection);

var _Button = require('./Button');

var _Button2 = babelHelpers.interopRequireDefault(_Button);

var AlbumDetail = function AlbumDetail(_ref) {
    var movie = _ref.movie;
    var title = movie.title,
        year = movie.year,
        image = movie.image,
        heroImage = movie.heroImage,
        wikiURL = movie.wikiURL;
    var thumbnailStyle = styles.thumbnailStyle,
        headerContentStyle = styles.headerContentStyle,
        thumbnailContainerStyle = styles.thumbnailContainerStyle,
        textStyle = styles.textStyle,
        imageStyle = styles.imageStyle;


    return _react2.default.createElement(
        _Card2.default,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 12
            }
        },
        _react2.default.createElement(
            _CardSection2.default,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            },
            _react2.default.createElement(
                _reactNative.View,
                { style: thumbnailContainerStyle, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                },
                _react2.default.createElement(_reactNative.Image, {
                    style: thumbnailStyle,
                    source: { uri: heroImage },
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                })
            ),
            _react2.default.createElement(
                _reactNative.View,
                { style: headerContentStyle, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: textStyle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    },
                    title
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        }
                    },
                    year
                )
            )
        ),
        _react2.default.createElement(
            _CardSection2.default,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            },
            _react2.default.createElement(_reactNative.Image, { style: imageStyle, source: { uri: image }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            })
        ),
        _react2.default.createElement(
            _CardSection2.default,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            },
            _react2.default.createElement(
                _Button2.default,
                {
                    onPress: function onPress() {
                        console.log(wikiURL);
                        _reactNative.Linking.openURL(wikiURL).catch(function (error) {
                            console.log('Api call error');
                            alert(error.message);
                        });
                    },
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                },
                'Wiki'
            )
        )
    );
};

var styles = {

    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'

    },

    thumbnailStyle: {
        height: 100,
        width: 100
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    imageStyle: {
        height: 1000,
        width: null,
        flex: 1
    },

    textStyle: {
        fontSize: 20,
        color: '#000000'
    }
};

exports.default = AlbumDetail;