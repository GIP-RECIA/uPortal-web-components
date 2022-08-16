/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 874:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = exports.i_ = void 0; // import 'core-js/stable';

var lit_1 = __webpack_require__(392);

var decorators_js_1 = __webpack_require__(168);

var class_map_js_1 = __webpack_require__(455);

var style_map_js_1 = __webpack_require__(959);

var localize_1 = __webpack_require__(799);

var eyebrow_scss_1 = __importDefault(__webpack_require__(709));

var langHelper_1 = __importDefault(__webpack_require__(203));

exports.i_ = (0, localize_1.configureLocalization)({
  sourceLocale: 'en',
  targetLocales: ['fr'],
  loadLocale: function loadLocale(locale) {
    return Promise.resolve().then(function () {
      return __importStar(__webpack_require__(972)("./".concat(locale, ".ts")));
    });
  }
}).setLocale;

var Eyebrow = /*#__PURE__*/function (_lit_1$LitElement) {
  _inherits(Eyebrow, _lit_1$LitElement);

  var _super = _createSuper(Eyebrow);

  function Eyebrow() {
    var _this;

    _classCallCheck(this, Eyebrow);

    _this = _super.call(this);
    _this.displayName = 'Unknown';
    _this.email = '';
    _this.picture = '';
    _this.moreLink = '';
    _this.logoutLink = '';
    _this.menuIsDark = true;
    _this.avatarSize = '28px';
    _this.visible = false;
    var lhOpts = {
      languageCodeOnly: true,
      availableLanguages: ['fr', 'en'],
      defaultLanguage: 'en'
    };
    var lang = langHelper_1.default.getPageLang(lhOpts);
    (0, exports.i_)(lang);

    _this.addEventListener('keyup', _this.handleKeyPress);

    return _this;
  }

  _createClass(Eyebrow, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this2 = this;

      var _a, _b;

      (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('dropdown-content')) === null || _b === void 0 ? void 0 : _b.addEventListener('transitionend', function () {
        _this2.setDropdownFocus();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (0, lit_1.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div class=\"user-info\">\n        <div ref=\"dropdownMenu\" class=\"dropdown\">\n          <div\n            id=\"dropdown-menu\"\n            class=", "\n            @click=\"", "\"\n            @keypress=\"", "\"\n            role=\"button\"\n            tabindex=\"0\"\n            aria-expanded=\"", "\"\n            aria-label=\"", "\"\n          >\n            <div class=\"user-name\">\n              <span class=\"label\">", "</span>\n            </div>\n            <div class=\"user-avatar\">\n              <img\n                src=\"", "\"\n                alt=\"", "\"\n                style=", "\n              />\n            </div>\n          </div>\n          <div\n            id=\"dropdown-content\"\n            class=", "\n          >\n            <div class=\"user-details\">\n              <div class=\"user-avatar\">\n                ", "\n              </div>\n              <div class=\"wrapper-info\">\n                <div class=\"user-name\">\n                  <span class=\"label\">", "</span>\n                </div>\n                <div class=\"user-mail\">\n                  <span class=\"label\">", "</span>\n                </div>\n              </div>\n            </div>\n            ", "\n          </div>\n        </div>\n      </div>\n    "])), (0, class_map_js_1.classMap)({
        lighter: this.menuIsDark,
        'dropdown-menu': true
      }), this.toggleDropdown, this.toggleDropdown, this.visible ? true : false, this.visible ? (0, localize_1.msg)((0, localize_1.str)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Close account menu"])))) : (0, localize_1.msg)((0, localize_1.str)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Open account menu"])))), this.displayName, this.picture, (0, localize_1.msg)((0, localize_1.str)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["avatar"])))), (0, style_map_js_1.styleMap)({
        width: this.avatarSize,
        height: this.avatarSize
      }), (0, class_map_js_1.classMap)({
        closed: !this.visible,
        'dropdown-content': true
      }), this.moreLink != '' ? (0, lit_1.html)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n                      <a\n                        id=\"more-link\"\n                        href=\"", "\"\n                        title=\"", "\"\n                        tabindex=\"0\"\n                      >\n                        <img src=\"", "\" alt=\"", "\" />\n                      </a>\n                    "])), this.moreLink, (0, localize_1.msg)((0, localize_1.str)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["See my account information"])))), this.picture, (0, localize_1.msg)((0, localize_1.str)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["avatar"]))))) : (0, lit_1.html)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n                      <img src=\"", "\" alt=\"", "\" />\n                    "])), this.picture, (0, localize_1.msg)((0, localize_1.str)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["avatar"]))))), this.displayName, this.email, this.logoutLink != '' ? (0, lit_1.html)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n                  <div class=\"sign-out\">\n                    <a\n                      id=\"sign-out\"\n                      href=\"", "\"\n                      title=\"", "\"\n                      tabindex=\"0\"\n                    >\n                      <span>", "</span>\n                      <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n                    </a>\n                  </div>\n                "])), this.logoutLink, (0, localize_1.msg)((0, localize_1.str)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Sign out"])))), (0, localize_1.msg)((0, localize_1.str)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Sign out"]))))) : (0, lit_1.html)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([""]))));
    }
  }, {
    key: "toggleDropdown",
    value: function toggleDropdown(e) {
      e.preventDefault();
      this.visible = !this.visible;
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      e.preventDefault();

      if (this.visible && e.key === 'Escape') {
        this.visible = false;
      }
    }
  }, {
    key: "setDropdownFocus",
    value: function setDropdownFocus() {
      var _a, _b, _c, _d;

      if (this.visible) {
        var nextClickElID = 'sign-out';

        if (this.moreLink != '') {
          nextClickElID = 'more-link';
        }

        (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(nextClickElID)) === null || _b === void 0 ? void 0 : _b.focus();
      } else {
        (_d = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.getElementById('dropdown-menu')) === null || _d === void 0 ? void 0 : _d.focus();
      }
    }
  }]);

  return Eyebrow;
}(lit_1.LitElement);

