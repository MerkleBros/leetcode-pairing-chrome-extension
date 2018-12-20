(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["room"],{

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

},[["RNij","runtime","vendors~app~lobby~room"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm9vbS9yb29tU3R5bGVzLmNzcz9mYTJkIiwid2VicGFjazovLy8uL3NyYy9yb29tL3Jvb21TdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9yb29tL3Jvb20uanMiXSwibmFtZXMiOlsiU3RhdHVzQmFyIiwicHJvcHMiLCJwYXJ0bmVyIiwic3RhdGUiLCJwYXJ0bmVyQ29ubmVjdGVkIiwicGFydG5lckFjdGlvbiIsImlkIiwiYXZhdGFyVXJsIiwibmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUm9vbSIsImdvVG9Mb2JieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGNBQWMsbUJBQU8sQ0FBQyx5RUFBOEQ7O0FBRXBGLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyw4REFBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDbkJmLDJCQUEyQixtQkFBTyxDQUFDLCtEQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyxRQUFRLDRCQUE0QixjQUFjLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGOUU7QUFDQTtBQUNBOztJQUlNQSxTOzs7OztBQUNKLHFCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLG1GQUFNQSxLQUFOO0FBQ0EsVUFBS0MsT0FBTCxHQUFhRCxLQUFLLENBQUNDLE9BQW5CO0FBQ0EsVUFBS0MsS0FBTCxHQUFXO0FBQUNDLHNCQUFnQixFQUFDLEtBQWxCO0FBQXlCQyxtQkFBYSxFQUFDO0FBQXZDLEtBQVg7QUFIZ0I7QUFJakI7Ozs7NkJBQ087QUFDTCxhQUNHO0FBQUssVUFBRSxFQUFFLEtBQUtKLEtBQUwsQ0FBV0s7QUFBcEIsU0FDSTtBQUFLLFdBQUcsRUFBRSxLQUFLSixPQUFMLENBQWFLO0FBQXZCLFFBREosNEJBRTJCLEtBQUtMLE9BQUwsQ0FBYU0sSUFGeEMsT0FFOEMsZ0ZBRjlDLHdCQUd1QixLQUFLTCxLQUFMLENBQVdDLGdCQUFYLEdBQThCLFdBQTlCLEdBQTRDLGNBSG5FLE9BR21GLGdGQUhuRixpQkFJZ0IsS0FBS0QsS0FBTCxDQUFXRSxhQUozQixDQURIO0FBU0Y7Ozs7RUFoQnFCSSw0Q0FBSyxDQUFDQyxTOztBQW1CdkIsSUFBTUMsSUFBYjtBQUFBO0FBQUE7QUFBQTs7QUFDRSxnQkFBWVYsS0FBWixFQUFrQjtBQUFBOztBQUFBLDZFQUNWQSxLQURVO0FBRWpCOztBQUhIO0FBQUE7QUFBQSw2QkFJVTtBQUNOLGFBQVEsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ04sMkRBQUMsU0FBRDtBQUFZLFVBQUUsRUFBQyxLQUFmO0FBQXFCLGVBQU8sRUFBRSxLQUFLQSxLQUFMLENBQVdDO0FBQXpDLFFBRE0sRUFFTjtBQUFRLGVBQU8sRUFBRSxLQUFLRCxLQUFMLENBQVdXO0FBQTVCLHlCQUZNLENBQVI7QUFJRDtBQVRIOztBQUFBO0FBQUEsRUFBMEJILDRDQUFLLENBQUNDLFNBQWhDLEUiLCJmaWxlIjoicm9vbS5jMDZmNGUxYzJiOTg1ZDAxODAxNC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yb29tU3R5bGVzLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yb29tU3R5bGVzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcm9vbVN0eWxlcy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNiYXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGNvbG9yOnJlZDsgIFxcbn1cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJy4vcm9vbVN0eWxlcy5jc3MnO1xuXG5cblxuY2xhc3MgU3RhdHVzQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5wYXJ0bmVyPXByb3BzLnBhcnRuZXJcbiAgICB0aGlzLnN0YXRlPXtwYXJ0bmVyQ29ubmVjdGVkOmZhbHNlLCBwYXJ0bmVyQWN0aW9uOlwiaWRsZVwiIH1cbiAgfVxuICByZW5kZXIoKXtcbiAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wYXJ0bmVyLmF2YXRhclVybH0gPjwvaW1nPlxuICAgICAgICAgICAgWW91IGFyZSBwYWlyaW5nIHdpdGg6IHt0aGlzLnBhcnRuZXIubmFtZX0gPHNwYW4+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgUGFydG5lciBTdGF0dXM6ICAge3RoaXMuc3RhdGUucGFydG5lckNvbm5lY3RlZCA/IFwiY29ubmVjdGVkXCIgOiBcImRpc2Nvbm5lY3RlZFwifSA8c3Bhbj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICBQYXJ0bmVyIGlzOnt0aGlzLnN0YXRlLnBhcnRuZXJBY3Rpb259XG5cblxuICAgICAgICA8L2Rpdj4pXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvb20gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuICg8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8U3RhdHVzQmFyICBpZD1cImJhclwiIHBhcnRuZXI9e3RoaXMucHJvcHMucGFydG5lcn0gLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5nb1RvTG9iYnl9PmJhY2sgdG8gbG9iYnk8L2J1dHRvbj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+KVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==