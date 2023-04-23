"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_imagino_projects_ecommerce_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_imagino_projects_ecommerce_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_imagino_projects_ecommerce_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_title_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/title/Title */ \"./src/components/ui/title/Title.js\");\n/* harmony import */ var _components_product_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/product/Product */ \"./src/components/product/Product.js\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.scss */ \"./src/pages/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ui_input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/input/Input */ \"./src/components/ui/input/Input.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/Context */ \"./src/context/Context.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var user = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).user;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var _query = router.query, categories = _query.categories, news = _query.news, suggestions = _query.suggestions;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), products = ref[0], setProducts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(products), filtredProducts = ref1[0], setFiltredProducts = ref1[1];\n    var options = (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var getProd = _asyncToGenerator(_Users_imagino_projects_ecommerce_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res;\n            return _Users_imagino_projects_ecommerce_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:3030/api/products/\", {\n                            params: {\n                                categories: categories,\n                                new: news,\n                                sug: suggestions,\n                                gender: user === null || user === void 0 ? void 0 : user.gender\n                            }\n                        });\n                    case 3:\n                        res = _ctx.sent;\n                        setProducts(res.data);\n                        setFiltredProducts(res.data);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        getProd();\n    }, [\n        router.query\n    ]);\n    var handleFilter = function(val) {\n        setFiltredProducts(products.filter(function(el) {\n            var a = el.title.toLowerCase().includes(val.toLowerCase());\n            return el.title.toLowerCase().includes(val.toLowerCase()) || el.desc.toLowerCase().includes(val.toLowerCase());\n        }));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n            lineNumber: 51,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_ui_title_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: categories === \"cloths\" ? \"Habillement\" : categories === \"shoes\" ? \"Baskettes\" : categories === \"accessories\" ? \"accessoires\" : news ? \"Nouveaut\\xe9s\" : \"Suggestions\",\n                __source: {\n                    fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            filtredProducts.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().search__bar),\n                __source: {\n                    fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_ui_input_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    type: \"text\",\n                    name: \"Filter\",\n                    label: \"Recherche\",\n                    placeholder: \"Recherche\",\n                    onChange: function(e) {\n                        return handleFilter(e.target.value);\n                    },\n                    __source: {\n                        fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    },\n                    __self: this\n                })\n            }),\n            filtredProducts.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().product__cards),\n                __source: {\n                    fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: filtredProducts === null || filtredProducts === void 0 ? void 0 : filtredProducts.map(function(product) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_product_Product__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            product: product,\n                            __source: {\n                                fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 15\n                            },\n                            __self: _this\n                        })\n                    }, product.id);\n                })\n            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().text__indispo),\n                __source: {\n                    fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                    __source: {\n                        fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: \"Aucun produit disponible.\"\n                })\n            })\n        ]\n    }));\n};\n_s(Home, \"HcNPXaWIDUfuHV66iJ/9nozSW4c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUc7Z0JBQUNFLFNBQVMsRUFBRXpDLHVFQUFrQjs7Ozs7OzsrRkFDL0JJLGtFQUFLO29CQUNKdUMsSUFBSSxFQUFDLENBQU07b0JBQ1hDLElBQUksRUFBQyxDQUFRO29CQUNiQyxLQUFLLEVBQUMsQ0FBVztvQkFDakJDLFdBQVcsRUFBQyxDQUFXO29CQUN2QkMsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQzt3QkFBS2xCLE1BQU0sQ0FBTkEsWUFBWSxDQUFDa0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7WUFJakRqQyxlQUFlLENBQUN1QixNQUFNLEdBQUcsQ0FBQyx3RUFDeEJELENBQUc7Z0JBQUNFLFNBQVMsRUFBRXpDLDBFQUFxQjs7Ozs7OzswQkFDbENpQixlQUFlLGFBQWZBLGVBQWUsS0FBZkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsZUFBZSxDQUFFbUMsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsT0FBTztrQ0FDNUIsTUFBTSx3REFBTGQsQ0FBRzs7Ozs7Ozt1R0FDRHhDLG1FQUFPOzRCQUFDc0QsT0FBTyxFQUFFQSxPQUFPOzs7Ozs7Ozt1QkFEakJBLE9BQU8sQ0FBQ0MsRUFBRTs7c0ZBTXZCZixDQUFHO2dCQUFDRSxTQUFTLEVBQUV6Qyx5RUFBb0I7Ozs7Ozs7K0ZBQ2pDd0QsQ0FBQzs7Ozs7Ozs4QkFBQyxDQUF5Qjs7Ozs7QUFLdEMsQ0FBQztHQWpGdUJoRCxJQUFJOztRQUVYSCxrREFBUzs7O0tBRkZHLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpdGxlIGZyb20gXCIuLi9jb21wb25lbnRzL3VpL3RpdGxlL1RpdGxlXCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9kdWN0L1Byb2R1Y3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9pbnB1dC9JbnB1dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9Db250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgY2F0ZWdvcmllcywgbmV3cywgc3VnZ2VzdGlvbnMgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmaWx0cmVkUHJvZHVjdHMsIHNldEZpbHRyZWRQcm9kdWN0c10gPSB1c2VTdGF0ZShwcm9kdWN0cyk7XG4gIGNvbnN0IG9wdGlvbnMgPSBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFByb2QgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL3Byb2R1Y3RzL1wiLCB7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzLFxuICAgICAgICAgICAgbmV3OiBuZXdzLFxuICAgICAgICAgICAgc3VnOiBzdWdnZXN0aW9ucyxcbiAgICAgICAgICAgIGdlbmRlcjogdXNlcj8uZ2VuZGVyLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRQcm9kdWN0cyhyZXMuZGF0YSk7XG4gICAgICAgIHNldEZpbHRyZWRQcm9kdWN0cyhyZXMuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGdldFByb2QoKTtcbiAgfSwgW3JvdXRlci5xdWVyeV0pO1xuXG4gIGNvbnN0IGhhbmRsZUZpbHRlciA9ICh2YWwpID0+IHtcbiAgICBzZXRGaWx0cmVkUHJvZHVjdHMoXG4gICAgICBwcm9kdWN0cy5maWx0ZXIoKGVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBlbC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBlbC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbC50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIGVsLmRlc2MudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWwudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VGl0bGVcbiAgICAgICAgdGl0bGU9e1xuICAgICAgICAgIGNhdGVnb3JpZXMgPT09IFwiY2xvdGhzXCJcbiAgICAgICAgICAgID8gXCJIYWJpbGxlbWVudFwiXG4gICAgICAgICAgICA6IGNhdGVnb3JpZXMgPT09IFwic2hvZXNcIlxuICAgICAgICAgICAgPyBcIkJhc2tldHRlc1wiXG4gICAgICAgICAgICA6IGNhdGVnb3JpZXMgPT09IFwiYWNjZXNzb3JpZXNcIlxuICAgICAgICAgICAgPyBcImFjY2Vzc29pcmVzXCJcbiAgICAgICAgICAgIDogbmV3c1xuICAgICAgICAgICAgPyBcIk5vdXZlYXV0w6lzXCJcbiAgICAgICAgICAgIDogXCJTdWdnZXN0aW9uc1wiXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgICB7ZmlsdHJlZFByb2R1Y3RzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaF9fYmFyfT5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJGaWx0ZXJcIlxuICAgICAgICAgICAgbGFiZWw9XCJSZWNoZXJjaGVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWx0ZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtmaWx0cmVkUHJvZHVjdHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19jYXJkc30+XG4gICAgICAgICAge2ZpbHRyZWRQcm9kdWN0cz8ubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgICAgIDxQcm9kdWN0IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRfX2luZGlzcG99PlxuICAgICAgICAgIDxwPkF1Y3VuIHByb2R1aXQgZGlzcG9uaWJsZS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJUaXRsZSIsIlByb2R1Y3QiLCJzdHlsZXMiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbnB1dCIsInVzZVJvdXRlciIsImF4aW9zIiwiQ29udGV4dCIsIkhvbWUiLCJ1c2VyIiwicm91dGVyIiwicXVlcnkiLCJjYXRlZ29yaWVzIiwibmV3cyIsInN1Z2dlc3Rpb25zIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImZpbHRyZWRQcm9kdWN0cyIsInNldEZpbHRyZWRQcm9kdWN0cyIsIm9wdGlvbnMiLCJnZXRQcm9kIiwicmVzIiwiZ2V0IiwicGFyYW1zIiwibmV3Iiwic3VnIiwiZ2VuZGVyIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVGaWx0ZXIiLCJ2YWwiLCJmaWx0ZXIiLCJlbCIsImEiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkZXNjIiwiZGl2IiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwic2VhcmNoX19iYXIiLCJ0eXBlIiwibmFtZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb2R1Y3RfX2NhcmRzIiwibWFwIiwicHJvZHVjdCIsImlkIiwidGV4dF9faW5kaXNwbyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

});