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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardItem: () => (/* binding */ CardItem),\n/* harmony export */   \"default\": () => (/* binding */ SectionLiveTv)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/react */ \"(app-pages-browser)/./node_modules/@iconify/react/dist/iconify.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ \"(app-pages-browser)/./node_modules/keen-slider/keen-slider.min.css\");\n/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! keen-slider/react */ \"(app-pages-browser)/./node_modules/keen-slider/react.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/grey.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/yellow.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/blue.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/orange.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/green.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst dataFavorite = [\n    {\n        icon: \"cbi:apple-tv\",\n        iconColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__[\"default\"][800]\n    },\n    {\n        icon: \"cbi:okko-tv\",\n        bgColor: \"#7a12ca\"\n    },\n    {\n        icon: \"cbi:metv\",\n        iconColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__[\"default\"][900],\n        bgColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_6__[\"default\"][600]\n    },\n    {\n        icon: \"cbi:molotovtv\",\n        bgColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__[\"default\"][600]\n    },\n    {\n        icon: \"cbi:zdftivi\",\n        iconColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_7__[\"default\"][600]\n    },\n    {\n        icon: \"cbi:skysports-mainevent\",\n        bgColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__[\"default\"][600]\n    },\n    {\n        icon: \"cbi:waiputv\",\n        iconColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__[\"default\"][600]\n    },\n    {\n        icon: \"cbi:kion-tv\",\n        iconColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_6__[\"default\"][600],\n        bgColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__[\"default\"][900]\n    },\n    {\n        icon: \"cbi:ivi-tv\",\n        bgColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__[\"default\"][600]\n    }\n];\nconst CardItem = (param)=>{\n    let { icon, bgcolor, iconcolor, onClick, isActive } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        width: \"100%\",\n        height: \"160px\",\n        bgcolor: bgcolor || \"white\",\n        className: isActive ? \"active\" : \"\",\n        onClick: onClick,\n        sx: {\n            transform: isActive ? \"scale(1.2)\" : \"none\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n            icon: icon,\n            height: 150,\n            color: iconcolor || \"white\"\n        }, void 0, false, {\n            fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/liveTv.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/liveTv.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CardItem;\nfunction SectionLiveTv() {\n    _s();\n    const [activeIndex, setActiveIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [favoriteRef] = (0,keen_slider_react__WEBPACK_IMPORTED_MODULE_4__.useKeenSlider)({\n        loop: true,\n        mode: \"free-snap\",\n        slides: {\n            perView: 4,\n            spacing: 15\n        }\n    });\n    const handleBoxClick = (index)=>{\n        setActiveIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        gap: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                color: \"white\",\n                fontSize: \"1.3rem\",\n                fontWeight: 600,\n                children: \"Live TV Channel\"\n            }, void 0, false, {\n                fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/liveTv.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                ref: favoriteRef,\n                className: \"keen-slider\",\n                children: dataFavorite.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                        className: \"keen-slider__slide\",\n                        sx: {\n                            transform: activeIndex === index ? \"scale(1.2)\" : \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardItem, {\n                            icon: item.icon,\n                            bgcolor: item.bgColor,\n                            iconcolor: item.iconColor,\n                            isActive: activeIndex === index,\n                            onClick: ()=>handleBoxClick(index)\n                        }, void 0, false, {\n                            fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/liveTv.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/liveTv.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/liveTv.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/caturteguhok/Documents/CTOK/vio-bgv-stb/src/app/intro/partials/liveTv.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(SectionLiveTv, \"fR6YgD3+KEnTPdRZ49XU4ATkyPI=\", false, function() {\n    return [\n        keen_slider_react__WEBPACK_IMPORTED_MODULE_4__.useKeenSlider\n    ];\n});\n_c1 = SectionLiveTv;\nvar _c, _c1;\n$RefreshReg$(_c, \"CardItem\");\n$RefreshReg$(_c1, \"SectionLiveTv\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW50cm8vcGFydGlhbHMvbGl2ZVR2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDWTtBQUNpQjtBQUNkO0FBQ1M7QUFDNEI7QUFFOUUsTUFBTVcsZUFBZTtJQUNuQjtRQUNFQyxNQUFNO1FBQ05DLFdBQVdMLDREQUFJLENBQUMsSUFBSTtJQUN0QjtJQUNBO1FBQ0VJLE1BQU07UUFDTkUsU0FBUztJQUNYO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxXQUFXTCw0REFBSSxDQUFDLElBQUk7UUFDcEJNLFNBQVNKLDREQUFNLENBQUMsSUFBSTtJQUN0QjtJQUNBO1FBQ0VFLE1BQU07UUFDTkUsU0FBU1IsNERBQUksQ0FBQyxJQUFJO0lBQ3BCO0lBQ0E7UUFDRU0sTUFBTTtRQUNOQyxXQUFXUCw0REFBSSxDQUFDLElBQUk7SUFDdEI7SUFDQTtRQUNFTSxNQUFNO1FBQ05FLFNBQVNMLDREQUFNLENBQUMsSUFBSTtJQUN0QjtJQUNBO1FBQ0VHLE1BQU07UUFDTkMsV0FBV04sNERBQUssQ0FBQyxJQUFJO0lBQ3ZCO0lBQ0E7UUFDRUssTUFBTTtRQUNOQyxXQUFXSCw0REFBTSxDQUFDLElBQUk7UUFDdEJJLFNBQVNOLDREQUFJLENBQUMsSUFBSTtJQUNwQjtJQUNBO1FBQ0VJLE1BQU07UUFDTkUsU0FBU1AsNERBQUssQ0FBQyxJQUFJO0lBQ3JCO0NBQ0Q7QUFFTSxNQUFNUSxXQUFXO1FBQUMsRUFDdkJILElBQUksRUFDSkksT0FBTyxFQUNQQyxTQUFTLEVBQ1RDLE9BQU8sRUFDUEMsUUFBUSxFQU9UO0lBQ0MscUJBQ0UsOERBQUNoQixpR0FBS0E7UUFDSmlCLGdCQUFlO1FBQ2ZDLFlBQVc7UUFDWEMsT0FBTTtRQUNOQyxRQUFPO1FBQ1BQLFNBQVNBLFdBQVc7UUFDcEJRLFdBQVdMLFdBQVcsV0FBVztRQUNqQ0QsU0FBU0E7UUFDVE8sSUFBSTtZQUNGQyxXQUFXUCxXQUFXLGVBQWU7UUFDdkM7a0JBRUEsNEVBQUNsQixnREFBSUE7WUFBQ1csTUFBTUE7WUFBTVcsUUFBUTtZQUFLSSxPQUFPVixhQUFhOzs7Ozs7Ozs7OztBQUd6RCxFQUFFO0tBN0JXRjtBQStCRSxTQUFTYTs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUc5QixxREFBYyxDQUFnQjtJQUVwRSxNQUFNLENBQUNnQyxZQUFZLEdBQUczQixnRUFBYUEsQ0FBaUI7UUFDbEQ0QixNQUFNO1FBQ05DLE1BQU07UUFDTkMsUUFBUTtZQUNOQyxTQUFTO1lBQ1RDLFNBQVM7UUFDWDtJQUNGO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3RCVCxlQUFlUztJQUNqQjtJQUVBLHFCQUNFLDhEQUFDcEMsaUdBQUtBO1FBQUNxQyxLQUFLOzswQkFDViw4REFBQ3BDLGlHQUFVQTtnQkFBQ3VCLE9BQU07Z0JBQVFjLFVBQVM7Z0JBQVNDLFlBQVk7MEJBQUs7Ozs7OzswQkFHN0QsOERBQUN4QyxpR0FBR0E7Z0JBQUN5QyxLQUFLWDtnQkFBYVIsV0FBVTswQkFDOUJiLGFBQWFpQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTU4sc0JBQ3ZCLDhEQUFDckMsaUdBQUdBO3dCQUNGc0IsV0FBWTt3QkFFWkMsSUFBSTs0QkFDRkMsV0FBV0csZ0JBQWdCVSxRQUFRLGVBQWU7d0JBQ3BEO2tDQUVBLDRFQUFDeEI7NEJBQ0NILE1BQU1pQyxLQUFLakMsSUFBSTs0QkFDZkksU0FBUzZCLEtBQUsvQixPQUFPOzRCQUNyQkcsV0FBVzRCLEtBQUtoQyxTQUFTOzRCQUN6Qk0sVUFBVVUsZ0JBQWdCVTs0QkFDMUJyQixTQUFTLElBQU1vQixlQUFlQzs7Ozs7O3VCQVYzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmpCO0dBMUN3Qlg7O1FBR0F2Qiw0REFBYUE7OztNQUhidUIiLCJzb3VyY2VzIjpbIi9ob21lL2NhdHVydGVndWhvay9Eb2N1bWVudHMvQ1RPSy92aW8tYmd2LXN0Yi9zcmMvYXBwL2ludHJvL3BhcnRpYWxzL2xpdmVUdi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJAaWNvbmlmeS9yZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgXCJrZWVuLXNsaWRlci9rZWVuLXNsaWRlci5taW4uY3NzXCI7XG5pbXBvcnQgeyB1c2VLZWVuU2xpZGVyIH0gZnJvbSBcImtlZW4tc2xpZGVyL3JlYWN0XCI7XG5pbXBvcnQgeyBibHVlLCBncmVlbiwgZ3JleSwgb3JhbmdlLCByZWQsIHllbGxvdyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiO1xuXG5jb25zdCBkYXRhRmF2b3JpdGUgPSBbXG4gIHtcbiAgICBpY29uOiBcImNiaTphcHBsZS10dlwiLFxuICAgIGljb25Db2xvcjogZ3JleVs4MDBdLFxuICB9LFxuICB7XG4gICAgaWNvbjogXCJjYmk6b2trby10dlwiLFxuICAgIGJnQ29sb3I6IFwiIzdhMTJjYVwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogXCJjYmk6bWV0dlwiLFxuICAgIGljb25Db2xvcjogZ3JleVs5MDBdLFxuICAgIGJnQ29sb3I6IHllbGxvd1s2MDBdLFxuICB9LFxuICB7XG4gICAgaWNvbjogXCJjYmk6bW9sb3RvdnR2XCIsXG4gICAgYmdDb2xvcjogYmx1ZVs2MDBdLFxuICB9LFxuICB7XG4gICAgaWNvbjogXCJjYmk6emRmdGl2aVwiLFxuICAgIGljb25Db2xvcjogYmx1ZVs2MDBdLFxuICB9LFxuICB7XG4gICAgaWNvbjogXCJjYmk6c2t5c3BvcnRzLW1haW5ldmVudFwiLFxuICAgIGJnQ29sb3I6IG9yYW5nZVs2MDBdLFxuICB9LFxuICB7XG4gICAgaWNvbjogXCJjYmk6d2FpcHV0dlwiLFxuICAgIGljb25Db2xvcjogZ3JlZW5bNjAwXSxcbiAgfSxcbiAge1xuICAgIGljb246IFwiY2JpOmtpb24tdHZcIixcbiAgICBpY29uQ29sb3I6IHllbGxvd1s2MDBdLFxuICAgIGJnQ29sb3I6IGdyZXlbOTAwXSxcbiAgfSxcbiAge1xuICAgIGljb246IFwiY2JpOml2aS10dlwiLFxuICAgIGJnQ29sb3I6IGdyZWVuWzYwMF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgQ2FyZEl0ZW0gPSAoe1xuICBpY29uLFxuICBiZ2NvbG9yLFxuICBpY29uY29sb3IsXG4gIG9uQ2xpY2ssXG4gIGlzQWN0aXZlLFxufToge1xuICBpY29uOiBzdHJpbmc7XG4gIGJnY29sb3I/OiBzdHJpbmc7XG4gIGljb25jb2xvcj86IHN0cmluZztcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgaXNBY3RpdmU6IGJvb2xlYW47XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICBoZWlnaHQ9XCIxNjBweFwiXG4gICAgICBiZ2NvbG9yPXtiZ2NvbG9yIHx8IFwid2hpdGVcIn1cbiAgICAgIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBzeD17e1xuICAgICAgICB0cmFuc2Zvcm06IGlzQWN0aXZlID8gXCJzY2FsZSgxLjIpXCIgOiBcIm5vbmVcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEljb24gaWNvbj17aWNvbn0gaGVpZ2h0PXsxNTB9IGNvbG9yPXtpY29uY29sb3IgfHwgXCJ3aGl0ZVwifSAvPlxuICAgIDwvU3RhY2s+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN0aW9uTGl2ZVR2KCkge1xuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IFtmYXZvcml0ZVJlZl0gPSB1c2VLZWVuU2xpZGVyPEhUTUxEaXZFbGVtZW50Pih7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICBtb2RlOiBcImZyZWUtc25hcFwiLFxuICAgIHNsaWRlczoge1xuICAgICAgcGVyVmlldzogNCxcbiAgICAgIHNwYWNpbmc6IDE1LFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUJveENsaWNrID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBzZXRBY3RpdmVJbmRleChpbmRleCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgZ2FwPXsyfT5cbiAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjEuM3JlbVwiIGZvbnRXZWlnaHQ9ezYwMH0+XG4gICAgICAgIExpdmUgVFYgQ2hhbm5lbFxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEJveCByZWY9e2Zhdm9yaXRlUmVmfSBjbGFzc05hbWU9XCJrZWVuLXNsaWRlclwiPlxuICAgICAgICB7ZGF0YUZhdm9yaXRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BrZWVuLXNsaWRlcl9fc2xpZGVgfVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYWN0aXZlSW5kZXggPT09IGluZGV4ID8gXCJzY2FsZSgxLjIpXCIgOiBcIm5vbmVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmRJdGVtXG4gICAgICAgICAgICAgIGljb249e2l0ZW0uaWNvbn1cbiAgICAgICAgICAgICAgYmdjb2xvcj17aXRlbS5iZ0NvbG9yfVxuICAgICAgICAgICAgICBpY29uY29sb3I9e2l0ZW0uaWNvbkNvbG9yfVxuICAgICAgICAgICAgICBpc0FjdGl2ZT17YWN0aXZlSW5kZXggPT09IGluZGV4fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCb3hDbGljayhpbmRleCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgIDwvU3RhY2s+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJY29uIiwiQm94IiwiU3RhY2siLCJUeXBvZ3JhcGh5IiwidXNlS2VlblNsaWRlciIsImJsdWUiLCJncmVlbiIsImdyZXkiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJkYXRhRmF2b3JpdGUiLCJpY29uIiwiaWNvbkNvbG9yIiwiYmdDb2xvciIsIkNhcmRJdGVtIiwiYmdjb2xvciIsImljb25jb2xvciIsIm9uQ2xpY2siLCJpc0FjdGl2ZSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwic3giLCJ0cmFuc2Zvcm0iLCJjb2xvciIsIlNlY3Rpb25MaXZlVHYiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwidXNlU3RhdGUiLCJmYXZvcml0ZVJlZiIsImxvb3AiLCJtb2RlIiwic2xpZGVzIiwicGVyVmlldyIsInNwYWNpbmciLCJoYW5kbGVCb3hDbGljayIsImluZGV4IiwiZ2FwIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwicmVmIiwibWFwIiwiaXRlbSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/intro/partials/liveTv.tsx\n"));

/***/ })

});