Eyebrow.styles = (0, lit_1.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    ", "\n  "])), (0, lit_1.unsafeCSS)(eyebrow_scss_1.default));

__decorate([(0, decorators_js_1.property)({
  type: String,
  attribute: 'display-name'
})], Eyebrow.prototype, "displayName", void 0);

__decorate([(0, decorators_js_1.property)({
  type: String
})], Eyebrow.prototype, "email", void 0);

__decorate([(0, decorators_js_1.property)({
  type: String
})], Eyebrow.prototype, "picture", void 0);

__decorate([(0, decorators_js_1.property)({
  type: String,
  attribute: 'more-link'
})], Eyebrow.prototype, "moreLink", void 0);

__decorate([(0, decorators_js_1.property)({
  type: String,
  attribute: 'logout-link'
})], Eyebrow.prototype, "logoutLink", void 0);

__decorate([(0, decorators_js_1.property)({
  type: Boolean,
  attribute: 'menu-is-dark'
})], Eyebrow.prototype, "menuIsDark", void 0);

__decorate([(0, decorators_js_1.property)({
  type: String,
  attribute: 'avatar-size'
})], Eyebrow.prototype, "avatarSize", void 0);

__decorate([(0, decorators_js_1.state)()], Eyebrow.prototype, "visible", void 0);

Eyebrow = __decorate([(0, localize_1.localized)(), (0, decorators_js_1.customElement)('eyebrow-user-info')], Eyebrow);
__webpack_unused_export__ = Eyebrow;

/***/ }),

/***/ 203:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var langHelper = /*#__PURE__*/function () {
  function langHelper() {
    _classCallCheck(this, langHelper);
  }

  _createClass(langHelper, null, [{
    key: "getBrowserLocales",
    value: function getBrowserLocales() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var defaultOptions = {
        languageCodeOnly: true,
        defaultLanguage: 'en'
      };
      var opt = Object.assign(Object.assign({}, defaultOptions), options);
      var browserLocales = navigator.languages === undefined ? [navigator.language] : navigator.languages;

      if (!browserLocales) {
        return [opt.defaultLanguage];
      }

      return browserLocales.map(function (locale) {
        var trimmedLocale = locale.trim();
        return opt.languageCodeOnly ? trimmedLocale.split(/-|_/)[0] : trimmedLocale;
      });
    }
  }, {
    key: "getPageLang",
    value: function getPageLang() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var defaultOptions = {
        languageCodeOnly: true,
        availableLanguages: ['en'],
        defaultLanguage: 'en'
      };
      var opt = Object.assign(Object.assign({}, defaultOptions), options);
      var pageLang = document.documentElement.lang;
      var allLangs = [];

      if (pageLang) {
        allLangs = opt.languageCodeOnly ? [pageLang.split(/-|_/)[0]] : [pageLang];
      } else {
        var fOpts = {
          anguageCodeOnly: opt.languageCodeOnly,
          defaultLanguage: opt.defaultLanguage
        };
        allLangs = this.getBrowserLocales(fOpts);
      }

      var detectedLocale = allLangs.find(function (x) {
        return opt.availableLanguages.includes(x);
      });
      return detectedLocale || opt.defaultLanguage;
    }
  }]);

  return langHelper;
}();

exports["default"] = langHelper;

/***/ }),

/***/ 258:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
 // Do not modify this file by hand!
// Re-generate this file by running lit-localize

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.templates = void 0;

var localize_1 = __webpack_require__(799);
/* eslint-disable no-irregular-whitespace */

/* eslint-disable @typescript-eslint/no-explicit-any */


