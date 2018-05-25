webpackJsonp([17],{

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(186)();
// imports


// module
exports.push([module.i, "blockquote,body,button,code,dd,div,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,input,legend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1}div.header{height:60px;font-size:22px;line-height:60px;padding-left:166px;color:#333;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1;background-repeat:no-repeat;background-position:1.2% 10px;background-size:110px;background-color:#fafafa;border-bottom:1px solid #f0f0f0}#header-text{color:#444;font-weight:700}#header-link{position:absolute;right:1.2%;top:0;font-size:14px}a:link,a:visited{color:#444;text-decoration:none}a:hover{color:orange}a:active,a:hover{text-decoration:none}a:active{color:#444}div.login{width:100%;height:60%;position:absolute;top:20%;text-align:center;padding:0;margin:0}#msg{height:20px;margin:10px}ul.login-form{width:240px;padding-top:10px;position:relative;list-style:none}.login-form li.password,ul.login-form li.user{position:relative;border:1px solid #c8c8c8;padding:0 0 0 41px;height:40px;background:#fff;font-size:14px;font-weight:700;margin-top:-1px}ul.login-form li.user{border-radius:3px 3px 0 0;-moz-border-radius:3px 3px 0 0;-webkit-border-radius:3px 3px 0 0}ul.login-form li.password{border-radius:0 0 3px 3px;-moz-border-radius:0 0 3px 3px;-webkit-border-radius:0 0 3px 3px}ul.login-form li .ico{position:absolute;left:0;top:0;background-color:#eee;width:40px;height:40px}ul.login-form li.user .ico{border-radius:3px 0 0 0;-moz-border-radius:3px 0 0 0;-webkit-border-radius:3px 0 0 0}ul.login-form li.password .ico{border-radius:0 0 0 3px;-moz-border-radius:0 0 0 3px;-webkit-border-radius:0 0 0 3px}table.layout{border:2px solid #323b40;background:#323b40;border-radius:8px;-moz-border-radius:8px;-webkit-border-radius:8px}div.user-login-title{color:#fff;font-size:18px;padding-bottom:20px}table.layout div.user-login{border:0 solid #999;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;width:260px;padding-top:20px;padding-bottom:0}.ico{display:inline-block}.ico-mail{background:url(\"/assets/img/icon_user.png\") no-repeat 50%}.ico-mail,.ico-pwd{width:18px;height:18px}.ico-pwd{background:url(\"/assets/img/icon_pwd.png\") no-repeat 50%}.ipt{fon-size:14px;background:#fff;padding:15px 0;height:18px;line-height:18px;color:#999;border:none}.ipt-focus{color:#000}.login-form .wid1{width:96%;padding:11px 2%;border:0 solid}input.btn{border:0 none}.btn{display:inline-block;cursor:pointer;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px}.btn1{background:#0099cb;color:#fff;width:100%;height:40px;line-height:40px;font-size:16px}.btn1:hover{background:#00a3d2}.error{vertical-align:middle;color:red;font-size:14px}.button-row{margin-top:20px}div.footer{color:#33333;font-size:12px;text-align:center;padding:10px;width:100%;margin:0;position:fixed;left:0;bottom:0}#banner{position:relative;width:680px;height:400px;border-right:1px solid #999}#banner_list img{border:0}#banner_bg{bottom:0;height:30px;filter:Alpha(Opacity = 50);opacity:.5;z-index:1000;width:800px}#banner_bg,#banner_info{position:absolute;cursor:pointer}#banner_info{bottom:10px;left:80px;height:22px;color:#0ae;z-index:1001}#banner_text{width:120px;right:3px;bottom:3px}#banner_text,#banner ul{position:absolute;z-index:1002}#banner ul{list-style-type:none;margin:0;padding:0;bottom:10px;right:80px}#banner ul li{font-size:14px;padding:0 6px;float:left;display:block;color:#fff;background:#0ae;cursor:pointer;border:0 solid #fff;margin-left:2px;border-radius:16px;-moz-border-radius:16px;-webkit-border-radius:16px}#banner ul li.on{background-color:#fff;color:#444}#banner_list a{position:absolute}", ""]);

// exports


/***/ }),

