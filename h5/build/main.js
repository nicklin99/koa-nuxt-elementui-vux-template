require('/Users/mac/Documents/codes_node/egg-play/koa-nuxt/koa-template/node_modules/source-map-support/register.js')
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_loader__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_loader__);




module.exports = {
  rootDir: '.',
  srcDir: '.',
  router: {
    base: '/'
  },
  head: {
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, user-scalable=0'
    }]
  },
  css: ['vux/src/styles/reset.less', 'vux/src/styles/1px.less'],
  plugins: [{
    src: '~/plugins/vux-plugins',
    ssr: false
  }, {
    src: '~/plugins/vux-components',
    ssr: true
  }],
  build: {
    extend: function extend(config, _ref) {
      var isDev = _ref.isDev,
          isClient = _ref.isClient;

      var configs = __WEBPACK_IMPORTED_MODULE_1_vux_loader___default.a.merge(config, {
        options: {
          ssr: true
        },
        plugins: ['vux-ui', {
          name: 'less-theme',
          path: __WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, './styles/theme.less')
        }]
      });
      return configs;
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, ""))

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

module.exports = require("nuxt");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("vux-loader");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_mac_Documents_codes_node_egg_play_koa_nuxt_koa_template_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_mac_Documents_codes_node_egg_play_koa_nuxt_koa_template_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_mac_Documents_codes_node_egg_play_koa_nuxt_koa_template_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_mac_Documents_codes_node_egg_play_koa_nuxt_koa_template_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3() {
    var _this = this;

    var app, host, port, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0__Users_mac_Documents_codes_node_egg_play_koa_nuxt_koa_template_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3001;

            // Import and Set Nuxt.js options

            config = __webpack_require__(0);


            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

            // Build in development

            if (!config.dev) {
              _context3.next = 10;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context3.next = 10;
            return builder.build();

          case 10:

            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_mac_Documents_codes_node_egg_play_koa_nuxt_koa_template_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_mac_Documents_codes_node_egg_play_koa_nuxt_koa_template_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        // await next()

                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset

                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                          // ctx.res.on('close', resolve)
                          //ctx.res.on('finish', resolve)
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            //console.log(promise);
                            // nuxt.render passes a rejected promise into callback on error.
                            //promise.then(resolve).catch(reject)
                          });
                        }));

                      case 2:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }(), function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_mac_Documents_codes_node_egg_play_koa_nuxt_koa_template_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_mac_Documents_codes_node_egg_play_koa_nuxt_koa_template_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        ctx.body = 'hello';

                      case 1:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2, _this);
              }));

              return function (_x3, _x4) {
                return _ref3.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 13:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
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