exports.templates = {
  s614783f36fef685f: (0, localize_1.str)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Ouvrir le menu compte"]))),
  s62f1c5275951a27d: (0, localize_1.str)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Fermer le menu compte"]))),
  s7cfe12cd14df9950: (0, localize_1.str)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["D\xE9connexion"]))),
  sf1ed7646f2755f57: (0, localize_1.str)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Voir les informations de mon compte"]))),
  sdfe2526362bc3224: (0, localize_1.str)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["avatar"])))
};

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".user-info .fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome,sans-serif;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.user-info .fa-sign-out::before{content:\"\"}.user-info>.dropdown{height:100%;width:100%;position:relative;display:inline-block;right:0}.user-info>.dropdown>.dropdown-menu{cursor:pointer;display:flex;flex-flow:row nowrap;align-items:center;color:#000}.user-info>.dropdown>.dropdown-menu.lighter{color:#fff}.user-info>.dropdown>.dropdown-menu :not(:first-child){margin-left:5px}.user-info>.dropdown>.dropdown-menu>.user-name{display:block}.user-info>.dropdown>.dropdown-menu>.user-avatar{display:flex;align-items:center}.user-info>.dropdown>.dropdown-menu>.user-avatar>img{background-color:#d0d0d0;border-radius:50%;overflow:hidden}.user-info>.dropdown>.dropdown-content{position:absolute;min-width:280px;background-color:#fff;color:#000;box-shadow:0 5px 5px -3px #888,5px 5px 5px -4px #888;z-index:15;right:0;text-align:initial;visibility:visible;opacity:1;transition:opacity 800ms,visibility 800ms;animation:fade 800ms}.user-info>.dropdown>.dropdown-content.closed{visibility:hidden;opacity:0}.user-info>.dropdown>.dropdown-content>div.user-details{padding:25px 10px;display:flex;flex-flow:row nowrap;font-size:14px}.user-info>.dropdown>.dropdown-content>div.user-details>*{margin:0 0 0 15px}.user-info>.dropdown>.dropdown-content>div.user-details>:last-child{margin-right:15px}.user-info>.dropdown>.dropdown-content>div.user-details>.user-avatar{height:100%;display:flex;align-items:center}.user-info>.dropdown>.dropdown-content>div.user-details>.user-avatar img{background-color:#d0d0d0;border-radius:50%;height:68px;width:68px}.user-info>.dropdown>.dropdown-content>div.user-details .wrapper-info{display:flex;flex-flow:column nowrap;align-self:center}.user-info>.dropdown>.dropdown-content>.sign-out{display:flex;background-color:#d0d0d0;width:100%;text-align:right}.user-info>.dropdown>.dropdown-content>.sign-out:hover{background-color:#b7b7b7}.user-info>.dropdown>.dropdown-content>.sign-out>a{padding-right:15px;text-decoration:none;color:inherit;width:100%}.user-info>.dropdown>.dropdown-content>.sign-out>a>*{line-height:32px;vertical-align:top}.user-info>.dropdown>.dropdown-content>.sign-out>a>span{text-transform:uppercase;margin-right:5px}", "",{"version":3,"sources":["webpack://./src/styles/eyebrow.scss"],"names":[],"mappings":"AAAA,eAIE,oBACE,CAAA,uDACA,CAAA,iBACA,CAAA,mBACA,CAAA,kCACA,CAAA,iCACA,CAAA,gCAEF,WACE,CAAA,qBAEF,WACE,CAAA,UACA,CAAA,iBACA,CAAA,oBACA,CAAA,OACA,CAAA,oCACA,cACE,CAAA,YACA,CAAA,oBACA,CAAA,kBACA,CAAA,UACA,CAAA,4CACA,UACE,CAAA,uDAEF,eACE,CAAA,+CAEF,aACE,CAAA,iDAEF,YACE,CAAA,kBACA,CAAA,qDACA,wBAvCD,CAAA,iBAyCG,CAAA,eACA,CAAA,uCAIN,iBACE,CAAA,eACA,CAAA,qBACA,CAAA,UACA,CAAA,oDACA,CAAA,UACA,CAAA,OACA,CAAA,kBACA,CAAA,kBACA,CAAA,SACA,CAAA,yCACA,CAAA,oBACA,CAAA,8CACA,iBACE,CAAA,SACA,CAAA,wDAEF,iBACE,CAAA,YACA,CAAA,oBACA,CAAA,cACA,CAAA,0DACA,iBACE,CAAA,oEAEF,iBACE,CAAA,qEAEF,WACE,CAAA,YACA,CAAA,kBACA,CAAA,yEACA,wBA9EH,CAAA,iBAgFK,CAAA,WACA,CAAA,UACA,CAAA,sEAGJ,YACE,CAAA,uBACA,CAAA,iBACA,CAAA,iDAGJ,YACE,CAAA,wBA5FD,CAAA,UA8FC,CAAA,gBACA,CAAA,uDACA,wBACE,CAAA,mDAEF,kBACE,CAAA,oBACA,CAAA,aACA,CAAA,UACA,CAAA,qDACA,gBACE,CAAA,kBACA,CAAA,wDAEF,wBACE,CAAA,gBACA","sourcesContent":["$grey: #d0d0d0;\n\n.user-info {\n  /* used fonts and content : we need to add them for the build to be able to use it into shadow DOM and from parent html */\n  .fa {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome, sans-serif;\n    font-size: inherit;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  .fa-sign-out::before {\n    content: '\\f08b';\n  }\n  > .dropdown {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    display: inline-block;\n    right: 0;\n    > .dropdown-menu {\n      cursor: pointer;\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n      color: #000;\n      &.lighter {\n        color: white;\n      }\n      :not(:first-child) {\n        margin-left: 5px;\n      }\n      > .user-name {\n        display: block;\n      }\n      > .user-avatar {\n        display: flex;\n        align-items: center;\n        > img {\n          background-color: $grey;\n          border-radius: 50%;\n          overflow: hidden;\n        }\n      }\n    }\n    > .dropdown-content {\n      position: absolute;\n      min-width: 280px;\n      background-color: #fff;\n      color: #000;\n      box-shadow: 0 5px 5px -3px #888, 5px 5px 5px -4px #888;\n      z-index: 15;\n      right: 0;\n      text-align: initial;\n      visibility: visible;\n      opacity: 1;\n      transition: opacity 800ms, visibility 800ms;\n      animation: fade 800ms;\n      &.closed {\n        visibility: hidden;\n        opacity: 0;\n      }\n      > div.user-details {\n        padding: 25px 10px;\n        display: flex;\n        flex-flow: row nowrap;\n        font-size: 14px;\n        > * {\n          margin: 0 0 0 15px;\n        }\n        > :last-child {\n          margin-right: 15px;\n        }\n        > .user-avatar {\n          height: 100%;\n          display: flex;\n          align-items: center;\n          img {\n            background-color: $grey;\n            border-radius: 50%;\n            height: 68px;\n            width: 68px;\n          }\n        }\n        .wrapper-info {\n          display: flex;\n          flex-flow: column nowrap;\n          align-self: center;\n        }\n      }\n      > .sign-out {\n        display: flex;\n        background-color: $grey;\n        width: 100%;\n        text-align: right;\n        &:hover {\n          background-color: darken($grey, 10%);\n        }\n        > a {\n          padding-right: 15px;\n          text-decoration: none;\n          color: inherit;\n          width: 100%;\n          > * {\n            line-height: 32px;\n            vertical-align: top;\n          }\n          > span {\n            text-transform: uppercase;\n            margin-right: 5px;\n          }\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 537:
/***/ (function(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 972:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./fr.ts": 258
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 972;

/***/ }),

/***/ 799:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LOCALE_STATUS_EVENT": function() { return /* reexport */ LOCALE_STATUS_EVENT; },
  "_installMsgImplementation": function() { return /* binding */ _installMsgImplementation; },
  "configureLocalization": function() { return /* reexport */ configureLocalization; },
  "configureTransformLocalization": function() { return /* reexport */ configureTransformLocalization; },
  "isStrTagged": function() { return /* reexport */ isStrTagged; },
  "joinStringsAndValues": function() { return /* reexport */ joinStringsAndValues; },
  "localized": function() { return /* reexport */ localized; },
  "msg": function() { return /* binding */ msg; },
  "str": function() { return /* reexport */ str; },
  "updateWhenLocaleChanges": function() { return /* reexport */ updateWhenLocaleChanges; }
});

