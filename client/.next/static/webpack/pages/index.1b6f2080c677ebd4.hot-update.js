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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_imagino_projects_ecommerce_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_imagino_projects_ecommerce_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_imagino_projects_ecommerce_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_title_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/title/Title */ \"./src/components/ui/title/Title.js\");\n/* harmony import */ var _components_product_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/product/Product */ \"./src/components/product/Product.js\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.scss */ \"./src/pages/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ui_input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/input/Input */ \"./src/components/ui/input/Input.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/Context */ \"./src/context/Context.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var user = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).user;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var _query = router.query, categories = _query.categories, news = _query.news, suggestions = _query.suggestions;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), products = ref[0], setProducts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(products), filtredProducts = ref1[0], setFiltredProducts = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var getProd = _asyncToGenerator(_Users_imagino_projects_ecommerce_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res;\n            return _Users_imagino_projects_ecommerce_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:3030/api/products/\", {\n                            params: {\n                                categories: categories,\n                                new: news,\n                                sug: suggestions,\n                                gender: user === null || user === void 0 ? void 0 : user.gender\n                            }\n                        });\n                    case 3:\n                        res = _ctx.sent;\n                        setProducts(res.data);\n                        setFiltredProducts(res.data);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        getProd();\n    }, [\n        router.query\n    ]);\n    var handleFilter = function(val) {\n        setFiltredProducts(products.filter(function(el) {\n            var a = el.title.toLowerCase().includes(val.toLowerCase());\n            return el.title.toLowerCase().includes(val.toLowerCase()) || el.desc.toLowerCase().includes(val.toLowerCase());\n        }));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n            lineNumber: 50,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_ui_title_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: categories === \"cloths\" ? \"Habillement\" : categories === \"shoes\" ? \"Baskettes\" : categories === \"accessories\" ? \"accessoires\" : news ? \"Nouveaut\\xe9s\" : \"Suggestions\",\n                __source: {\n                    fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            filtredProducts.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().search__bar),\n                __source: {\n                    fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_ui_input_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    type: \"text\",\n                    name: \"Filter\",\n                    label: \"Recherche\",\n                    placeholder: \"Recherche\",\n                    onChange: function(e) {\n                        return handleFilter(e.target.value);\n                    },\n                    __source: {\n                        fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().product__cards),\n                __source: {\n                    fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n                    lineNumber: 75,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: filtredProducts.length > 0 ? filtredProducts === null || filtredProducts === void 0 ? void 0 : filtredProducts.map(function(product) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_product_Product__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            product: product,\n                            __source: {\n                                fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            },\n                            __self: _this\n                        })\n                    }, product.id);\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/imagino/projects/ecommerce/client/src/pages/index.js\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Aucun produit disponible.\"\n                    })\n                })\n            })\n        ]\n    }));\n};\n_s(Home, \"lHwBCCySTj0bBKq4AEnKNGDtvig=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNHO0FBQ1g7QUFDZTtBQUNQO0FBQ1Q7QUFDZDtBQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLFFBQVEsQ0FBQ1UsSUFBSSxHQUFHLENBQUM7OztJQUM5QixHQUFLLENBQUdDLElBQUksR0FBS1IsaURBQVUsQ0FBQ00sd0RBQU8sRUFBM0JFLElBQUk7SUFDWixHQUFLLENBQUNDLE1BQU0sR0FBR0wsc0RBQVM7SUFDeEIsR0FBSyxDQUFxQ0ssTUFBWSxHQUFaQSxNQUFNLENBQUNDLEtBQUssRUFBOUNDLFVBQVUsR0FBd0JGLE1BQVksQ0FBOUNFLFVBQVUsRUFBRUMsSUFBSSxHQUFrQkgsTUFBWSxDQUFsQ0csSUFBSSxFQUFFQyxXQUFXLEdBQUtKLE1BQVksQ0FBNUJJLFdBQVc7SUFDckMsR0FBSyxDQUEyQlgsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFwQ1ksUUFBUSxHQUFpQlosR0FBWSxLQUEzQmEsV0FBVyxHQUFJYixHQUFZO0lBQzVDLEdBQUssQ0FBeUNBLElBQWtCLEdBQWxCQSwrQ0FBUSxDQUFDWSxRQUFRLEdBQXhERSxlQUFlLEdBQXdCZCxJQUFrQixLQUF4Q2Usa0JBQWtCLEdBQUlmLElBQWtCO0lBRWhFRCxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEdBQUssQ0FBQ2lCLE9BQU8sd0tBQUcsUUFBUSxXQUFJLENBQUM7Z0JBRW5CQyxHQUFHOzs7Ozs7K0JBQVNkLGlEQUFTLENBQUMsQ0FBcUMsc0NBQUUsQ0FBQzs0QkFDbEVnQixNQUFNLEVBQUUsQ0FBQztnQ0FDUFYsVUFBVSxFQUFWQSxVQUFVO2dDQUNWVyxHQUFHLEVBQUVWLElBQUk7Z0NBQ1RXLEdBQUcsRUFBRVYsV0FBVztnQ0FDaEJXLE1BQU0sRUFBRWhCLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVksR0FBWkEsSUFBSSxDQUFKQSxDQUFZLEdBQVpBLElBQUksQ0FBRWdCLE1BQU07NEJBQ3RCLENBQUM7d0JBQ0gsQ0FBQzs7d0JBUEtMLEdBQUc7d0JBUVRKLFdBQVcsQ0FBQ0ksR0FBRyxDQUFDTSxJQUFJO3dCQUNwQlIsa0JBQWtCLENBQUNFLEdBQUcsQ0FBQ00sSUFBSTs7Ozs7O3dCQUUzQkMsT0FBTyxDQUFDQyxHQUFHOzs7Ozs7Ozs7OztRQUVmLENBQUM7UUFDRFQsT0FBTztJQUNULENBQUMsRUFBRSxDQUFDVDtRQUFBQSxNQUFNLENBQUNDLEtBQUs7SUFBQSxDQUFDO0lBRWpCLEdBQUssQ0FBQ2tCLFlBQVksR0FBRyxRQUFRLENBQVBDLEdBQUcsRUFBSyxDQUFDO1FBQzdCWixrQkFBa0IsQ0FDaEJILFFBQVEsQ0FBQ2dCLE1BQU0sQ0FBQyxRQUFRLENBQVBDLEVBQUUsRUFBSyxDQUFDO1lBQ3ZCLEdBQUssQ0FBQ0MsQ0FBQyxHQUFHRCxFQUFFLENBQUNFLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNOLEdBQUcsQ0FBQ0ssV0FBVztZQUN6RCxNQUFNLENBQ0pILEVBQUUsQ0FBQ0UsS0FBSyxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ04sR0FBRyxDQUFDSyxXQUFXLE9BQy9DSCxFQUFFLENBQUNLLElBQUksQ0FBQ0YsV0FBVyxHQUFHQyxRQUFRLENBQUNOLEdBQUcsQ0FBQ0ssV0FBVztRQUVsRCxDQUFDO0lBRUwsQ0FBQztJQUVELE1BQU0sdUVBQ0hHLENBQUc7Ozs7Ozs7O2lGQUNEeEMsa0VBQUs7Z0JBQ0pvQyxLQUFLLEVBQ0h0QixVQUFVLEtBQUssQ0FBUSxVQUNuQixDQUFhLGVBQ2JBLFVBQVUsS0FBSyxDQUFPLFNBQ3RCLENBQVcsYUFDWEEsVUFBVSxLQUFLLENBQWEsZUFDNUIsQ0FBYSxlQUNiQyxJQUFJLEdBQ0osQ0FBWSxpQkFDWixDQUFhOzs7Ozs7OztZQUdwQkksZUFBZSxDQUFDc0IsTUFBTSxHQUFHLENBQUMseUVBQ3hCRCxDQUFHO2dCQUFDRSxTQUFTLEVBQUV4Qyx1RUFBa0I7Ozs7Ozs7K0ZBQy9CSSxrRUFBSztvQkFDSnNDLElBQUksRUFBQyxDQUFNO29CQUNYQyxJQUFJLEVBQUMsQ0FBUTtvQkFDYkMsS0FBSyxFQUFDLENBQVc7b0JBQ2pCQyxXQUFXLEVBQUMsQ0FBVztvQkFDdkJDLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUM7d0JBQUtsQixNQUFNLENBQU5BLFlBQVksQ0FBQ2tCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7O2lGQUlqRFgsQ0FBRztnQkFBQ0UsU0FBUyxFQUFFeEMsMEVBQXFCOzs7Ozs7OzBCQUNsQ2lCLGVBQWUsQ0FBQ3NCLE1BQU0sR0FBRyxDQUFDLEdBQ3pCdEIsZUFBZSxhQUFmQSxlQUFlLEtBQWZBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLGVBQWUsQ0FBRWtDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU87a0NBQzNCLE1BQU0sd0RBQUxkLENBQUc7Ozs7Ozs7dUdBQ0R2QyxtRUFBTzs0QkFBQ3FELE9BQU8sRUFBRUEsT0FBTzs7Ozs7Ozs7dUJBRGpCQSxPQUFPLENBQUNDLEVBQUU7MEZBS3JCZixDQUFHO29CQUFDRSxTQUFTLEVBQUMsQ0FBYTs7Ozs7OzttR0FDekJjLENBQUM7Ozs7Ozs7a0NBQUMsQ0FBeUI7Ozs7OztBQU14QyxDQUFDO0dBaEZ1QjlDLElBQUk7O1FBRVhILGtEQUFTOzs7S0FGRkcsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvdGl0bGUvVGl0bGVcIjtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2R1Y3QvUHJvZHVjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL2lucHV0L0lucHV0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L0NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBjYXRlZ29yaWVzLCBuZXdzLCBzdWdnZXN0aW9ucyB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZpbHRyZWRQcm9kdWN0cywgc2V0RmlsdHJlZFByb2R1Y3RzXSA9IHVzZVN0YXRlKHByb2R1Y3RzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFByb2QgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL3Byb2R1Y3RzL1wiLCB7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzLFxuICAgICAgICAgICAgbmV3OiBuZXdzLFxuICAgICAgICAgICAgc3VnOiBzdWdnZXN0aW9ucyxcbiAgICAgICAgICAgIGdlbmRlcjogdXNlcj8uZ2VuZGVyLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRQcm9kdWN0cyhyZXMuZGF0YSk7XG4gICAgICAgIHNldEZpbHRyZWRQcm9kdWN0cyhyZXMuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGdldFByb2QoKTtcbiAgfSwgW3JvdXRlci5xdWVyeV0pO1xuXG4gIGNvbnN0IGhhbmRsZUZpbHRlciA9ICh2YWwpID0+IHtcbiAgICBzZXRGaWx0cmVkUHJvZHVjdHMoXG4gICAgICBwcm9kdWN0cy5maWx0ZXIoKGVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBlbC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBlbC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbC50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIGVsLmRlc2MudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWwudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VGl0bGVcbiAgICAgICAgdGl0bGU9e1xuICAgICAgICAgIGNhdGVnb3JpZXMgPT09IFwiY2xvdGhzXCJcbiAgICAgICAgICAgID8gXCJIYWJpbGxlbWVudFwiXG4gICAgICAgICAgICA6IGNhdGVnb3JpZXMgPT09IFwic2hvZXNcIlxuICAgICAgICAgICAgPyBcIkJhc2tldHRlc1wiXG4gICAgICAgICAgICA6IGNhdGVnb3JpZXMgPT09IFwiYWNjZXNzb3JpZXNcIlxuICAgICAgICAgICAgPyBcImFjY2Vzc29pcmVzXCJcbiAgICAgICAgICAgIDogbmV3c1xuICAgICAgICAgICAgPyBcIk5vdXZlYXV0w6lzXCJcbiAgICAgICAgICAgIDogXCJTdWdnZXN0aW9uc1wiXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgICB7ZmlsdHJlZFByb2R1Y3RzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaF9fYmFyfT5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJGaWx0ZXJcIlxuICAgICAgICAgICAgbGFiZWw9XCJSZWNoZXJjaGVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWx0ZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9fY2FyZHN9PlxuICAgICAgICB7ZmlsdHJlZFByb2R1Y3RzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgZmlsdHJlZFByb2R1Y3RzPy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgPFByb2R1Y3QgcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPHA+QXVjdW4gcHJvZHVpdCBkaXNwb25pYmxlLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlRpdGxlIiwiUHJvZHVjdCIsInN0eWxlcyIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIklucHV0IiwidXNlUm91dGVyIiwiYXhpb3MiLCJDb250ZXh0IiwiSG9tZSIsInVzZXIiLCJyb3V0ZXIiLCJxdWVyeSIsImNhdGVnb3JpZXMiLCJuZXdzIiwic3VnZ2VzdGlvbnMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZmlsdHJlZFByb2R1Y3RzIiwic2V0RmlsdHJlZFByb2R1Y3RzIiwiZ2V0UHJvZCIsInJlcyIsImdldCIsInBhcmFtcyIsIm5ldyIsInN1ZyIsImdlbmRlciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRmlsdGVyIiwidmFsIiwiZmlsdGVyIiwiZWwiLCJhIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGVzYyIsImRpdiIsImxlbmd0aCIsImNsYXNzTmFtZSIsInNlYXJjaF9fYmFyIiwidHlwZSIsIm5hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwcm9kdWN0X19jYXJkcyIsIm1hcCIsInByb2R1Y3QiLCJpZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

});