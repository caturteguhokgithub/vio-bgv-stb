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

/***/ "(app-pages-browser)/./src/app/intro/partials/favorite.tsx":
/*!*********************************************!*\
  !*** ./src/app/intro/partials/favorite.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardItem: () => (/* binding */ CardItem),\n/* harmony export */   \"default\": () => (/* binding */ SectionFavorite)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/react */ \"(app-pages-browser)/./node_modules/@iconify/react/dist/iconify.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ \"(app-pages-browser)/./node_modules/keen-slider/keen-slider.min.css\");\n/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! keen-slider/react */ \"(app-pages-browser)/./node_modules/keen-slider/react.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/grey.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/red.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/blue.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/orange.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/green.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/yellow.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst dataFavorite = [\n    {\n        icon: \"cib:apple\",\n        iconColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__[\"default\"][800]\n    },\n    {\n        icon: \"cib:netflix\",\n        bgColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_6__[\"default\"][600]\n    },\n    {\n        icon: \"cib:youtube\",\n        iconColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_6__[\"default\"][600]\n    },\n    {\n        icon: \"token-branded:alpha\",\n        bgColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__[\"default\"][600]\n    },\n    {\n        icon: \"cib:intel\",\n        iconColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__[\"default\"][600]\n    },\n    {\n        icon: \"cib:amazon-aws\",\n        bgColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__[\"default\"][600]\n    },\n    {\n        icon: \"cib:overleaf\",\n        iconColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__[\"default\"][600]\n    },\n    {\n        icon: \"cib:imdb\",\n        iconColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_10__[\"default\"][600],\n        bgColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__[\"default\"][900]\n    },\n    {\n        icon: \"cib:monzo\",\n        bgColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__[\"default\"][600]\n    }\n];\nconst CardItem = (param)=>{\n    let { icon, bgcolor, iconcolor, onClick, isActive } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        width: \"100%\",\n        height: \"100px\",\n        bgcolor: bgcolor || \"white\",\n        className: isActive ? \"active\" : \"\",\n        onClick: onClick,\n        borderRadius: 8,\n        sx: {\n            transform: isActive ? \"scale(1.2)\" : \"none\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n            icon: icon,\n            height: 60,\n            color: iconcolor || \"white\"\n        }, void 0, false, {\n            fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/favorite.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/favorite.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CardItem;\nfunction SectionFavorite() {\n    _s();\n    const [activeIndex, setActiveIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [favoriteRef] = (0,keen_slider_react__WEBPACK_IMPORTED_MODULE_4__.useKeenSlider)({\n        loop: true,\n        mode: \"free-snap\",\n        slides: {\n            perView: 6,\n            spacing: 15\n        }\n    });\n    const handleBoxClick = (index)=>{\n        setActiveIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        gap: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                color: \"white\",\n                fontSize: \"1.3rem\",\n                fontWeight: 600,\n                children: \"Favorite Apps\"\n            }, void 0, false, {\n                fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/favorite.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                ref: favoriteRef,\n                className: \"keen-slider\",\n                children: dataFavorite.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        className: \"keen-slider__slide\",\n                        sx: {\n                            transform: activeIndex === index ? \"scale(1.2)\" : \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardItem, {\n                            icon: item.icon,\n                            bgcolor: item.bgColor,\n                            iconcolor: item.iconColor,\n                            isActive: activeIndex === index,\n                            onClick: ()=>handleBoxClick(index)\n                        }, void 0, false, {\n                            fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/favorite.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/favorite.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/favorite.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/favorite.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(SectionFavorite, \"fR6YgD3+KEnTPdRZ49XU4ATkyPI=\", false, function() {\n    return [\n        keen_slider_react__WEBPACK_IMPORTED_MODULE_4__.useKeenSlider\n    ];\n});\n_c1 = SectionFavorite;\nvar _c, _c1;\n$RefreshReg$(_c, \"CardItem\");\n$RefreshReg$(_c1, \"SectionFavorite\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW50cm8vcGFydGlhbHMvZmF2b3JpdGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDWTtBQUNpQjtBQUNkO0FBQ1M7QUFDNEI7QUFFOUUsTUFBTVksZUFBZTtJQUNuQjtRQUNFQyxNQUFNO1FBQ05DLFdBQVdOLDREQUFJLENBQUMsSUFBSTtJQUN0QjtJQUNBO1FBQ0VLLE1BQU07UUFDTkUsU0FBU0wsNERBQUcsQ0FBQyxJQUFJO0lBQ25CO0lBQ0E7UUFDRUcsTUFBTTtRQUNOQyxXQUFXSiw0REFBRyxDQUFDLElBQUk7SUFDckI7SUFDQTtRQUNFRyxNQUFNO1FBQ05FLFNBQVNULDREQUFJLENBQUMsSUFBSTtJQUNwQjtJQUNBO1FBQ0VPLE1BQU07UUFDTkMsV0FBV1IsNERBQUksQ0FBQyxJQUFJO0lBQ3RCO0lBQ0E7UUFDRU8sTUFBTTtRQUNORSxTQUFTTiw0REFBTSxDQUFDLElBQUk7SUFDdEI7SUFDQTtRQUNFSSxNQUFNO1FBQ05DLFdBQVdQLDREQUFLLENBQUMsSUFBSTtJQUN2QjtJQUNBO1FBQ0VNLE1BQU07UUFDTkMsV0FBV0gsNkRBQU0sQ0FBQyxJQUFJO1FBQ3RCSSxTQUFTUCw0REFBSSxDQUFDLElBQUk7SUFDcEI7SUFDQTtRQUNFSyxNQUFNO1FBQ05FLFNBQVNSLDREQUFLLENBQUMsSUFBSTtJQUNyQjtDQUNEO0FBRU0sTUFBTVMsV0FBVztRQUFDLEVBQ3ZCSCxJQUFJLEVBQ0pJLE9BQU8sRUFDUEMsU0FBUyxFQUNUQyxPQUFPLEVBQ1BDLFFBQVEsRUFPVDtJQUNDLHFCQUNFLDhEQUFDakIsaUdBQUtBO1FBQ0prQixnQkFBZTtRQUNmQyxZQUFXO1FBQ1hDLE9BQU07UUFDTkMsUUFBTztRQUNQUCxTQUFTQSxXQUFXO1FBQ3BCUSxXQUFXTCxXQUFXLFdBQVc7UUFDakNELFNBQVNBO1FBQ1RPLGNBQWM7UUFDZEMsSUFBSTtZQUNGQyxXQUFXUixXQUFXLGVBQWU7UUFDdkM7a0JBRUEsNEVBQUNuQixnREFBSUE7WUFBQ1ksTUFBTUE7WUFBTVcsUUFBUTtZQUFJSyxPQUFPWCxhQUFhOzs7Ozs7Ozs7OztBQUd4RCxFQUFFO0tBOUJXRjtBQWdDRSxTQUFTYzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdoQyxxREFBYyxDQUFnQjtJQUVwRSxNQUFNLENBQUNrQyxZQUFZLEdBQUc3QixnRUFBYUEsQ0FBaUI7UUFDbEQ4QixNQUFNO1FBQ05DLE1BQU07UUFDTkMsUUFBUTtZQUNOQyxTQUFTO1lBQ1RDLFNBQVM7UUFDWDtJQUNGO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3RCVCxlQUFlUztJQUNqQjtJQUVBLHFCQUNFLDhEQUFDdEMsaUdBQUtBO1FBQUN1QyxLQUFLOzswQkFDViw4REFBQ3RDLGlHQUFVQTtnQkFBQ3lCLE9BQU07Z0JBQVFjLFVBQVM7Z0JBQVNDLFlBQVk7MEJBQUs7Ozs7OzswQkFHN0QsOERBQUMxQyxpR0FBR0E7Z0JBQUMyQyxLQUFLWDtnQkFBYVQsV0FBVTswQkFDOUJiLGFBQWFrQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTU4sc0JBQ3ZCLDhEQUFDdkMsaUdBQUdBO3dCQUNGdUIsV0FBWTt3QkFFWkUsSUFBSTs0QkFDRkMsV0FBV0csZ0JBQWdCVSxRQUFRLGVBQWU7d0JBQ3BEO2tDQUVBLDRFQUFDekI7NEJBQ0NILE1BQU1rQyxLQUFLbEMsSUFBSTs0QkFDZkksU0FBUzhCLEtBQUtoQyxPQUFPOzRCQUNyQkcsV0FBVzZCLEtBQUtqQyxTQUFTOzRCQUN6Qk0sVUFBVVcsZ0JBQWdCVTs0QkFDMUJ0QixTQUFTLElBQU1xQixlQUFlQzs7Ozs7O3VCQVYzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmpCO0dBMUN3Qlg7O1FBR0F6Qiw0REFBYUE7OztNQUhieUIiLCJzb3VyY2VzIjpbIi9ob21lL2NhdHVydGVndWhvay9Eb2N1bWVudHMvQ1RPSy92aW8tYmd2LXN0Yi9zcmMvYXBwL2ludHJvL3BhcnRpYWxzL2Zhdm9yaXRlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIkBpY29uaWZ5L3JlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBcImtlZW4tc2xpZGVyL2tlZW4tc2xpZGVyLm1pbi5jc3NcIjtcbmltcG9ydCB7IHVzZUtlZW5TbGlkZXIgfSBmcm9tIFwia2Vlbi1zbGlkZXIvcmVhY3RcIjtcbmltcG9ydCB7IGJsdWUsIGdyZWVuLCBncmV5LCBvcmFuZ2UsIHJlZCwgeWVsbG93IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvY29sb3JzXCI7XG5cbmNvbnN0IGRhdGFGYXZvcml0ZSA9IFtcbiAge1xuICAgIGljb246IFwiY2liOmFwcGxlXCIsXG4gICAgaWNvbkNvbG9yOiBncmV5WzgwMF0sXG4gIH0sXG4gIHtcbiAgICBpY29uOiBcImNpYjpuZXRmbGl4XCIsXG4gICAgYmdDb2xvcjogcmVkWzYwMF0sXG4gIH0sXG4gIHtcbiAgICBpY29uOiBcImNpYjp5b3V0dWJlXCIsXG4gICAgaWNvbkNvbG9yOiByZWRbNjAwXSxcbiAgfSxcbiAge1xuICAgIGljb246IFwidG9rZW4tYnJhbmRlZDphbHBoYVwiLFxuICAgIGJnQ29sb3I6IGJsdWVbNjAwXSxcbiAgfSxcbiAge1xuICAgIGljb246IFwiY2liOmludGVsXCIsXG4gICAgaWNvbkNvbG9yOiBibHVlWzYwMF0sXG4gIH0sXG4gIHtcbiAgICBpY29uOiBcImNpYjphbWF6b24tYXdzXCIsXG4gICAgYmdDb2xvcjogb3JhbmdlWzYwMF0sXG4gIH0sXG4gIHtcbiAgICBpY29uOiBcImNpYjpvdmVybGVhZlwiLFxuICAgIGljb25Db2xvcjogZ3JlZW5bNjAwXSxcbiAgfSxcbiAge1xuICAgIGljb246IFwiY2liOmltZGJcIixcbiAgICBpY29uQ29sb3I6IHllbGxvd1s2MDBdLFxuICAgIGJnQ29sb3I6IGdyZXlbOTAwXSxcbiAgfSxcbiAge1xuICAgIGljb246IFwiY2liOm1vbnpvXCIsXG4gICAgYmdDb2xvcjogZ3JlZW5bNjAwXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBDYXJkSXRlbSA9ICh7XG4gIGljb24sXG4gIGJnY29sb3IsXG4gIGljb25jb2xvcixcbiAgb25DbGljayxcbiAgaXNBY3RpdmUsXG59OiB7XG4gIGljb246IHN0cmluZztcbiAgYmdjb2xvcj86IHN0cmluZztcbiAgaWNvbmNvbG9yPzogc3RyaW5nO1xuICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgIGhlaWdodD1cIjEwMHB4XCJcbiAgICAgIGJnY29sb3I9e2JnY29sb3IgfHwgXCJ3aGl0ZVwifVxuICAgICAgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwifVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIGJvcmRlclJhZGl1cz17OH1cbiAgICAgIHN4PXt7XG4gICAgICAgIHRyYW5zZm9ybTogaXNBY3RpdmUgPyBcInNjYWxlKDEuMilcIiA6IFwibm9uZVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SWNvbiBpY29uPXtpY29ufSBoZWlnaHQ9ezYwfSBjb2xvcj17aWNvbmNvbG9yIHx8IFwid2hpdGVcIn0gLz5cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbkZhdm9yaXRlKCkge1xuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IFtmYXZvcml0ZVJlZl0gPSB1c2VLZWVuU2xpZGVyPEhUTUxEaXZFbGVtZW50Pih7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICBtb2RlOiBcImZyZWUtc25hcFwiLFxuICAgIHNsaWRlczoge1xuICAgICAgcGVyVmlldzogNixcbiAgICAgIHNwYWNpbmc6IDE1LFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUJveENsaWNrID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBzZXRBY3RpdmVJbmRleChpbmRleCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgZ2FwPXsyfT5cbiAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjEuM3JlbVwiIGZvbnRXZWlnaHQ9ezYwMH0+XG4gICAgICAgIEZhdm9yaXRlIEFwcHNcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxCb3ggcmVmPXtmYXZvcml0ZVJlZn0gY2xhc3NOYW1lPVwia2Vlbi1zbGlkZXJcIj5cbiAgICAgICAge2RhdGFGYXZvcml0ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtga2Vlbi1zbGlkZXJfX3NsaWRlYH1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGFjdGl2ZUluZGV4ID09PSBpbmRleCA/IFwic2NhbGUoMS4yKVwiIDogXCJub25lXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkSXRlbVxuICAgICAgICAgICAgICBpY29uPXtpdGVtLmljb259XG4gICAgICAgICAgICAgIGJnY29sb3I9e2l0ZW0uYmdDb2xvcn1cbiAgICAgICAgICAgICAgaWNvbmNvbG9yPXtpdGVtLmljb25Db2xvcn1cbiAgICAgICAgICAgICAgaXNBY3RpdmU9e2FjdGl2ZUluZGV4ID09PSBpbmRleH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQm94Q2xpY2soaW5kZXgpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG4gICAgICA8L0JveD5cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSWNvbiIsIkJveCIsIlN0YWNrIiwiVHlwb2dyYXBoeSIsInVzZUtlZW5TbGlkZXIiLCJibHVlIiwiZ3JlZW4iLCJncmV5Iiwib3JhbmdlIiwicmVkIiwieWVsbG93IiwiZGF0YUZhdm9yaXRlIiwiaWNvbiIsImljb25Db2xvciIsImJnQ29sb3IiLCJDYXJkSXRlbSIsImJnY29sb3IiLCJpY29uY29sb3IiLCJvbkNsaWNrIiwiaXNBY3RpdmUiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzTmFtZSIsImJvcmRlclJhZGl1cyIsInN4IiwidHJhbnNmb3JtIiwiY29sb3IiLCJTZWN0aW9uRmF2b3JpdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwidXNlU3RhdGUiLCJmYXZvcml0ZVJlZiIsImxvb3AiLCJtb2RlIiwic2xpZGVzIiwicGVyVmlldyIsInNwYWNpbmciLCJoYW5kbGVCb3hDbGljayIsImluZGV4IiwiZ2FwIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwicmVmIiwibWFwIiwiaXRlbSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/intro/partials/favorite.tsx\n"));

/***/ })

});