;// CONCATENATED MODULE: ./node_modules/@lit/localize/internal/str-tag.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Tag that allows expressions to be used in localized non-HTML template
 * strings.
 *
 * Example: msg(str`Hello ${this.user}!`);
 *
 * The Lit html tag can also be used for this purpose, but HTML will need to be
 * escaped, and there is a small overhead for HTML parsing.
 *
 * Untagged template strings with expressions aren't supported by lit-localize
 * because they don't allow for values to be captured at runtime.
 */
const _str = (strings, ...values) => ({
    strTag: true,
    strings,
    values,
});
const str = _str;
const isStrTagged = (val) => typeof val !== 'string' && 'strTag' in val;
/**
 * Render the result of a `str` tagged template to a string. Note we don't need
 * to do this for Lit templates, since Lit itself handles rendering.
 */
const joinStringsAndValues = (strings, values, valueOrder) => {
    let concat = strings[0];
    for (let i = 1; i < strings.length; i++) {
        concat += values[valueOrder ? valueOrder[i - 1] : i - 1];
        concat += strings[i];
    }
    return concat;
};
//# sourceMappingURL=str-tag.js.map
;// CONCATENATED MODULE: ./node_modules/@lit/localize/internal/default-msg.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Default identity msg implementation. Simply returns the input template with
 * no awareness of translations. If the template is str-tagged, returns it in
 * string form.
 */
const defaultMsg = ((template) => isStrTagged(template)
    ? joinStringsAndValues(template.strings, template.values)
    : template);
//# sourceMappingURL=default-msg.js.map
;// CONCATENATED MODULE: ./node_modules/@lit/localize/internal/locale-status-event.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Name of the event dispatched to `window` whenever a locale change starts,
 * finishes successfully, or fails. Only relevant to runtime mode.
 *
 * The `detail` of this event is an object with a `status` string that can be:
 * "loading", "ready", or "error", along with the relevant locale code, and
 * error message if applicable.
 *
 * You can listen for this event to know when your application should be
 * re-rendered following a locale change. See also the Localized mixin, which
 * automatically re-renders LitElement classes using this event.
 */
const LOCALE_STATUS_EVENT = 'lit-localize-status';
//# sourceMappingURL=locale-status-event.js.map
;// CONCATENATED MODULE: ./node_modules/@lit/localize/internal/localized-controller.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

class LocalizeController {
    constructor(host) {
        this.__litLocalizeEventHandler = (event) => {
            if (event.detail.status === 'ready') {
                this.host.requestUpdate();
            }
        };
        this.host = host;
    }
    hostConnected() {
        window.addEventListener(LOCALE_STATUS_EVENT, this.__litLocalizeEventHandler);
    }
    hostDisconnected() {
        window.removeEventListener(LOCALE_STATUS_EVENT, this.__litLocalizeEventHandler);
    }
}
/**
 * Re-render the given LitElement whenever a new active locale has loaded.
 *
 * See also {@link localized} for the same functionality as a decorator.
 *
 * When using lit-localize in transform mode, calls to this function are
 * replaced with undefined.
 *
 * Usage:
 *
 *   import {LitElement, html} from 'lit';
 *   import {msg, updateWhenLocaleChanges} from '@lit/localize';
 *
 *   class MyElement extends LitElement {
 *     constructor() {
 *       super();
 *       updateWhenLocaleChanges(this);
 *     }
 *
 *     render() {
 *       return html`<b>${msg('Hello World')}</b>`;
 *     }
 *   }
 */
const _updateWhenLocaleChanges = (host) => host.addController(new LocalizeController(host));
const updateWhenLocaleChanges = _updateWhenLocaleChanges;
//# sourceMappingURL=localized-controller.js.map
;// CONCATENATED MODULE: ./node_modules/@lit/localize/internal/localized-decorator.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Class decorator to enable re-rendering the given LitElement whenever a new
 * active locale has loaded.
 *
 * See also {@link updateWhenLocaleChanges} for the same functionality without
 * the use of decorators.
 *
 * When using lit-localize in transform mode, applications of this decorator are
 * removed.
 *
 * Usage:
 *
 *   import {LitElement, html} from 'lit';
 *   import {customElement} from 'lit/decorators.js';
 *   import {msg, localized} from '@lit/localize';
 *
 *   @localized()
 *   @customElement('my-element')
 *   class MyElement extends LitElement {
 *     render() {
 *       return html`<b>${msg('Hello World')}</b>`;
 *     }
 *   }
 */
const _localized = () => (classOrDescriptor) => typeof classOrDescriptor === 'function'
    ? legacyLocalized(classOrDescriptor)
    : standardLocalized(classOrDescriptor);
