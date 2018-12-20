(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "3k3j":
/*!*********************************!*\
  !*** ./src/room/roomStyles.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./roomStyles.css */ "ITk7");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "C/9p":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/lobby/lobbyStyles.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "ERIh":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _room_roomStyles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room/roomStyles.css */ "3k3j");
/* harmony import */ var _room_roomStyles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_room_roomStyles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lobby_lobbyStyles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lobby/lobbyStyles.css */ "Hvi6");
/* harmony import */ var _lobby_lobbyStyles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lobby_lobbyStyles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _room_room_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room/room.js */ "RNij");
/* harmony import */ var _lobby_lobby_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lobby/lobby.js */ "GiGd");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var data = {
  problem: {
    title: "Easy Problem",
    difficulty: "easy",
    number: 666,
    description: 'Determine if NP=P'
  },
  partner: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64'
  }
};

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      currentPage: "room"
    };
    return _this;
  }

  _createClass(App, [{
    key: "changePage",
    value: function changePage(page) {
      this.setState({
        currentPage: page
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var currentPage = this.state.currentPage;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.changePage("room");
        }
      }, "room"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.changePage("lobby");
        }
      }, "lobby"), currentPage === 'room' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_room_room_js__WEBPACK_IMPORTED_MODULE_4__["Room"], {
        partner: data
      }) : '', currentPage === 'lobby' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lobby_lobby_js__WEBPACK_IMPORTED_MODULE_5__["Lobby"], null) : '');
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, {
  datas: []
}), document.getElementById('root'));

/***/ }),

/***/ "GiGd":
/*!****************************!*\
  !*** ./src/lobby/lobby.js ***!
  \****************************/
/*! exports provided: Lobby */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lobby", function() { return Lobby; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lobbyStyles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lobbyStyles.css */ "Hvi6");
/* harmony import */ var _lobbyStyles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lobbyStyles_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Lobby =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Lobby, _React$Component);

  function Lobby(props) {
    _classCallCheck(this, Lobby);

    return _possibleConstructorReturn(this, _getPrototypeOf(Lobby).call(this, props));
  }

  _createClass(Lobby, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id
      }, "Lobby");
    }
  }]);

  return Lobby;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "Hvi6":
/*!***********************************!*\
  !*** ./src/lobby/lobbyStyles.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./lobbyStyles.css */ "C/9p");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "ITk7":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/room/roomStyles.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, "#bar{\n  background-color: green;\n  color:red;  \n}", ""]);



/***/ }),

/***/ "RNij":
/*!**************************!*\
  !*** ./src/room/room.js ***!
  \**************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _roomStyles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roomStyles.css */ "3k3j");
