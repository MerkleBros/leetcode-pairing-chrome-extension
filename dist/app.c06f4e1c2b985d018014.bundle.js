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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







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
      currentPage: "lobby"
    };
    _this.goToRoom = _this.goToRoom.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.goToLobby = _this.goToLobby.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(App, [{
    key: "goToRoom",
    value: function goToRoom() {
      this.setState({
        currentPage: "room"
      });
    }
  }, {
    key: "goToLobby",
    value: function goToLobby() {
      this.setState({
        currentPage: "lobby"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var page;
      if (this.state.currentPage == "room") page = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_room_room_js__WEBPACK_IMPORTED_MODULE_4__["Room"], {
        partner: data,
        goToLobby: this.goToLobby
      });
      if (this.state.currentPage == "lobby") page = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lobby_lobby_js__WEBPACK_IMPORTED_MODULE_5__["Lobby"], {
        goToRoom: this.goToRoom
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id
      }, "Leetcode Pairing", page);
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
      }, "Lobby", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.props.goToRoom
      }, "go to room"));
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
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.props.goToLobby
      }, "back to lobby"));
    }
  }]);

  return Room;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ })

},[["ERIh","runtime","vendors~app~lobby~room"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm9vbS9yb29tU3R5bGVzLmNzcz9mYTJkIiwid2VicGFjazovLy8uL3NyYy9sb2JieS9sb2JieVN0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9iYnkvbG9iYnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYmJ5L2xvYmJ5U3R5bGVzLmNzcz84MmE3Iiwid2VicGFjazovLy8uL3NyYy9yb29tL3Jvb21TdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9yb29tL3Jvb20uanMiXSwibmFtZXMiOlsiZGF0YSIsInByb2JsZW0iLCJ0aXRsZSIsImRpZmZpY3VsdHkiLCJudW1iZXIiLCJkZXNjcmlwdGlvbiIsInBhcnRuZXIiLCJuYW1lIiwiYXZhdGFyVXJsIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRQYWdlIiwiZ29Ub1Jvb20iLCJiaW5kIiwiZ29Ub0xvYmJ5Iiwic2V0U3RhdGUiLCJwYWdlIiwiaWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkxvYmJ5IiwiU3RhdHVzQmFyIiwicGFydG5lckNvbm5lY3RlZCIsInBhcnRuZXJBY3Rpb24iLCJSb29tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHlFQUE4RDs7QUFFcEYsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDhEQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNuQmYsMkJBQTJCLG1CQUFPLENBQUMsK0RBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBSWpCOzs7OzZCQUNPO0FBQ0wsYUFDRztBQUFLLFVBQUUsRUFBRSxLQUFLbEIsS0FBTCxDQUFXUTtBQUFwQixTQUNJO0FBQUssV0FBRyxFQUFFLEtBQUtaLE9BQUwsQ0FBYUU7QUFBdkIsUUFESiw0QkFFMkIsS0FBS0YsT0FBTCxDQUFhQyxJQUZ4QyxPQUU4QyxnRkFGOUMsd0JBR3VCLEtBQUtJLEtBQUwsQ0FBV2dCLGdCQUFYLEdBQThCLFdBQTlCLEdBQTRDLGNBSG5FLE9BR21GLGdGQUhuRixpQkFJZ0IsS0FBS2hCLEtBQUwsQ0FBV2lCLGFBSjNCLENBREg7QUFTRjs7OztFQWhCcUJULDRDQUFLLENBQUNDLFM7O0FBbUJ2QixJQUFNUyxJQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNFLGdCQUFZbkIsS0FBWixFQUFrQjtBQUFBOztBQUFBLDZFQUNWQSxLQURVO0FBRWpCOztBQUhIO0FBQUE7QUFBQSw2QkFJVTtBQUNOLGFBQVEsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ04sMkRBQUMsU0FBRDtBQUFZLFVBQUUsRUFBQyxLQUFmO0FBQXFCLGVBQU8sRUFBRSxLQUFLQSxLQUFMLENBQVdKO0FBQXpDLFFBRE0sRUFFTjtBQUFRLGVBQU8sRUFBRSxLQUFLSSxLQUFMLENBQVdLO0FBQTVCLHlCQUZNLENBQVI7QUFJRDtBQVRIOztBQUFBO0FBQUEsRUFBMEJJLDRDQUFLLENBQUNDLFNBQWhDLEUiLCJmaWxlIjoiYXBwLmMwNmY0ZTFjMmI5ODVkMDE4MDE0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jvb21TdHlsZXMuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jvb21TdHlsZXMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yb29tU3R5bGVzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICcuL3Jvb20vcm9vbVN0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL2xvYmJ5L2xvYmJ5U3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBSb29tIH0gZnJvbSAnLi9yb29tL3Jvb20uanMnO1xuaW1wb3J0IHsgTG9iYnkgfSBmcm9tICcuL2xvYmJ5L2xvYmJ5LmpzJztcblxuXG5jb25zdCBkYXRhID0ge1xuICBwcm9ibGVtOnt0aXRsZTpcIkVhc3kgUHJvYmxlbVwiLFxuICAgICAgICAgICBkaWZmaWN1bHR5OlwiZWFzeVwiLFxuICAgICAgICAgICBudW1iZXI6IDY2NixcbiAgICAgICAgICAgZGVzY3JpcHRpb246ICdEZXRlcm1pbmUgaWYgTlA9UCdcbiAgICAgICAgICB9LFxuICBwYXJ0bmVyOiB7XG4gICAgbmFtZTogJ0hlbGxvIEtpdHR5JyxcbiAgICBhdmF0YXJVcmw6ICdodHRwczovL3BsYWNla2l0dGVuLmNvbS9nLzY0LzY0J1xuICB9XG59O1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlPXtjdXJyZW50UGFnZTpcImxvYmJ5XCIgfVxuICAgIHRoaXMuZ29Ub1Jvb209dGhpcy5nb1RvUm9vbS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nb1RvTG9iYnk9dGhpcy5nb1RvTG9iYnkuYmluZCh0aGlzKVxuICB9XG5cblxuICBnb1RvUm9vbSgpe1xuICBcdHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQYWdlOlwicm9vbVwiIH0pXG4gIH1cbiAgZ29Ub0xvYmJ5KCl7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2U6XCJsb2JieVwiIH0pXG4gIH1cblxuICByZW5kZXIoKXtcblxuXHRsZXQgcGFnZVxuXHRpZiAodGhpcy5zdGF0ZS5jdXJyZW50UGFnZT09XCJyb29tXCIpIHBhZ2UgPSAgXG5cdFx0PFJvb20gcGFydG5lcj17ZGF0YX0gZ29Ub0xvYmJ5PXt0aGlzLmdvVG9Mb2JieX0gLz47XG5cdGlmICh0aGlzLnN0YXRlLmN1cnJlbnRQYWdlPT1cImxvYmJ5XCIpIHBhZ2UgPSAgXG5cdFx0PExvYmJ5IGdvVG9Sb29tPXt0aGlzLmdvVG9Sb29tfSAvPjtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgaWQ9e3RoaXMucHJvcHMuaWR9PlxuXHRcdFx0TGVldGNvZGUgUGFpcmluZ1xuXHRcdFx0e3BhZ2V9XG5cdFx0PC9kaXY+XG5cdClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgZGF0YXM9e1tdfSAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJy4vbG9iYnlTdHlsZXMuY3NzJztcblxuZXhwb3J0IGNsYXNzIExvYmJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuXG4gIHJlbmRlcigpe1xuICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgICAgIExvYmJ5XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuZ29Ub1Jvb219PmdvIHRvIHJvb208L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+KVxuICB9XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9iYnlTdHlsZXMuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvYmJ5U3R5bGVzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9iYnlTdHlsZXMuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjYmFye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBjb2xvcjpyZWQ7ICBcXG59XCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICcuL3Jvb21TdHlsZXMuY3NzJztcblxuXG5cbmNsYXNzIFN0YXR1c0JhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMucGFydG5lcj1wcm9wcy5wYXJ0bmVyXG4gICAgdGhpcy5zdGF0ZT17cGFydG5lckNvbm5lY3RlZDpmYWxzZSwgcGFydG5lckFjdGlvbjpcImlkbGVcIiB9XG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9e3RoaXMucHJvcHMuaWR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucGFydG5lci5hdmF0YXJVcmx9ID48L2ltZz5cbiAgICAgICAgICAgIFlvdSBhcmUgcGFpcmluZyB3aXRoOiB7dGhpcy5wYXJ0bmVyLm5hbWV9IDxzcGFuPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgIFBhcnRuZXIgU3RhdHVzOiAgIHt0aGlzLnN0YXRlLnBhcnRuZXJDb25uZWN0ZWQgPyBcImNvbm5lY3RlZFwiIDogXCJkaXNjb25uZWN0ZWRcIn0gPHNwYW4+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgUGFydG5lciBpczp7dGhpcy5zdGF0ZS5wYXJ0bmVyQWN0aW9ufVxuXG5cbiAgICAgICAgPC9kaXY+KVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSb29tIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFN0YXR1c0JhciAgaWQ9XCJiYXJcIiBwYXJ0bmVyPXt0aGlzLnByb3BzLnBhcnRuZXJ9IC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuZ29Ub0xvYmJ5fT5iYWNrIHRvIGxvYmJ5PC9idXR0b24+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PilcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=