const localized = _localized;
const standardLocalized = ({ kind, elements }) => {
    return {
        kind,
        elements,
        finisher(clazz) {
            clazz.addInitializer(updateWhenLocaleChanges);
        },
    };
};
const legacyLocalized = (clazz) => {
    clazz.addInitializer(updateWhenLocaleChanges);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return clazz;
};
//# sourceMappingURL=localized-decorator.js.map
;// CONCATENATED MODULE: ./node_modules/@lit/localize/internal/deferred.js
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Deferred {
    constructor() {
        this.settled = false;
        this.promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }
    resolve(value) {
        this.settled = true;
        this._resolve(value);
    }
    reject(error) {
        this.settled = true;
        this._reject(error);
    }
}
//# sourceMappingURL=deferred.js.map
;// CONCATENATED MODULE: ./node_modules/@lit/localize/internal/fnv1a64.js
/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */
// This module is derived from the file:
// https://github.com/tjwebb/fnv-plus/blob/1e2ce68a07cb7dd4c3c85364f3d8d96c95919474/index.js#L309
//
// Changes:
// - Only the _hash64_1a_fast function is included.
// - Removed loop unrolling.
// - Converted to TypeScript ES module.
// - var -> let/const
//
// TODO(aomarks) Upstream improvements to https://github.com/tjwebb/fnv-plus/.
const hl = [];
for (let i = 0; i < 256; i++) {
    hl[i] = ((i >> 4) & 15).toString(16) + (i & 15).toString(16);
}
/**
 * Perform a FNV-1A 64-bit hash of the given string (as UTF-16 code units), and
 * return a hexadecimal digest (left zero padded to 16 characters).
 *
 * @see {@link http://tools.ietf.org/html/draft-eastlake-fnv-06}
 */
function fnv1a64(str) {
    let t0 = 0, v0 = 0x2325, t1 = 0, v1 = 0x8422, t2 = 0, v2 = 0x9ce4, t3 = 0, v3 = 0xcbf2;
    for (let i = 0; i < str.length; i++) {
        v0 ^= str.charCodeAt(i);
        t0 = v0 * 435;
        t1 = v1 * 435;
        t2 = v2 * 435;
        t3 = v3 * 435;
        t2 += v0 << 8;
        t3 += v1 << 8;
        t1 += t0 >>> 16;
        v0 = t0 & 65535;
        t2 += t1 >>> 16;
        v1 = t1 & 65535;
        v3 = (t3 + (t2 >>> 16)) & 65535;
        v2 = t2 & 65535;
    }
    return (hl[v3 >> 8] +
        hl[v3 & 255] +
        hl[v2 >> 8] +
        hl[v2 & 255] +
        hl[v1 >> 8] +
        hl[v1 & 255] +
        hl[v0 >> 8] +
        hl[v0 & 255]);
}
//# sourceMappingURL=fnv1a64.js.map
;// CONCATENATED MODULE: ./node_modules/@lit/localize/internal/id-generation.js
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Delimiter used between each template string component before hashing. Used to
 * prevent e.g. "foobar" and "foo${baz}bar" from sharing a hash.
 *
 * This is the "record separator" ASCII character.
 */
const HASH_DELIMITER = '\x1e';
/**
 * Id prefix on html-tagged templates to distinguish e.g. `<b>x</b>` from
 * html`<b>x</b>`.
 */
const HTML_PREFIX = 'h';
/**
 * Id prefix on plain string templates to distinguish e.g. `<b>x</b>` from
 * html`<b>x</b>`.
 */
const STRING_PREFIX = 's';
/**
 * Generate a unique ID for a lit-localize message.
 *
 * Example:
 *   Template: html`Hello <b>${who}</b>!`
 *     Params: ["Hello <b>", "</b>!"], true
 *     Output: h82ccc38d4d46eaa9
 *
 * The ID is constructed as:
 *
 *   [0]    Kind of template: [h]tml or [s]tring.
 *   [1,16] 64-bit FNV-1a hash hex digest of the template strings, as UTF-16
 *          code points, delineated by an ASCII "record separator" character.
 *
 * We choose FNV-1a because:
 *
 *   1. It's pretty fast (e.g. much faster than SHA-1).
 *   2. It's pretty small (0.25 KiB minified + brotli).
 *   3. We don't require cryptographic security, and 64 bits should give
 *      sufficient collision resistance for any one application. Worst
 *      case, we will always detect collisions during analysis.
 *   4. We can't use Web Crypto API (e.g. SHA-1), because it's asynchronous.
 *   5. It's a well known non-cryptographic hash with implementations in many
 *      languages.
 *   6. There was an existing JavaScript implementation that doesn't require
 *      BigInt, for IE11 compatibility.
 */
function generateMsgId(strings, isHtmlTagged) {
    return ((isHtmlTagged ? HTML_PREFIX : STRING_PREFIX) +
        fnv1a64(typeof strings === 'string' ? strings : strings.join(HASH_DELIMITER)));
}
//# sourceMappingURL=id-generation.js.map
;// CONCATENATED MODULE: ./node_modules/@lit/localize/internal/runtime-msg.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */



const expressionOrders = new WeakMap();
const hashCache = new Map();
function runtimeMsg(templates, template, options) {
    var _a;
    if (templates) {
        const id = (_a = options === null || options === void 0 ? void 0 : options.id) !== null && _a !== void 0 ? _a : generateId(template);
        const localized = templates[id];
        if (localized) {
            if (typeof localized === 'string') {
                // E.g. "Hello World!"
                return localized;
            }
            else if ('strTag' in localized) {
                // E.g. str`Hello ${name}!`
                //
                // Localized templates have ${number} in place of real template
                // expressions. They can't have real template values, because the
                // variable scope would be wrong. The number tells us the index of the
                // source value to substitute in its place, because expressions can be
                // moved to a different position during translation.
                return joinStringsAndValues(localized.strings, 
                // Cast `template` because its type wasn't automatically narrowed (but
                // we know it must be the same type as `localized`).
                template.values, localized.values);
            }
            else {
                // E.g. html`Hello <b>${name}</b>!`
                //
                // We have to keep our own mapping of expression ordering because we do
                // an in-place update of `values`, and otherwise we'd lose ordering for
                // subsequent renders.
                let order = expressionOrders.get(localized);
                if (order === undefined) {
                    order = localized.values;
                    expressionOrders.set(localized, order);
                }
                // Cast `localized.values` because it's readonly.
                localized.values = order.map((i) => template.values[i]);
                return localized;
            }
        }
    }
    return defaultMsg(template);
}
function generateId(template) {
    const strings = typeof template === 'string' ? template : template.strings;
    let id = hashCache.get(strings);
    if (id === undefined) {
        id = generateMsgId(strings, typeof template !== 'string' && !('strTag' in template));
        hashCache.set(strings, id);
    }
    return id;
}
//# sourceMappingURL=runtime-msg.js.map
;// CONCATENATED MODULE: ./node_modules/@lit/localize/init/runtime.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */




