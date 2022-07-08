"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  background: "#ff37a6",
  border: "#ffcae9",
  letterSpacing: "0.1em",
  fontWeight: "bold",
  padding: "1em",
  borderRadius: '50%'
};

var Button = function Button(_ref) {
  var disabled = _ref.disabled,
      label = _ref.label,
      color = _ref.color,
      onClick = _ref.onClick;

  var customStyle = _objectSpread(_objectSpread({}, styles), {}, {
    color: color
  });

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    disabled: disabled ? "true" : "",
    onClick: onClick,
    style: customStyle,
    children: label
  });
};

Button.propTypes = {
  disabled: _propTypes.default.bool,
  label: _propTypes.default.string,
  onClick: _propTypes.default.func,
  color: _propTypes.default.string
};
Button.defaultProps = {
  disabled: false,
  color: '#ff37a6'
};
var _default = Button;
exports.default = _default;