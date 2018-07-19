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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

module.exports = __webpack_require__(5);


/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("koa-cors");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_zpc_Documents_XinhuProject_201807_XinHuWeb_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_zpc_Documents_XinhuProject_201807_XinHuWeb_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_zpc_Documents_XinhuProject_201807_XinHuWeb_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);


var start = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_zpc_Documents_XinhuProject_201807_XinHuWeb_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _this = this;

        var app, host, port, cors, config, nuxt, builder;
        return __WEBPACK_IMPORTED_MODULE_0__Users_zpc_Documents_XinhuProject_201807_XinHuWeb_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
                        host = process.env.HOST || '127.0.0.1';
                        port = process.env.PORT || 3030;
                        cors = __webpack_require__(3); //解决跨域

                        // Import and Set Nuxt.js options

                        config = __webpack_require__(0);

                        config.dev = !(app.env === 'production');

                        // Instantiate nuxt.js
                        nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

                        // Build in development

                        if (!config.dev) {
                            _context2.next = 11;
                            break;
                        }

                        builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
                        _context2.next = 11;
                        return builder.build();

                    case 11:

                        app.use(cors());

                        app.use(function () {
                            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_zpc_Documents_XinhuProject_201807_XinHuWeb_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                                return __WEBPACK_IMPORTED_MODULE_0__Users_zpc_Documents_XinhuProject_201807_XinHuWeb_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _context.next = 2;
                                                return next();

                                            case 2:
                                                ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                                                return _context.abrupt('return', new Promise(function (resolve, reject) {
                                                    ctx.res.on('close', resolve);
                                                    ctx.res.on('finish', resolve);
                                                    nuxt.render(ctx.req, ctx.res, function (promise) {
                                                        // nuxt.render passes a rejected promise into callback on error.
                                                        promise.then(resolve).catch(reject);
                                                    });
                                                }));

                                            case 4:
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

                        app.listen(port, host);
                        console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

                    case 15:
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




start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map