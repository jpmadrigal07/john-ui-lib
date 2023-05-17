"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var Input_1 = tslib_1.__importDefault(require("./Input"));
describe('Input', function () {
    test("Renders correctly", function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Input_1.default, { type: "text", "data-testid": "render" }));
        var element = react_1.screen.getByTestId("render");
        expect(element).toBeInTheDocument();
    });
    test("Is disabled", function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Input_1.default, { type: "text", "data-testid": "disabled", disabled: true }));
        var element = react_1.screen.getByTestId("disabled");
        expect(element).toHaveClass("disabled:opacity-90 disabled:cursor-not-allowed");
        expect(element).toBeDisabled();
    });
    test("Is focused", function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Input_1.default, { type: "text", "data-testid": "focus" }));
        var element = react_1.screen.getByTestId("focus");
        element.focus();
        expect(element).toHaveClass("focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-4 focus:ring-opacity-30");
        expect(element).toHaveFocus();
    });
    test("Allow any character if type text", function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Input_1.default, { type: "text", "data-testid": "text" }));
        var element = react_1.screen.getByTestId("text");
        react_1.fireEvent.change(element, { target: { value: '$23.0 USD' } });
        expect(element.value).toBe('$23.0 USD');
    });
    test("Allow number if type number", function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Input_1.default, { type: "number", "data-testid": "number" }));
        var element = react_1.screen.getByTestId("number");
        react_1.fireEvent.change(element, { target: { value: '$23.0 USD' } });
        expect(element.value).toBe('');
        react_1.fireEvent.change(element, { target: { value: 23.0 } });
        expect(Number(element.value)).toBe(23.0);
    });
});
//# sourceMappingURL=Input.test.js.map