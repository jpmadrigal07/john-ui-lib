"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
require("../globals.css");
var React = tslib_1.__importStar(require("react"));
var tailwind_merge_1 = require("tailwind-merge");
var getVariant = function (variant) {
    switch (variant) {
        case "primary":
            return "bg-blue-500 hover:bg-blue-700 text-white";
        case "secondary":
            return "bg-gray-500 hover:bg-gray-700 text-white";
        case "danger":
            return "bg-red-500 hover:bg-red-700 text-white";
        case "success":
            return "bg-green-500 hover:bg-green-700 text-white";
        case "warning":
            return "bg-orange-500 hover:bg-orange-700 text-black";
        case "info":
            return "bg-sky-500 hover:bg-sky-700 text-black";
        case "light":
            return "bg-white hover:bg-gray-200 text-black";
        case "dark":
            return "bg-black hover:bg-gray-900 text-white";
        default:
            return undefined;
    }
};
var getSize = function (size) {
    switch (size) {
        case "xl":
            return "text-xl py-4 px-6";
        case "lg":
            return "text-lg py-3 px-4";
        case "md":
            return "text-base py-2 px-4";
        case "sm":
            return "text-sm py-1 px-2";
        case "xs":
            return "text-xs py-1 px-1";
        default:
            return undefined;
    }
};
var Button = React.forwardRef(function (props, ref) {
    var _a = props.variant, variant = _a === void 0 ? "primary" : _a, _b = props.dim, dim = _b === void 0 ? "md" : _b, className = props.className, children = props.children, rest = tslib_1.__rest(props, ["variant", "dim", "className", "children"]);
    var merged = (0, tailwind_merge_1.twMerge)("rounded shadow disabled:opacity-90 disabled:cursor-not-allowed", getVariant(variant), getSize(dim), className);
    return ((0, jsx_runtime_1.jsx)("button", tslib_1.__assign({ ref: ref, className: merged }, rest, { children: children })));
});
Button.displayName = "Button";
exports.default = Button;
//# sourceMappingURL=Button.js.map