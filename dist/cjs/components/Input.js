"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
require("../globals.css");
var React = tslib_1.__importStar(require("react"));
var tailwind_merge_1 = require("tailwind-merge");
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
var defaultStyle = "relative inline-flex w-full rounded leading-none transition-colors ease-in-out placeholder-gray-500 text-gray-700 bg-gray-50 border border-gray-300 hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-4 focus:ring-opacity-30 disabled:opacity-90 disabled:cursor-not-allowed";
exports.Input = React.forwardRef(function (props, ref) {
    var _a = props.dim, dim = _a === void 0 ? "md" : _a, className = props.className, rest = tslib_1.__rest(props, ["dim", "className"]);
    var merged = (0, tailwind_merge_1.twMerge)(defaultStyle, getSize(dim), className);
    return ((0, jsx_runtime_1.jsx)("input", tslib_1.__assign({ ref: ref, className: merged }, rest)));
});
exports.Input.displayName = "Input";
//# sourceMappingURL=Input.js.map