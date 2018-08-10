require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: '信户商城',
        meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' }, { name: 'apple-mobile-web-app-capable', content: 'yes' }, { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }, { name: 'format-detection', content: 'telephone=no' }, { hid: 'description', name: 'description', content: '多、快、好、省' }],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }],
        // html head 中创建 script 标签
        script: [
            // { innerHTML: require('./assets/js/flexible_nuxt.js'), type: 'text/javascript', charset: 'utf-8'}
        ],
        // 不对<script>标签中内容做转义处理
        __dangerouslyDisableSanitizers: ['script']
    },
    /*
    ** Global CSS
    */
    css: [{ src: '~assets/css/base.css' }, { src: 'swiper/dist/css/swiper.css' }, { src: '~assets/css/resetSwiper.scss', lang: 'scss' }, { src: 'font-awesome/css/font-awesome.min.css' }],
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#ff5c00' },

    /*
    ** Build configuration
    */
    build: {
        vendor: ['axios', 'mint-ui'],
        // "presets":[
        //     ["es2015",{"modules": false}]
        // ],
        // babel:{
        //     "plugins": [["component", [
        //         {
        //             "libraryName": "mint-ui",
        //             "style": true,
        //         },
        //         'transform-async-to-generator',
        //         'transform-runtime'
        //     ]]],
        //     comments: true
        // },
        /*
        ** Run ESLint on save
        */
        // postcss: [
        //     require('postcss-px2rem')({remUnit: 75})
        // ],
        extend: function extend(config, _ref) {
            // if (isDev && isClient) {
            //     config.module.rules.push({
            //         enforce: 'pre',
            //         test: /\.(js|vue)$/,
            //         loader: 'eslint-loader',
            //         exclude: /(node_modules)/
            //     })
            // }

            var isDev = _ref.isDev,
                isClient = _ref.isClient;
        }
    },
    plugins: [{ src: '~plugins/axios' }, { src: '~plugins/mint-ui', ssr: true }, { src: '~plugins/swiper', ssr: true }, { src: '~plugins/vue-lazyload', ssr: true }, '~/plugins/components.js'],
    modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
    proxy: [['/index.php', { target: 'http://120.27.227.156:9004/' }]]
};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("axios");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("koa-cors");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("qs");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_zpc_Documents_XinhuProject_201807_XinHuWeb_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_zpc_Documents_XinhuProject_201807_XinHuWeb_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_zpc_Documents_XinhuProject_201807_XinHuWeb_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_bodyparser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_qs__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var start = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_zpc_Documents_XinhuProject_201807_XinHuWeb_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _this = this;

        var app, host, port, cors, router, config, nuxt, builder, parsePostData, parseQueryStr;
        return __WEBPACK_IMPORTED_MODULE_0__Users_zpc_Documents_XinhuProject_201807_XinHuWeb_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        parseQueryStr = function parseQueryStr(queryStr) {
                            var queryData = {};
                            var queryStrList = queryStr.split('&');
                            // console.log( queryStrList )
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;

                            try {
                                for (var _iterator = queryStrList.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var _ref3 = _step.value;

                                    var _ref4 = _slicedToArray(_ref3, 2);

                                    var index = _ref4[0];
                                    var _queryStr = _ref4[1];

                                    var itemList = _queryStr.split('=');
                                    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return();
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }

                            return queryData;
                        };

                        parsePostData = function parsePostData(ctx) {
                            return new Promise(function (resolve, reject) {
                                try {
                                    var postdata = "";
                                    ctx.req.addListener('data', function (data) {
                                        postdata += data;
                                    });
                                    ctx.req.addListener("end", function () {
                                        var parseData = parseQueryStr(postdata);
                                        resolve(parseData);
                                    });
                                } catch (err) {
                                    reject(err);
                                }
                            });
                        };

                        app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
                        host = process.env.HOST || '127.0.0.1';
                        port = process.env.PORT || 3030;
                        cors = __webpack_require__(5); //解决跨域

                        router = new __WEBPACK_IMPORTED_MODULE_4_koa_router___default.a();

                        // Import and Set Nuxt.js options

                        config = __webpack_require__(0);

                        config.dev = !(app.env === 'production');

                        // Instantiate nuxt.js
                        nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

                        // Build in development

                        if (!config.dev) {
                            _context2.next = 14;
                            break;
                        }

                        builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
                        _context2.next = 14;
                        return builder.build();

                    case 14:
                        // body-parser
                        // app.use(bodyParser());
                        app.use(cors());

                        app.use(function () {
                            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_zpc_Documents_XinhuProject_201807_XinHuWeb_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                                var postData;
                                return __WEBPACK_IMPORTED_MODULE_0__Users_zpc_Documents_XinhuProject_201807_XinHuWeb_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                ctx.status = 200; // koa defaults to 404 when it sees that status is unset

                                                if (!(ctx.url === '/api/login' && ctx.method === 'POST')) {
                                                    _context.next = 9;
                                                    break;
                                                }

                                                _context.next = 4;
                                                return parsePostData(ctx);

                                            case 4:
                                                postData = _context.sent;
                                                _context.next = 7;
                                                return __WEBPACK_IMPORTED_MODULE_6_axios___default.a.post('http://120.27.227.156:9004/index.php/Api/User/login', __WEBPACK_IMPORTED_MODULE_5_qs___default.a.stringify(postData)).then(function (res) {
                                                    if (res.data.status == 1) {
                                                        ctx.cookies.set('token', res.data.data.token, {
                                                            domain: '127.0.0.1', // 写cookie所在的域名
                                                            path: '/', // 写cookie所在的路径
                                                            maxAge: 10 * 60 * 1000, // cookie有效时长
                                                            // expires: new Date('2018-07-27'),  // cookie失效时间
                                                            httpOnly: true, // 是否只用于http请求中获取
                                                            overwrite: false // 是否允许重写
                                                        });
                                                    }
                                                    ctx.body = res.data;
                                                });

                                            case 7:
                                                _context.next = 10;
                                                break;

                                            case 9:
                                                return _context.abrupt('return', new Promise(function (resolve, reject) {
                                                    ctx.res.on('close', resolve);
                                                    ctx.res.on('finish', resolve);
                                                    nuxt.render(ctx.req, ctx.res, function (promise) {
                                                        //nuxt.render passes a rejected promise into callback on error.
                                                        promise.then(resolve).catch(reject);
                                                    });
                                                }));

                                            case 10:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, _this);
                            }));

                            return function (_x, _x2) {
                                return _ref2.apply(this, arguments);
                            };
                        }());
                        // 解析上下文里node原生请求的POST参数


                        // 将POST请求参数字符串解析成JSON


                        app.listen(port, host);
                        console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

                    case 18:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function start() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import session from 'koa-session'






start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map