/* harmony import */ var _roomStyles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_roomStyles_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var StatusBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StatusBar, _React$Component);

  function StatusBar(props) {
    var _this;

    _classCallCheck(this, StatusBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StatusBar).call(this, props));
    _this.partner = props.partner;
    _this.state = {
      partnerConnected: false,
      partnerAction: "idle"
    };
    return _this;
  }

  _createClass(StatusBar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.partner.avatarUrl
      }), "You are pairing with: ", this.partner.name, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xA0"), "Partner Status:   ", this.state.partnerConnected ? "connected" : "disconnected", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xA0"), "Partner is:", this.state.partnerAction);
    }
  }]);

  return StatusBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Room =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Room, _React$Component2);

  function Room(props) {
    _classCallCheck(this, Room);

    return _possibleConstructorReturn(this, _getPrototypeOf(Room).call(this, props));
  }

  _createClass(Room, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatusBar, {
        id: "bar",
        partner: this.props.partner
      }));
    }
  }]);

  return Room;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ })

},[["ERIh","runtime","vendors~app~lobby~room"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm9vbS9yb29tU3R5bGVzLmNzcz9mYTJkIiwid2VicGFjazovLy8uL3NyYy9sb2JieS9sb2JieVN0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9iYnkvbG9iYnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYmJ5L2xvYmJ5U3R5bGVzLmNzcz84MmE3Iiwid2VicGFjazovLy8uL3NyYy9yb29tL3Jvb21TdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9yb29tL3Jvb20uanMiXSwibmFtZXMiOlsiZGF0YSIsInByb2JsZW0iLCJ0aXRsZSIsImRpZmZpY3VsdHkiLCJudW1iZXIiLCJkZXNjcmlwdGlvbiIsInBhcnRuZXIiLCJuYW1lIiwiYXZhdGFyVXJsIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRQYWdlIiwicGFnZSIsInNldFN0YXRlIiwiaWQiLCJjaGFuZ2VQYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJMb2JieSIsIlN0YXR1c0JhciIsInBhcnRuZXJDb25uZWN0ZWQiLCJwYXJ0bmVyQWN0aW9uIiwiUm9vbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGNBQWMsbUJBQU8sQ0FBQyx5RUFBOEQ7O0FBRXBGLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyw4REFBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDbkJmLDJCQUEyQixtQkFBTyxDQUFDLCtEQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxJ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RjlDLHdCQUd1QixLQUFLSSxLQUFMLENBQVdjLGdCQUFYLEdBQThCLFdBQTlCLEdBQTRDLGNBSG5FLE9BR21GLGdGQUhuRixpQkFJZ0IsS0FBS2QsS0FBTCxDQUFXZSxhQUozQixDQURIO0FBT0Y7Ozs7RUFkcUJULDRDQUFLLENBQUNDLFM7O0FBaUJ2QixJQUFNUyxJQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNFLGdCQUFZakIsS0FBWixFQUFrQjtBQUFBOztBQUFBLDZFQUNWQSxLQURVO0FBRWpCOztBQUhIO0FBQUE7QUFBQSw2QkFJVTtBQUNOLGFBQVEsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ04sMkRBQUMsU0FBRDtBQUFZLFVBQUUsRUFBQyxLQUFmO0FBQXFCLGVBQU8sRUFBRSxLQUFLQSxLQUFMLENBQVdKO0FBQXpDLFFBRE0sQ0FBUjtBQUdEO0FBUkg7O0FBQUE7QUFBQSxFQUEwQlcsNENBQUssQ0FBQ0MsU0FBaEMsRSIsImZpbGUiOiJhcHAuMzkzMzIyMDdhOTFmMGY1MDAzMzUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcm9vbVN0eWxlcy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcm9vbVN0eWxlcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jvb21TdHlsZXMuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJy4vcm9vbS9yb29tU3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vbG9iYnkvbG9iYnlTdHlsZXMuY3NzJztcbmltcG9ydCB7IFJvb20gfSBmcm9tICcuL3Jvb20vcm9vbS5qcyc7XG5pbXBvcnQgeyBMb2JieSB9IGZyb20gJy4vbG9iYnkvbG9iYnkuanMnO1xuXG5cbmNvbnN0IGRhdGEgPSB7XG4gIHByb2JsZW06e3RpdGxlOlwiRWFzeSBQcm9ibGVtXCIsXG4gICAgICAgICAgIGRpZmZpY3VsdHk6XCJlYXN5XCIsXG4gICAgICAgICAgIG51bWJlcjogNjY2LFxuICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0RldGVybWluZSBpZiBOUD1QJ1xuICAgICAgICAgIH0sXG4gIHBhcnRuZXI6IHtcbiAgICBuYW1lOiAnSGVsbG8gS2l0dHknLFxuICAgIGF2YXRhclVybDogJ2h0dHBzOi8vcGxhY2VraXR0ZW4uY29tL2cvNjQvNjQnXG4gIH1cbn07XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGU9e2N1cnJlbnRQYWdlOlwicm9vbVwiIH1cbiAgfVxuXG5cbiAgY2hhbmdlUGFnZShwYWdlKXtcbiAgXHR0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZTpwYWdlIH0pXG4gIH1cblxuICByZW5kZXIoKXtcblx0Y29uc3Qge1xuXHRcdGN1cnJlbnRQYWdlXG5cdH0gPSB0aGlzLnN0YXRlXG5cdHJldHVybiAoXG5cdFx0PGRpdiBpZD17dGhpcy5wcm9wcy5pZH0+XG5cdFx0XHRcblx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4ge3RoaXMuY2hhbmdlUGFnZShcInJvb21cIil9fT5yb29tPC9idXR0b24+XG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHt0aGlzLmNoYW5nZVBhZ2UoXCJsb2JieVwiKX19PmxvYmJ5PC9idXR0b24+XG5cdFx0XHRcblx0XHRcdHsgY3VycmVudFBhZ2UgPT09ICdyb29tJ1xuXHRcdFx0ICA/IDxSb29tIHBhcnRuZXI9e2RhdGF9IC8+XG5cdFx0XHQgIDogJycgXG5cdFx0XHR9XG5cdFx0ICAgIHsgY3VycmVudFBhZ2UgPT09ICdsb2JieSdcblx0XHRcdCAgPyA8TG9iYnkgLz5cblx0XHRcdCAgOiAnJyBcblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0XHQpXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwIGRhdGFzPXtbXX0gLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICcuL2xvYmJ5U3R5bGVzLmNzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2JieSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIHJlbmRlcigpe1xuICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgICAgIExvYmJ5XG4gICAgICAgIDwvZGl2PilcbiAgfVxufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvYmJ5U3R5bGVzLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2JieVN0eWxlcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvYmJ5U3R5bGVzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2JhcntcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgY29sb3I6cmVkOyAgXFxufVwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAnLi9yb29tU3R5bGVzLmNzcyc7XG5cblxuXG5jbGFzcyBTdGF0dXNCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnBhcnRuZXI9cHJvcHMucGFydG5lclxuICAgIHRoaXMuc3RhdGU9e3BhcnRuZXJDb25uZWN0ZWQ6ZmFsc2UsIHBhcnRuZXJBY3Rpb246XCJpZGxlXCIgfVxuICB9XG4gIHJlbmRlcigpe1xuICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnBhcnRuZXIuYXZhdGFyVXJsfSA+PC9pbWc+XG4gICAgICAgICAgICBZb3UgYXJlIHBhaXJpbmcgd2l0aDoge3RoaXMucGFydG5lci5uYW1lfSA8c3Bhbj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICBQYXJ0bmVyIFN0YXR1czogICB7dGhpcy5zdGF0ZS5wYXJ0bmVyQ29ubmVjdGVkID8gXCJjb25uZWN0ZWRcIiA6IFwiZGlzY29ubmVjdGVkXCJ9IDxzcGFuPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgIFBhcnRuZXIgaXM6e3RoaXMuc3RhdGUucGFydG5lckFjdGlvbn1cbiAgICAgICAgPC9kaXY+KVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSb29tIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFN0YXR1c0JhciAgaWQ9XCJiYXJcIiBwYXJ0bmVyPXt0aGlzLnByb3BzLnBhcnRuZXJ9IC8+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PilcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=