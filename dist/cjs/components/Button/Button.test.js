"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var _1 = tslib_1.__importDefault(require("./"));
describe('Button', function () {
    var onClickButton = jest.fn();
    test("Renders correctly", function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.default, tslib_1.__assign({ variant: "primary" }, { children: "Primary" })));
        var textElement = react_1.screen.getByText("Primary");
        expect(textElement).toBeInTheDocument();
    });
    test("Primary as a default is rendered", function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.default, { children: "Primary" }));
        var textElement = react_1.screen.getByText("Primary");
        expect(textElement).toHaveClass("bg-blue-500");
    });
    test("Secondary is rendered", function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.default, tslib_1.__assign({ variant: "secondary" }, { children: "Secondary" })));
        var textElement = react_1.screen.getByText("Secondary");
        expect(textElement).toHaveClass("bg-gray-500");
    });
    test("Medium size as a default is rendered", function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.default, tslib_1.__assign({ variant: "primary" }, { children: "Medium" })));
        var textElement = react_1.screen.getByText("Medium");
        expect(textElement).toHaveClass("text-base py-2 px-4");
    });
    test("Large size is rendered", function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.default, tslib_1.__assign({ variant: "primary", dim: "lg" }, { children: "Large" })));
        var textElement = react_1.screen.getByText("Large");
        expect(textElement).toHaveClass("text-lg py-3 px-4");
    });
    test("Is clicked", function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.default, tslib_1.__assign({ variant: "primary", dim: "lg", onClick: onClickButton }, { children: "Click" })));
        var textElement = react_1.screen.getByText("Click");
        react_1.fireEvent.click(textElement);
        expect(onClickButton).toHaveBeenCalled();
    });
    test("Is disabled", function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.default, tslib_1.__assign({ variant: "primary", dim: "lg", disabled: true }, { children: "Disabled" })));
        var textElement = react_1.screen.getByText("Disabled");
        expect(textElement).toHaveClass("disabled:opacity-90 disabled:cursor-not-allowed");
        expect(textElement).toBeDisabled();
    });
});
//# sourceMappingURL=Button.test.js.map