/***/ 1065:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "login"
  }, [_c('table', {
    staticClass: "layout",
    attrs: {
      "width": "980px",
      "border": "0",
      "align": "center"
    }
  }, [_c('tr', [_vm._m(1), _vm._v(" "), _c('td', {
    attrs: {
      "align": "center",
      "width": "300px"
    }
  }, [_c('div', {
    staticClass: "user-login"
  }, [_c('div', {
    staticClass: "user-login-title"
  }, [_vm._v("小牛在线管理平台  用户登录")]), _vm._v(" "), _c('div', [_c('form', {
    attrs: {
      "action": "",
      "id": "loginForm"
    }
  }, [_c('ul', {
    staticClass: "login-form"
  }, [_c('li', {
    staticClass: "user"
  }, [_c('div', {
    staticClass: "ico "
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userId),
      expression: "userId"
    }],
    staticClass: "ipt wid1 ipt-focus",
    attrs: {
      "type": "text",
      "placeholder": "账号",
      "name": "userId"
    },
    domProps: {
      "value": (_vm.userId)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userId = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('li', {
    staticClass: "password"
  }, [_c('div', {
    staticClass: "ico "
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "ipt wid1 ipt-focus",
    attrs: {
      "type": "text",
      "placeholder": "密码",
      "onfocus": "this.type='password'",
      "name": "passowrd"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.login($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('li', {
    staticClass: "button-row"
  }, [_c('input', {
    staticClass: "btn btn1",
    attrs: {
      "type": "button",
      "value": "登 录",
      "id": "login"
    },
    on: {
      "click": _vm.login
    }
  })])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "msg"
    }
  })])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('div', {
    attrs: {
      "id": "header-text"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "header-link"
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:void(0)",
      "target": "_blank"
    }
  }, [_vm._v("小牛在线管理平台")]), _vm._v("  |  "), _c('a', {
    attrs: {
      "href": "javascript:void(0)",
      "target": "_blank"
    }
  }, [_vm._v("帮助与文档")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    attrs: {
      "align": "left",
      "width": "680px"
    }
  }, [_c('div', {
    attrs: {
      "id": "banner"
    }
  }, [_c('div', {
    attrs: {
      "id": "banner_bg"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "banner_info"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "banner_list"
    }
  })])])
}]}

/***/ }),

/***/ 1083:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1027);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(187)("712e8247", content, true);

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(188)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 188:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _axios = __webpack_require__(165);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = '/oauth2-service';

var auth = {
   login: function login(data) {
      return _axios2.default.post(base + '/login', data);
   },
   logout: function logout() {
      return _axios2.default.get(base + '/logout');
   }
};

exports.default = auth;

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1083)

var Component = __webpack_require__(432)(
  /* script */
  __webpack_require__(947),
  /* template */
  __webpack_require__(1065),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_api_auth__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_api_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_api_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      userId: '',
      password: ''
    };
  },

  methods: {
    login() {
      console.info(loginParams);
      var loginParams = { userId: this.userId, password: this.password,
        type: '1' };
      __WEBPACK_IMPORTED_MODULE_0_components_api_auth___default.a.login(loginParams).then(resp => {
        this.logining = false;
        let { msg, code, data } = resp;
        if (code !== '00000000') {
          this.$notify({
            title: '错误',
            message: msg,
            type: 'error',
            duration: 1000
          });
        } else {
          __WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.headers.common['accessToken'] = data.token;
          sessionStorage.setItem('token', data.token);
          sessionStorage.setItem('user', JSON.stringify(data.user));
          window.location.href = "./";
        }
      });
    }
  }
});

/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(122);

var _vue2 = _interopRequireDefault(_vue);

var _elementUi = __webpack_require__(166);

var _elementUi2 = _interopRequireDefault(_elementUi);

__webpack_require__(173);

var _app = __webpack_require__(888);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(172);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_elementUi2.default);

new _vue2.default({
  el: '#app',
  render: function render(h) {
    return h(_app2.default);
  }
});

/***/ })

},[984]);
//# sourceMappingURL=app.js.map