(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./src/components/shared/openNotificationWithIcon.js":
/*!***********************************************************!*\
  !*** ./src/components/shared/openNotificationWithIcon.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = openNotificationWithIcon;\n\nvar _antd = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\nfunction openNotificationWithIcon(type, key, message, description) {\n  _antd.notification[type]({\n    key: key,\n    message: message,\n    description: description,\n    placement: 'bottomRight'\n  });\n}\n\n//# sourceURL=webpack:///./src/components/shared/openNotificationWithIcon.js?");

/***/ }),

/***/ "./src/pages/register/index.js":
/*!*************************************!*\
  !*** ./src/pages/register/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.Register = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _antd = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n__webpack_require__(/*! ./style.scss */ \"./src/pages/register/style.scss\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\nvar _reactApollo = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/react-apollo.esm.js\");\n\nvar _graphqlTag = _interopRequireDefault(__webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\"));\n\nvar _openNotificationWithIcon = _interopRequireDefault(__webpack_require__(/*! ../../components/shared/openNotificationWithIcon */ \"./src/components/shared/openNotificationWithIcon.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n\\tmutation($userInput: UserInput!) {\\n\\t\\tregister(userInput: $userInput)\\n\\t}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Title = _antd.Typography.Title;\n\nvar Register =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Register, _Component);\n\n  function Register() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Register);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Register)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      email: 'chin@gmail.com',\n      password: 'd3f4ultP4ssword!',\n      username: 'trinhchin',\n      loading: false,\n      errors: []\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSubmit\", function (e) {\n      e.preventDefault();\n\n      _this.setState({\n        loading: true,\n        spin: true\n      });\n\n      _this.props.form.validateFields(function (err, values) {\n        if (!err) {// console.log('Received values of form: ', values)\n        }\n\n        var email = values.email,\n            password = values.password,\n            username = values.username;\n\n        _this.props.client.mutate({\n          mutation: USER_REGISTER,\n          variables: {\n            userInput: {\n              email: email,\n              password: password,\n              username: username\n            }\n          }\n        }).then(function (res) {\n          // console.log(res.data.register)\n          if (res.data.register) {\n            _this.setState({\n              email: '',\n              password: '',\n              username: '',\n              loading: false,\n              spin: false\n            });\n\n            (0, _openNotificationWithIcon.default)('success', 'register', 'Registration Successful.', 'We welcome a new MEMBER.', 'bottomRight');\n          }\n        }).catch(function (err) {\n          // console.log(err)\n          var errors = err.graphQLErrors.map(function (error) {\n            return error.message;\n          });\n\n          _this.setState({\n            loading: false,\n            spin: false\n          });\n\n          (0, _openNotificationWithIcon.default)('error', 'register', 'Registration Failed.', errors[0]);\n        });\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(Register, [{\n    key: \"render\",\n    value: function render() {\n      var getFieldDecorator = this.props.form.getFieldDecorator;\n      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_antd.Row, {\n        id: \"layout-login\"\n      }, _react.default.createElement(_antd.Col, {\n        xs: {\n          span: 24,\n          offset: 0\n        },\n        sm: {\n          span: 16,\n          offset: 8\n        },\n        md: {\n          span: 14,\n          offset: 10\n        },\n        lg: {\n          span: 12,\n          offset: 12\n        },\n        xl: {\n          span: 7,\n          offset: 17\n        }\n      }, _react.default.createElement(\"div\", {\n        id: \"components-form-demo-normal-login\"\n      }, _react.default.createElement(_antd.Form, {\n        onSubmit: this.handleSubmit,\n        className: \"login-form\"\n      }, _react.default.createElement(\"div\", {\n        className: \"login-form-header\"\n      }, _react.default.createElement(Title, {\n        level: 1\n      }, \"Chnirt\"), _react.default.createElement(Title, {\n        level: 4\n      }, \"Sign up to watch Ant Design template.\")), _react.default.createElement(_antd.Form.Item, null, getFieldDecorator('username', {\n        valuePropName: 'defaultValue',\n        initialValue: this.state.username,\n        rules: [{\n          required: true,\n          message: 'Please input your username!'\n        }]\n      })(_react.default.createElement(_antd.Input, {\n        prefix: _react.default.createElement(_antd.Icon, {\n          type: \"user\",\n          style: {\n            color: 'rgba(0,0,0,.25)'\n          }\n        }),\n        placeholder: \"Username\"\n      }))), _react.default.createElement(_antd.Form.Item, null, getFieldDecorator('email', {\n        valuePropName: 'defaultValue',\n        initialValue: this.state.email,\n        rules: [{\n          type: 'email',\n          message: 'The input is not valid E-mail!'\n        }, {\n          required: true,\n          message: 'Please input your E-mail!'\n        }]\n      })(_react.default.createElement(_antd.Input, {\n        prefix: _react.default.createElement(_antd.Icon, {\n          type: \"mail\",\n          style: {\n            color: 'rgba(0,0,0,.25)'\n          }\n        }),\n        placeholder: \"Your@email.com\"\n      }))), _react.default.createElement(_antd.Form.Item, null, getFieldDecorator('password', {\n        valuePropName: 'defaultValue',\n        initialValue: this.state.password,\n        rules: [{\n          required: true,\n          message: 'Please input your Password!'\n        }]\n      })(_react.default.createElement(_antd.Input, {\n        prefix: _react.default.createElement(_antd.Icon, {\n          type: \"lock\",\n          style: {\n            color: 'rgba(0,0,0,.25)'\n          }\n        }),\n        type: \"password\",\n        placeholder: \"Password\"\n      }))), _react.default.createElement(_antd.Form.Item, null, _react.default.createElement(_antd.Button, {\n        type: \"primary\",\n        htmlType: \"submit\",\n        className: \"login-form-button\",\n        loading: this.state.loading,\n        disabled: this.state.loading\n      }, !this.state.loading ? _react.default.createElement(_antd.Icon, {\n        type: \"user-add\"\n      }) : null, \"Register\"), _react.default.createElement(_antd.Divider, null, \"OR\"), \"Already have an account?\", _react.default.createElement(_reactRouterDom.Link, {\n        to: \"/login\"\n      }, \" Login.\")))))));\n    }\n  }]);\n\n  return Register;\n}(_react.Component);\n\nexports.Register = Register;\nvar USER_REGISTER = (0, _graphqlTag.default)(_templateObject());\n\nvar _default = (0, _reactApollo.withApollo)(_antd.Form.create({\n  name: 'register'\n})(Register));\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/pages/register/index.js?");

/***/ }),

/***/ "./src/pages/register/style.scss":
/*!***************************************!*\
  !*** ./src/pages/register/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:7)\\nYou may need an appropriate loader to handle this file type.\\n> $bg-img: url('../../assets/images/bg-login.jpeg');\\n| \\n| #components-form-demo-normal-login {\");\n\n//# sourceURL=webpack:///./src/pages/register/style.scss?");

/***/ })

}]);