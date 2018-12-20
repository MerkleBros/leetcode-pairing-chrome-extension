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
      }));
    }
  }]);

  return Room;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ })

},[["RNij","runtime","vendors~app~lobby~room"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm9vbS9yb29tU3R5bGVzLmNzcz9mYTJkIiwid2VicGFjazovLy8uL3NyYy9yb29tL3Jvb21TdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9yb29tL3Jvb20uanMiXSwibmFtZXMiOlsiU3RhdHVzQmFyIiwicHJvcHMiLCJwYXJ0bmVyIiwic3RhdGUiLCJwYXJ0bmVyQ29ubmVjdGVkIiwicGFydG5lckFjdGlvbiIsImlkIiwiYXZhdGFyVXJsIiwibmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUm9vbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGNBQWMsbUJBQU8sQ0FBQyx5RUFBOEQ7O0FBRXBGLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyw4REFBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDbkJmLDJCQUEyQixtQkFBTyxDQUFDLCtEQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyxRQUFRLDRCQUE0QixjQUFjLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGOUU7QUFDQTtBQUNBOztJQUlNQSxTOzs7OztBQUNKLHFCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLG1GQUFNQSxLQUFOO0FBQ0EsVUFBS0MsT0FBTCxHQUFhRCxLQUFLLENBQUNDLE9BQW5CO0FBQ0EsVUFBS0MsS0FBTCxHQUFXO0FBQUNDLHNCQUFnQixFQUFDLEtBQWxCO0FBQXlCQyxtQkFBYSxFQUFDO0FBQXZDLEtBQVg7QUFIZ0I7QUFJakI7Ozs7NkJBQ087QUFDTCxhQUNHO0FBQUssVUFBRSxFQUFFLEtBQUtKLEtBQUwsQ0FBV0s7QUFBcEIsU0FDSTtBQUFLLFdBQUcsRUFBRSxLQUFLSixPQUFMLENBQWFLO0FBQXZCLFFBREosNEJBRTJCLEtBQUtMLE9BQUwsQ0FBYU0sSUFGeEMsT0FFOEMsZ0ZBRjlDLHdCQUd1QixLQUFLTCxLQUFMLENBQVdDLGdCQUFYLEdBQThCLFdBQTlCLEdBQTRDLGNBSG5FLE9BR21GLGdGQUhuRixpQkFJZ0IsS0FBS0QsS0FBTCxDQUFXRSxhQUozQixDQURIO0FBT0Y7Ozs7RUFkcUJJLDRDQUFLLENBQUNDLFM7O0FBaUJ2QixJQUFNQyxJQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNFLGdCQUFZVixLQUFaLEVBQWtCO0FBQUE7O0FBQUEsNkVBQ1ZBLEtBRFU7QUFFakI7O0FBSEg7QUFBQTtBQUFBLDZCQUlVO0FBQ04sYUFBUSwyREFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDTiwyREFBQyxTQUFEO0FBQVksVUFBRSxFQUFDLEtBQWY7QUFBcUIsZUFBTyxFQUFFLEtBQUtBLEtBQUwsQ0FBV0M7QUFBekMsUUFETSxDQUFSO0FBR0Q7QUFSSDs7QUFBQTtBQUFBLEVBQTBCTyw0Q0FBSyxDQUFDQyxTQUFoQyxFIiwiZmlsZSI6InJvb20uMzkzMzIyMDdhOTFmMGY1MDAzMzUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcm9vbVN0eWxlcy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcm9vbVN0eWxlcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jvb21TdHlsZXMuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjYmFye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBjb2xvcjpyZWQ7ICBcXG59XCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICcuL3Jvb21TdHlsZXMuY3NzJztcblxuXG5cbmNsYXNzIFN0YXR1c0JhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMucGFydG5lcj1wcm9wcy5wYXJ0bmVyXG4gICAgdGhpcy5zdGF0ZT17cGFydG5lckNvbm5lY3RlZDpmYWxzZSwgcGFydG5lckFjdGlvbjpcImlkbGVcIiB9XG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9e3RoaXMucHJvcHMuaWR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucGFydG5lci5hdmF0YXJVcmx9ID48L2ltZz5cbiAgICAgICAgICAgIFlvdSBhcmUgcGFpcmluZyB3aXRoOiB7dGhpcy5wYXJ0bmVyLm5hbWV9IDxzcGFuPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgIFBhcnRuZXIgU3RhdHVzOiAgIHt0aGlzLnN0YXRlLnBhcnRuZXJDb25uZWN0ZWQgPyBcImNvbm5lY3RlZFwiIDogXCJkaXNjb25uZWN0ZWRcIn0gPHNwYW4+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgUGFydG5lciBpczp7dGhpcy5zdGF0ZS5wYXJ0bmVyQWN0aW9ufVxuICAgICAgICA8L2Rpdj4pXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvb20gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuICg8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8U3RhdHVzQmFyICBpZD1cImJhclwiIHBhcnRuZXI9e3RoaXMucHJvcHMucGFydG5lcn0gLz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+KVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==