/**
 * Dispatch a "lit-localize-status" event to `window` with the given detail.
 */
function dispatchStatusEvent(detail) {
    window.dispatchEvent(new CustomEvent(LOCALE_STATUS_EVENT, { detail }));
}
let activeLocale = '';
let loadingLocale;
let sourceLocale;
let validLocales;
let loadLocale;
let templates;
let loading = new Deferred();
// The loading promise must be initially resolved, because that's what we should
// return if the user immediately calls setLocale(sourceLocale).
loading.resolve();
let requestId = 0;
/**
 * Set configuration parameters for lit-localize when in runtime mode. Returns
 * an object with functions:
 *
 * - `getLocale`: Return the active locale code.
 * - `setLocale`: Set the active locale code.
 *
 * Throws if called more than once.
 */
const configureLocalization = (config) => {
    _installMsgImplementation(((template, options) => runtimeMsg(templates, template, options)));
    activeLocale = sourceLocale = config.sourceLocale;
    validLocales = new Set(config.targetLocales);
    validLocales.add(config.sourceLocale);
    loadLocale = config.loadLocale;
    return { getLocale, setLocale };
};
/**
 * Return the active locale code.
 */
const getLocale = () => {
    return activeLocale;
};
/**
 * Set the active locale code, and begin loading templates for that locale using
 * the `loadLocale` function that was passed to `configureLocalization`. Returns
 * a promise that resolves when the next locale is ready to be rendered.
 *
 * Note that if a second call to `setLocale` is made while the first requested
 * locale is still loading, then the second call takes precedence, and the
 * promise returned from the first call will resolve when second locale is
 * ready. If you need to know whether a particular locale was loaded, check
 * `getLocale` after the promise resolves.
 *
 * Throws if the given locale is not contained by the configured `sourceLocale`
 * or `targetLocales`.
 */
const setLocale = (newLocale) => {
    if (newLocale === (loadingLocale !== null && loadingLocale !== void 0 ? loadingLocale : activeLocale)) {
        return loading.promise;
    }
    if (!validLocales || !loadLocale) {
        throw new Error('Internal error');
    }
    if (!validLocales.has(newLocale)) {
        throw new Error('Invalid locale code');
    }
    requestId++;
    const thisRequestId = requestId;
    loadingLocale = newLocale;
    if (loading.settled) {
        loading = new Deferred();
    }
    dispatchStatusEvent({ status: 'loading', loadingLocale: newLocale });
    const localePromise = newLocale === sourceLocale
        ? // We could switch to the source locale synchronously, but we prefer to
            // queue it on a microtask so that switching locales is consistently
            // asynchronous.
            Promise.resolve({ templates: undefined })
        : loadLocale(newLocale);
    localePromise.then((mod) => {
        if (requestId === thisRequestId) {
            activeLocale = newLocale;
            loadingLocale = undefined;
            templates = mod.templates;
            dispatchStatusEvent({ status: 'ready', readyLocale: newLocale });
            loading.resolve();
        }
        // Else another locale was requested in the meantime. Don't resolve or
        // reject, because the newer load call is going to use the same promise.
        // Note the user can call getLocale() after the promise resolves if they
        // need to check if the locale is still the one they expected to load.
    }, (err) => {
        if (requestId === thisRequestId) {
            dispatchStatusEvent({
                status: 'error',
                errorLocale: newLocale,
                errorMessage: err.toString(),
            });
            loading.reject(err);
        }
    });
    return loading.promise;
};
//# sourceMappingURL=runtime.js.map
;// CONCATENATED MODULE: ./node_modules/@lit/localize/init/transform.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


/**
 * Set configuration parameters for lit-localize when in transform mode. Returns
 * an object with function:
 *
 * - `getLocale`: Return the active locale code.
 *
 * Throws if called more than once.
 */
const configureTransformLocalization = (config) => {
    _installMsgImplementation(defaultMsg);
    const sourceLocale = config.sourceLocale;
    return {
        getLocale: () => sourceLocale,
    };
};
//# sourceMappingURL=transform.js.map
;// CONCATENATED MODULE: ./node_modules/@lit/localize/lit-localize.js
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */




// TODO(aomarks) In a future breaking version, remove these imports so that the
// bulk of the code isn't included in bundles by default. In particular imagine
// the component library use-case where msg() calls are made, but there is no
// need to actually initialize any of the localization runtime.




/**
 * Make a string or lit-html template localizable.
 *
 * @param template A string, a lit-html template, or a function that returns
 * either a string or lit-html template.
 * @param options Optional configuration object with the following properties:
 *   - id: Optional project-wide unique identifier for this template. If
 *     omitted, an id will be automatically generated from the template strings.
 *   - desc: Optional description
 */
let msg = defaultMsg;
let installed = false;
/**
 * Internal only. Do not use this function.
 *
 * Installs an implementation of the msg function to replace the default
 * identity function. Throws if called more than once.
 *
 * @internal
 */
function _installMsgImplementation(impl) {
    if (installed) {
        throw new Error('lit-localize can only be configured once');
    }
    msg = impl;
    installed = true;
}
//# sourceMappingURL=lit-localize.js.map

