Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/ali/ReactNativeProjects/FirstReactNativeApp/src/components/AlbumList.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _axios = require('axios');

var _axios2 = babelHelpers.interopRequireDefault(_axios);

var _AlbumDetail = require('./AlbumDetail');

var _AlbumDetail2 = babelHelpers.interopRequireDefault(_AlbumDetail);

var AlbumList = function (_Component) {
    babelHelpers.inherits(AlbumList, _Component);

    function AlbumList() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, AlbumList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = AlbumList.__proto__ || Object.getPrototypeOf(AlbumList)).call.apply(_ref, [this].concat(args))), _this), _this.state = { movies: [] }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(AlbumList, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log('component will mount in AlbumList class');


            this.setState({
                movies: [{
                    title: 'Interstellar',
                    year: '2014',
                    image: 'https://s-media-cache-ak0.pinimg.com/736x/07/29/5a/07295a499d75c4934cd376a42ba19397.jpg',
                    heroImage: 'https://www.gannett-cdn.com/-mm-/a038c730d02574008dab951d3b4b30f7399f7c9d/c=0-518-2299-2246&r=x404&c=534x401/local/-/media/USATODAY/test/2014/01/16//1389884527000-GTY-461579733.jpg',
                    wikiURL: 'https://en.wikipedia.org/wiki/Interstellar_(film)'
                }, {
                    title: 'The Fate Of The Furious',
                    year: '2017',
                    image: 'http://empireonline.media/jpg/70/0/0/1280/960/aspectfit/0/0/0/0/0/0/c/articles/58bc4a051268b33f1bc0b1de/ff8-poster.jpg',
                    heroImage: 'http://assets.nydailynews.com/polopoly_fs/1.2765303.1472134084!/img/httpImage/image.jpg_gen/derivatives/article_750/afp-bq69k.jpg',
                    wikiURL: 'https://en.wikipedia.org/wiki/The_Fate_of_the_Furious'
                }, {
                    title: 'Predestination',
                    year: '2014',
                    image: 'https://image.tmdb.org/t/p/original/kDdUtDsGMQ3OYwoBtEQyJIGPz4V.jpg',
                    heroImage: 'http://mediamass.net/jdd/public/documents/celebrities/2635.jpg',
                    wikiURL: 'https://en.wikipedia.org/wiki/Predestination_(film)'
                }]
            });
        }
    }, {
        key: 'renderAlbums',
        value: function renderAlbums() {
            return _react2.default.createElement(
                _reactNative.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    }
                },
                _react2.default.createElement(
                    _AlbumDetail2.default,
                    { key: this.state.movies[0].title, movie: this.state.movies[0], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        }
                    },
                    this.state.movies[0].title
                ),
                _react2.default.createElement(
                    _AlbumDetail2.default,
                    { key: this.state.movies[1].title, movie: this.state.movies[1], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 62
                        }
                    },
                    this.state.movies[1].title
                ),
                _react2.default.createElement(
                    _AlbumDetail2.default,
                    { key: this.state.movies[2].title, movie: this.state.movies[2], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        }
                    },
                    this.state.movies[2].title
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.state.movies);

            return _react2.default.createElement(
                _reactNative.ScrollView,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    }
                },
                this.renderAlbums()
            );
        }
    }]);
    return AlbumList;
}(_react.Component);

var styles = {
    textStyle: {
        fontSize: 16,
        color: '#000000'
    }
};

exports.default = AlbumList;