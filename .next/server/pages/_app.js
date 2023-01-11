(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/font-awesome/css/font-awesome.min.css
var font_awesome_min = __webpack_require__(1367);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/context.js
var context = __webpack_require__(2280);
;// CONCATENATED MODULE: ./src/context/state.js



const type = {
    NAV: "NAV",
    SIDEBAR: "SIDEBAR"
};
const navReducer = (state, action)=>{
    switch(action.type){
        case type.NAV:
            return {
                ...state,
                nav: action.payload
            };
        case type.SIDEBAR:
            return {
                ...state,
                sidebar: action.payload
            };
        default:
            return state;
    }
};
const State = (props)=>{
    const initialState = {
        nav: "about",
        sidebar: false
    };
    const [state, dispatch] = (0,external_react_.useReducer)(navReducer, initialState);
    const changeNav = (value)=>{
        dispatch({
            type: type.NAV,
            payload: value
        });
    };
    const changeSideBar = (value)=>{
        dispatch({
            type: type.SIDEBAR,
            payload: value
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(context/* default.Provider */.Z.Provider, {
        value: {
            // nav
            nav: state.nav,
            changeNav: changeNav,
            // sidebar
            sidebar: state.sidebar,
            changeSideBar: changeSideBar
        },
        children: props.children
    });
};
/* harmony default export */ const state = (State);

;// CONCATENATED MODULE: ./src/layout/PreLoader.js


const PreLoader = ()=>{
    const [loading, setLoading] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 2000);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "preloader",
        style: {
            display: loading ? "block" : "none"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "centrize full-width",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "vertical-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "spinner",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "double-bounce1"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "double-bounce2"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const layout_PreLoader = (PreLoader);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./public/css/basic.css
var basic = __webpack_require__(638);
// EXTERNAL MODULE: ./public/css/layout.css
var layout = __webpack_require__(4854);
// EXTERNAL MODULE: ./public/css/blogs.css
var blogs = __webpack_require__(1529);
// EXTERNAL MODULE: ./public/css/ionicons.css
var ionicons = __webpack_require__(9068);
// EXTERNAL MODULE: ./public/css/magnific-popup.css
var magnific_popup = __webpack_require__(2656);
// EXTERNAL MODULE: ./public/css/animate.css
var animate = __webpack_require__(4044);
// EXTERNAL MODULE: ./public/css/gradient.css
var gradient = __webpack_require__(5183);
// EXTERNAL MODULE: ./public/css/new-skin/new-skin.css
var new_skin = __webpack_require__(7523);
// EXTERNAL MODULE: ./public/css/demos/demo-6-colors.css
var demo_6_colors = __webpack_require__(1159);
;// CONCATENATED MODULE: ./pages/_app.js















function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(state, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Aziz Volkan Tevik - CV"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "images/favicons/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_PreLoader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);


/***/ }),

/***/ 1367:
/***/ (() => {



/***/ }),

/***/ 4044:
/***/ (() => {



/***/ }),

/***/ 638:
/***/ (() => {



/***/ }),

/***/ 1529:
/***/ (() => {



/***/ }),

/***/ 1159:
/***/ (() => {



/***/ }),

/***/ 5183:
/***/ (() => {



/***/ }),

/***/ 9068:
/***/ (() => {



/***/ }),

/***/ 4854:
/***/ (() => {



/***/ }),

/***/ 2656:
/***/ (() => {



/***/ }),

/***/ 7523:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5655));
module.exports = __webpack_exports__;

})();