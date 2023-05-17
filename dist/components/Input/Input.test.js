import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './';
describe('Input', function () {
    test("Renders correctly", function () {
        render(_jsx(Input, { type: "text", "data-testid": "render" }));
        var element = screen.getByTestId("render");
        expect(element).toBeInTheDocument();
    });
    test("Is disabled", function () {
        render(_jsx(Input, { type: "text", "data-testid": "disabled", disabled: true }));
        var element = screen.getByTestId("disabled");
        expect(element).toHaveClass("disabled:opacity-90 disabled:cursor-not-allowed");
        expect(element).toBeDisabled();
    });
    test("Is focused", function () {
        render(_jsx(Input, { type: "text", "data-testid": "focus" }));
        var element = screen.getByTestId("focus");
        element.focus();
        expect(element).toHaveClass("focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-4 focus:ring-opacity-30");
        expect(element).toHaveFocus();
    });
    test("Allow any character if type text", function () {
        render(_jsx(Input, { type: "text", "data-testid": "text" }));
        var element = screen.getByTestId("text");
        fireEvent.change(element, { target: { value: '$23.0 USD' } });
        expect(element.value).toBe('$23.0 USD');
    });
    test("Allow number if type number", function () {
        render(_jsx(Input, { type: "number", "data-testid": "number" }));
        var element = screen.getByTestId("number");
        fireEvent.change(element, { target: { value: '$23.0 USD' } });
        expect(element.value).toBe('');
        fireEvent.change(element, { target: { value: 23.0 } });
        expect(Number(element.value)).toBe(23.0);
    });
});
//# sourceMappingURL=Input.test.js.map