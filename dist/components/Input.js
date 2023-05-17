import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import '../globals.css';
import * as React from "react";
import clsx from 'clsx';
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
var Input = React.forwardRef(function (props, ref) {
    var _a = props.dim, dim = _a === void 0 ? "md" : _a, className = props.className, rest = __rest(props, ["dim", "className"]);
    var merged = clsx(defaultStyle, getSize(dim), className);
    return (_jsx("input", __assign({ ref: ref, className: merged }, rest)));
});
Input.displayName = "Input";
export default Input;
//# sourceMappingURL=Input.js.map