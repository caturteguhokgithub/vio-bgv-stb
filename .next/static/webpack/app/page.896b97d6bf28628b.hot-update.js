"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/intro/partials/liveTv.tsx":
/*!*******************************************!*\
  !*** ./src/app/intro/partials/liveTv.tsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardItem: () => (/* binding */ CardItem),\n/* harmony export */   \"default\": () => (/* binding */ SectionLiveTv)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/react */ \"(app-pages-browser)/./node_modules/@iconify/react/dist/iconify.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ \"(app-pages-browser)/./node_modules/keen-slider/keen-slider.min.css\");\n/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! keen-slider/react */ \"(app-pages-browser)/./node_modules/keen-slider/react.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/grey.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/red.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/blue.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/orange.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/green.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/yellow.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst dataFavorite = [\n    {\n        icon: \"cbi:apple-tv\",\n        iconColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__[\"default\"][800]\n    },\n    {\n        icon: \"cbi:okko-tv\",\n        bgColor: \"#7a12ca\"\n    },\n    {\n        icon: \"cbi:metv\",\n        iconColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_6__[\"default\"][600]\n    },\n    {\n        icon: \"cbi:molotovtv\",\n        bgColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__[\"default\"][600]\n    },\n    {\n        icon: \"cbi:zdftivi\",\n        iconColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__[\"default\"][600]\n    },\n    {\n        icon: \"cbi:skysports-mainevent\",\n        bgColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__[\"default\"][600]\n    },\n    {\n        icon: \"cbi:waiputv\",\n        iconColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__[\"default\"][600]\n    },\n    {\n        icon: \"cbi:kion-tv\",\n        iconColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_10__[\"default\"][600],\n        bgColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__[\"default\"][900]\n    },\n    {\n        icon: \"cbi:ivi-tv\",\n        bgColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__[\"default\"][600]\n    }\n];\nconst CardItem = (param)=>{\n    let { icon, bgcolor, iconcolor, onClick, isActive } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        width: \"100%\",\n        height: \"160px\",\n        bgcolor: bgcolor || \"white\",\n        className: isActive ? \"active\" : \"\",\n        onClick: onClick,\n        sx: {\n            transform: isActive ? \"scale(1.2)\" : \"none\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n            icon: icon,\n            height: 100,\n            color: iconcolor || \"white\"\n        }, void 0, false, {\n            fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/liveTv.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/liveTv.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CardItem;\nfunction SectionLiveTv() {\n    _s();\n    const [activeIndex, setActiveIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [favoriteRef] = (0,keen_slider_react__WEBPACK_IMPORTED_MODULE_4__.useKeenSlider)({\n        loop: true,\n        mode: \"free-snap\",\n        slides: {\n            perView: 4,\n            spacing: 15\n        }\n    });\n    const handleBoxClick = (index)=>{\n        setActiveIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        gap: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                color: \"white\",\n                fontSize: \"1.3rem\",\n                fontWeight: 600,\n                children: \"Live TV Channel\"\n            }, void 0, false, {\n                fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/liveTv.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                ref: favoriteRef,\n                className: \"keen-slider\",\n                children: dataFavorite.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        className: \"keen-slider__slide\",\n                        sx: {\n                            transform: activeIndex === index ? \"scale(1.2)\" : \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardItem, {\n                            icon: item.icon,\n                            bgcolor: item.bgColor,\n                            iconcolor: item.iconColor,\n                            isActive: activeIndex === index,\n                            onClick: ()=>handleBoxClick(index)\n                        }, void 0, false, {\n                            fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/liveTv.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/liveTv.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/liveTv.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/liveTv.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, this);\n}\n_s(SectionLiveTv, \"fR6YgD3+KEnTPdRZ49XU4ATkyPI=\", false, function() {\n    return [\n        keen_slider_react__WEBPACK_IMPORTED_MODULE_4__.useKeenSlider\n    ];\n});\n_c1 = SectionLiveTv;\nvar _c, _c1;\n$RefreshReg$(_c, \"CardItem\");\n$RefreshReg$(_c1, \"SectionLiveTv\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW50cm8vcGFydGlhbHMvbGl2ZVR2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1k7QUFDaUI7QUFDZDtBQUNTO0FBQzRCO0FBRTlFLE1BQU1ZLGVBQWU7SUFDbkI7UUFDRUMsTUFBTTtRQUNOQyxXQUFXTiw0REFBSSxDQUFDLElBQUk7SUFDdEI7SUFDQTtRQUNFSyxNQUFNO1FBQ05FLFNBQVM7SUFDWDtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsV0FBV0osNERBQUcsQ0FBQyxJQUFJO0lBQ3JCO0lBQ0E7UUFDRUcsTUFBTTtRQUNORSxTQUFTVCw0REFBSSxDQUFDLElBQUk7SUFDcEI7SUFDQTtRQUNFTyxNQUFNO1FBQ05DLFdBQVdSLDREQUFJLENBQUMsSUFBSTtJQUN0QjtJQUNBO1FBQ0VPLE1BQU07UUFDTkUsU0FBU04sNERBQU0sQ0FBQyxJQUFJO0lBQ3RCO0lBQ0E7UUFDRUksTUFBTTtRQUNOQyxXQUFXUCw0REFBSyxDQUFDLElBQUk7SUFDdkI7SUFDQTtRQUNFTSxNQUFNO1FBQ05DLFdBQVdILDZEQUFNLENBQUMsSUFBSTtRQUN0QkksU0FBU1AsNERBQUksQ0FBQyxJQUFJO0lBQ3BCO0lBQ0E7UUFDRUssTUFBTTtRQUNORSxTQUFTUiw0REFBSyxDQUFDLElBQUk7SUFDckI7Q0FDRDtBQUVNLE1BQU1TLFdBQVc7UUFBQyxFQUN2QkgsSUFBSSxFQUNKSSxPQUFPLEVBQ1BDLFNBQVMsRUFDVEMsT0FBTyxFQUNQQyxRQUFRLEVBT1Q7SUFDQyxxQkFDRSw4REFBQ2pCLGlHQUFLQTtRQUNKa0IsZ0JBQWU7UUFDZkMsWUFBVztRQUNYQyxPQUFNO1FBQ05DLFFBQU87UUFDUFAsU0FBU0EsV0FBVztRQUNwQlEsV0FBV0wsV0FBVyxXQUFXO1FBQ2pDRCxTQUFTQTtRQUNUTyxJQUFJO1lBQ0ZDLFdBQVdQLFdBQVcsZUFBZTtRQUN2QztrQkFFQSw0RUFBQ25CLGdEQUFJQTtZQUFDWSxNQUFNQTtZQUFNVyxRQUFRO1lBQUtJLE9BQU9WLGFBQWE7Ozs7Ozs7Ozs7O0FBR3pELEVBQUU7S0E3QldGO0FBK0JFLFNBQVNhOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBRy9CLHFEQUFjLENBQWdCO0lBRXBFLE1BQU0sQ0FBQ2lDLFlBQVksR0FBRzVCLGdFQUFhQSxDQUFpQjtRQUNsRDZCLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxRQUFRO1lBQ05DLFNBQVM7WUFDVEMsU0FBUztRQUNYO0lBQ0Y7SUFFQSxNQUFNQyxpQkFBaUIsQ0FBQ0M7UUFDdEJULGVBQWVTO0lBQ2pCO0lBRUEscUJBQ0UsOERBQUNyQyxpR0FBS0E7UUFBQ3NDLEtBQUs7OzBCQUNWLDhEQUFDckMsaUdBQVVBO2dCQUFDd0IsT0FBTTtnQkFBUWMsVUFBUztnQkFBU0MsWUFBWTswQkFBSzs7Ozs7OzBCQUc3RCw4REFBQ3pDLGlHQUFHQTtnQkFBQzBDLEtBQUtYO2dCQUFhUixXQUFVOzBCQUM5QmIsYUFBYWlDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNTixzQkFDdkIsOERBQUN0QyxpR0FBR0E7d0JBQ0Z1QixXQUFZO3dCQUVaQyxJQUFJOzRCQUNGQyxXQUFXRyxnQkFBZ0JVLFFBQVEsZUFBZTt3QkFDcEQ7a0NBRUEsNEVBQUN4Qjs0QkFDQ0gsTUFBTWlDLEtBQUtqQyxJQUFJOzRCQUNmSSxTQUFTNkIsS0FBSy9CLE9BQU87NEJBQ3JCRyxXQUFXNEIsS0FBS2hDLFNBQVM7NEJBQ3pCTSxVQUFVVSxnQkFBZ0JVOzRCQUMxQnJCLFNBQVMsSUFBTW9CLGVBQWVDOzs7Ozs7dUJBVjNCQTs7Ozs7Ozs7Ozs7Ozs7OztBQWlCakI7R0ExQ3dCWDs7UUFHQXhCLDREQUFhQTs7O01BSGJ3QiIsInNvdXJjZXMiOlsiL2hvbWUvY2F0dXJ0ZWd1aG9rL0RvY3VtZW50cy9DVE9LL3Zpby1iZ3Ytc3RiL3NyYy9hcHAvaW50cm8vcGFydGlhbHMvbGl2ZVR2LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIkBpY29uaWZ5L3JlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBcImtlZW4tc2xpZGVyL2tlZW4tc2xpZGVyLm1pbi5jc3NcIjtcbmltcG9ydCB7IHVzZUtlZW5TbGlkZXIgfSBmcm9tIFwia2Vlbi1zbGlkZXIvcmVhY3RcIjtcbmltcG9ydCB7IGJsdWUsIGdyZWVuLCBncmV5LCBvcmFuZ2UsIHJlZCwgeWVsbG93IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvY29sb3JzXCI7XG5cbmNvbnN0IGRhdGFGYXZvcml0ZSA9IFtcbiAge1xuICAgIGljb246IFwiY2JpOmFwcGxlLXR2XCIsXG4gICAgaWNvbkNvbG9yOiBncmV5WzgwMF0sXG4gIH0sXG4gIHtcbiAgICBpY29uOiBcImNiaTpva2tvLXR2XCIsXG4gICAgYmdDb2xvcjogXCIjN2ExMmNhXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBcImNiaTptZXR2XCIsXG4gICAgaWNvbkNvbG9yOiByZWRbNjAwXSxcbiAgfSxcbiAge1xuICAgIGljb246IFwiY2JpOm1vbG90b3Z0dlwiLFxuICAgIGJnQ29sb3I6IGJsdWVbNjAwXSxcbiAgfSxcbiAge1xuICAgIGljb246IFwiY2JpOnpkZnRpdmlcIixcbiAgICBpY29uQ29sb3I6IGJsdWVbNjAwXSxcbiAgfSxcbiAge1xuICAgIGljb246IFwiY2JpOnNreXNwb3J0cy1tYWluZXZlbnRcIixcbiAgICBiZ0NvbG9yOiBvcmFuZ2VbNjAwXSxcbiAgfSxcbiAge1xuICAgIGljb246IFwiY2JpOndhaXB1dHZcIixcbiAgICBpY29uQ29sb3I6IGdyZWVuWzYwMF0sXG4gIH0sXG4gIHtcbiAgICBpY29uOiBcImNiaTpraW9uLXR2XCIsXG4gICAgaWNvbkNvbG9yOiB5ZWxsb3dbNjAwXSxcbiAgICBiZ0NvbG9yOiBncmV5WzkwMF0sXG4gIH0sXG4gIHtcbiAgICBpY29uOiBcImNiaTppdmktdHZcIixcbiAgICBiZ0NvbG9yOiBncmVlbls2MDBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IENhcmRJdGVtID0gKHtcbiAgaWNvbixcbiAgYmdjb2xvcixcbiAgaWNvbmNvbG9yLFxuICBvbkNsaWNrLFxuICBpc0FjdGl2ZSxcbn06IHtcbiAgaWNvbjogc3RyaW5nO1xuICBiZ2NvbG9yPzogc3RyaW5nO1xuICBpY29uY29sb3I/OiBzdHJpbmc7XG4gIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG4gIGlzQWN0aXZlOiBib29sZWFuO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTdGFja1xuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgaGVpZ2h0PVwiMTYwcHhcIlxuICAgICAgYmdjb2xvcj17Ymdjb2xvciB8fCBcIndoaXRlXCJ9XG4gICAgICBjbGFzc05hbWU9e2lzQWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgc3g9e3tcbiAgICAgICAgdHJhbnNmb3JtOiBpc0FjdGl2ZSA/IFwic2NhbGUoMS4yKVwiIDogXCJub25lXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxJY29uIGljb249e2ljb259IGhlaWdodD17MTAwfSBjb2xvcj17aWNvbmNvbG9yIHx8IFwid2hpdGVcIn0gLz5cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbkxpdmVUdigpIHtcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBbZmF2b3JpdGVSZWZdID0gdXNlS2VlblNsaWRlcjxIVE1MRGl2RWxlbWVudD4oe1xuICAgIGxvb3A6IHRydWUsXG4gICAgbW9kZTogXCJmcmVlLXNuYXBcIixcbiAgICBzbGlkZXM6IHtcbiAgICAgIHBlclZpZXc6IDQsXG4gICAgICBzcGFjaW5nOiAxNSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVCb3hDbGljayA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgc2V0QWN0aXZlSW5kZXgoaW5kZXgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFN0YWNrIGdhcD17Mn0+XG4gICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCIxLjNyZW1cIiBmb250V2VpZ2h0PXs2MDB9PlxuICAgICAgICBMaXZlIFRWIENoYW5uZWxcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxCb3ggcmVmPXtmYXZvcml0ZVJlZn0gY2xhc3NOYW1lPVwia2Vlbi1zbGlkZXJcIj5cbiAgICAgICAge2RhdGFGYXZvcml0ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtga2Vlbi1zbGlkZXJfX3NsaWRlYH1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGFjdGl2ZUluZGV4ID09PSBpbmRleCA/IFwic2NhbGUoMS4yKVwiIDogXCJub25lXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkSXRlbVxuICAgICAgICAgICAgICBpY29uPXtpdGVtLmljb259XG4gICAgICAgICAgICAgIGJnY29sb3I9e2l0ZW0uYmdDb2xvcn1cbiAgICAgICAgICAgICAgaWNvbmNvbG9yPXtpdGVtLmljb25Db2xvcn1cbiAgICAgICAgICAgICAgaXNBY3RpdmU9e2FjdGl2ZUluZGV4ID09PSBpbmRleH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQm94Q2xpY2soaW5kZXgpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG4gICAgICA8L0JveD5cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSWNvbiIsIkJveCIsIlN0YWNrIiwiVHlwb2dyYXBoeSIsInVzZUtlZW5TbGlkZXIiLCJibHVlIiwiZ3JlZW4iLCJncmV5Iiwib3JhbmdlIiwicmVkIiwieWVsbG93IiwiZGF0YUZhdm9yaXRlIiwiaWNvbiIsImljb25Db2xvciIsImJnQ29sb3IiLCJDYXJkSXRlbSIsImJnY29sb3IiLCJpY29uY29sb3IiLCJvbkNsaWNrIiwiaXNBY3RpdmUiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzTmFtZSIsInN4IiwidHJhbnNmb3JtIiwiY29sb3IiLCJTZWN0aW9uTGl2ZVR2IiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsInVzZVN0YXRlIiwiZmF2b3JpdGVSZWYiLCJsb29wIiwibW9kZSIsInNsaWRlcyIsInBlclZpZXciLCJzcGFjaW5nIiwiaGFuZGxlQm94Q2xpY2siLCJpbmRleCIsImdhcCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInJlZiIsIm1hcCIsIml0ZW0iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/intro/partials/liveTv.tsx\n"));

/***/ })

});