/***/ }),

/***/ 875:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xe": function() { return /* binding */ i; },
/* harmony export */   "pX": function() { return /* binding */ t; },
/* harmony export */   "XM": function() { return /* binding */ e; }
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
//# sourceMappingURL=directive.js.map


/***/ }),

/***/ 692:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Al": function() { return /* binding */ L; },
/* harmony export */   "dy": function() { return /* binding */ p; },
/* harmony export */   "Jb": function() { return /* binding */ b; },
/* harmony export */   "Ld": function() { return /* binding */ T; },
/* harmony export */   "sY": function() { return /* binding */ w; },
/* harmony export */   "YP": function() { return /* binding */ y; }
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i=globalThis.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e=`lit$${(Math.random()+"").slice(9)}$`,o="?"+e,n=`<${o}>`,l=document,h=(t="")=>l.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea)$/i,$=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),p=$(1),y=$(2),b=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),x=new WeakMap,w=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l},A=l.createTreeWalker(l,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,$=-1,p=0;for(;p<s.length&&(d.lastIndex=p,u=d.exec(s),null!==u);)p=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,$=-1):void 0===u[1]?$=-2:($=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n:$>=0?(l.push(o),s.slice(0,$)+"$lit$"+s.slice($)+e+y):s+e+(-2===$?(l.push(void 0),i):y)}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");return[void 0!==s?s.createHTML(u):u,l]};class P{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=P.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?k:"@"===i[1]?H:S})}else c.push({type:6,index:r})}for(const i of t)l.removeAttribute(i)}if(g.test(l.tagName)){const t=l.textContent.split(e),s=t.length-1;if(s>0){l.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h())}}}else if(8===l.nodeType)if(l.data===o)c.push({type:2,index:r});else{let t=-1;for(;-1!==(t=l.data.indexOf(e,t+1));)c.push({type:7,index:r}),t+=e.length-1}r++}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function V(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r(i)?void 0:i._$litDirective$;return(null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=V(t,d._$AS(t,i.values),d,e)),i}class E{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new I(n,this,t)),this.v.push(i),d=e[++r]}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++)}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=V(this,t,i),r(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):u(t)?this.M(t):this.$(t)}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==T&&r(this._$AH)?this._$AA.nextSibling.data=t:this.S(l.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=P.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else{const t=new E(o,this),i=t.p(this.options);t.m(s),this.S(i),this._$AH=t}}_$AC(t){let i=x.get(t.strings);return void 0===i&&x.set(t.strings,i=new P(t)),i}M(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.A(h()),this.A(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=V(this,t,i,0),n=!r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=V(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r(h)||h!==this._$AH[l]),h===T?t=T:t!==T&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.k(t)}k(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class M extends S{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===T?void 0:t}}class k extends S{constructor(){super(...arguments),this.type=4}k(t){t&&t!==T?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class H extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=V(this,t,i,0))&&void 0!==s?s:T)===b)return;const e=this._$AH,o=t===T&&e!==T||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==T&&(e===T||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class I{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const L={P:"$lit$",V:e,L:o,I:1,N:C,R:E,D:u,j:V,H:N,O:S,F:k,B:H,W:M,Z:I},R=window.litHtmlPolyfillSupport;null==R||R(P,N),(null!==(t=globalThis.litHtmlVersions)&&void 0!==t?t:globalThis.litHtmlVersions=[]).push("2.0.1");
//# sourceMappingURL=lit-html.js.map


/***/ }),

/***/ 168:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "customElement": function() { return /* reexport */ n; },
  "eventOptions": function() { return /* reexport */ event_options_e; },
  "property": function() { return /* reexport */ e; },
  "query": function() { return /* reexport */ query_i; },
  "queryAll": function() { return /* reexport */ query_all_e; },
  "queryAssignedNodes": function() { return /* reexport */ o; },
  "queryAsync": function() { return /* reexport */ query_async_e; },
  "state": function() { return /* reexport */ t; }
});

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/custom-element.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return{kind:t,elements:i,finisher(e){window.customElements.define(n,e)}}})(n,e);
//# sourceMappingURL=custom-element.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/property.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,i)}};function e(e){return(n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i)})(e,n,t):i(e,n)}
//# sourceMappingURL=property.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/state.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t(t){return e({...t,state:!0})}
//# sourceMappingURL=state.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/base.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const base_e=(e,t,o)=>{Object.defineProperty(t,o,e)},base_t=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),base_o=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n)}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n)}};
//# sourceMappingURL=base.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/event-options.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function event_options_e(e){return base_o({finisher:(r,t)=>{Object.assign(r.prototype[t],e)}})}
//# sourceMappingURL=event-options.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/query.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function query_i(i,n){return base_o({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]}}return t}})}
//# sourceMappingURL=query.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/query-all.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function query_all_e(e){return base_o({descriptor:r=>({get(){var r,o;return null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelectorAll(e))&&void 0!==o?o:[]},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-all.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/query-async.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function query_async_e(e){return base_o({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-async.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o(o="",n=!1,t=""){return base_o({descriptor:e=>({get(){var e,r,l;const i="slot"+(o?`[name=${o}]`:":not([name])");let u=null!==(l=null===(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(i))||void 0===r?void 0:r.assignedNodes({flatten:n}))&&void 0!==l?l:[];return t&&(u=u.filter((e=>e.nodeType===Node.ELEMENT_NODE&&e.matches(t)))),u},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-assigned-nodes.js.map

;// CONCATENATED MODULE: ./node_modules/lit/decorators.js

//# sourceMappingURL=decorators.js.map


/***/ }),

/***/ 455:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "classMap": function() { return /* reexport */ o; }
});

// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(692);
// EXTERNAL MODULE: ./node_modules/lit-html/directive.js
var directive = __webpack_require__(875);
;// CONCATENATED MODULE: ./node_modules/lit-html/directives/class-map.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=(0,directive/* directive */.XM)(class extends directive/* Directive */.Xe{constructor(t){var i;if(super(t),t.type!==directive/* PartType.ATTRIBUTE */.pX.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.st){this.st=new Set,void 0!==i.strings&&(this.et=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.et)||void 0===r?void 0:r.has(t))&&this.st.add(t);return this.render(s)}const e=i.element.classList;this.st.forEach((t=>{t in s||(e.remove(t),this.st.delete(t))}));for(const t in s){const i=!!s[t];i===this.st.has(t)||(null===(o=this.et)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.st.add(t)):(e.remove(t),this.st.delete(t)))}return lit_html/* noChange */.Jb}});
//# sourceMappingURL=class-map.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directives/class-map.js

//# sourceMappingURL=class-map.js.map


/***/ }),

/***/ 959:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "styleMap": function() { return /* reexport */ i; }
});

// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(692);
// EXTERNAL MODULE: ./node_modules/lit-html/directive.js
var directive = __webpack_require__(875);
;// CONCATENATED MODULE: ./node_modules/lit-html/directives/style-map.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=(0,directive/* directive */.XM)(class extends directive/* Directive */.Xe{constructor(t){var e;if(super(t),t.type!==directive/* PartType.ATTRIBUTE */.pX.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ut){this.ut=new Set;for(const t in r)this.ut.add(t);return this.render(r)}this.ut.forEach((t=>{null==r[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")}));for(const t in r){const e=r[t];null!=e&&(this.ut.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e)}return lit_html/* noChange */.Jb}});
//# sourceMappingURL=style-map.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directives/style-map.js

//# sourceMappingURL=style-map.js.map


/***/ }),

/***/ 392:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CSSResult": function() { return /* reexport */ s; },
  "LitElement": function() { return /* reexport */ lit_element_s; },
  "ReactiveElement": function() { return /* reexport */ reactive_element_n; },
  "UpdatingElement": function() { return /* reexport */ lit_element_r; },
  "_$LE": function() { return /* reexport */ lit_element_h; },
  "_$LH": function() { return /* reexport */ lit_html/* _$LH */.Al; },
  "adoptStyles": function() { return /* reexport */ i; },
  "css": function() { return /* reexport */ r; },
  "defaultConverter": function() { return /* reexport */ reactive_element_r; },
  "getCompatibleStyle": function() { return /* reexport */ S; },
  "html": function() { return /* reexport */ lit_html/* html */.dy; },
  "noChange": function() { return /* reexport */ lit_html/* noChange */.Jb; },
  "notEqual": function() { return /* reexport */ h; },
  "nothing": function() { return /* reexport */ lit_html/* nothing */.Ld; },
  "render": function() { return /* reexport */ lit_html/* render */.sY; },
  "supportsAdoptingStyleSheets": function() { return /* reexport */ t; },
  "svg": function() { return /* reexport */ lit_html/* svg */.YP; },
  "unsafeCSS": function() { return /* reexport */ o; }
});

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/css-tag.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),n=new Map;class s{constructor(t,n){if(this._$cssResult$=!0,n!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=n.get(this.cssText);return t&&void 0===e&&(n.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=t=>new s("string"==typeof t?t:t+"",e),r=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s(o,e)},i=(e,n)=>{t?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n)}))},S=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o(e)})(t):t;
//# sourceMappingURL=css-tag.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/reactive-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var reactive_element_s;const reactive_element_e=window.reactiveElementPolyfillSupport,reactive_element_r={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},h=(t,i)=>i!==t&&(i==i||t==t),reactive_element_o={attribute:!0,type:String,converter:reactive_element_r,reflect:!1,hasChanged:h};class reactive_element_n extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e))})),t}static createProperty(t,i=reactive_element_o){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||reactive_element_o}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S(i))}else void 0!==i&&s.push(S(i));return s}static _$Eh(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$Em)&&void 0!==i?i:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$Em)||void 0===i||i.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$Eg(t,i,s=reactive_element_o){var e,h;const n=this.constructor._$Eh(t,s);if(void 0!==n&&!0===s.reflect){const o=(null!==(h=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==h?h:reactive_element_r.toAttribute)(i,s.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null}}_$AK(t,i){var s,e,h;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),l=t.converter,a=null!==(h=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==h?h:reactive_element_r.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU()}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Em)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,i)=>this._$Eg(i,this[i],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}reactive_element_n.finalized=!0,reactive_element_n.elementProperties=new Map,reactive_element_n.elementStyles=[],reactive_element_n.shadowRootOptions={mode:"open"},null==reactive_element_e||reactive_element_e({ReactiveElement:reactive_element_n}),(null!==(reactive_element_s=globalThis.reactiveElementVersions)&&void 0!==reactive_element_s?reactive_element_s:globalThis.reactiveElementVersions=[]).push("1.0.1");
//# sourceMappingURL=reactive-element.js.map

// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(692);
;// CONCATENATED MODULE: ./node_modules/lit-element/lit-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,lit_element_o;const lit_element_r=reactive_element_n;class lit_element_s extends reactive_element_n{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=(0,lit_html/* render */.sY)(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return lit_html/* noChange */.Jb}}lit_element_s.finalized=!0,lit_element_s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:lit_element_s});const lit_element_n=globalThis.litElementPolyfillSupport;null==lit_element_n||lit_element_n({LitElement:lit_element_s});const lit_element_h={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(lit_element_o=globalThis.litElementVersions)&&void 0!==lit_element_o?lit_element_o:globalThis.litElementVersions=[]).push("3.0.1");
//# sourceMappingURL=lit-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit/index.js

//# sourceMappingURL=index.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(874);
/******/ 	
/******/ })()
;
//# sourceMappingURL=eyebrow-user-info.js.map