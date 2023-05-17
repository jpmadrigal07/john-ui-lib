import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';
describe('Button', function () {
    var onClickButton = jest.fn();
    test("Renders correctly", function () {
        render(_jsx(Button, __assign({ variant: "primary" }, { children: "Primary" })));
        var textElement = screen.getByText("Primary");
        expect(textElement).toBeInTheDocument();
    });
    test("Primary as a default is rendered", function () {
        render(_jsx(Button, { children: "Primary" }));
        var textElement = screen.getByText("Primary");
        expect(textElement).toHaveClass("bg-blue-500");
    });
    test("Secondary is rendered", function () {
        render(_jsx(Button, __assign({ variant: "secondary" }, { children: "Secondary" })));
        var textElement = screen.getByText("Secondary");
        expect(textElement).toHaveClass("bg-gray-500");
    });
    test("Medium size as a default is rendered", function () {
        render(_jsx(Button, __assign({ variant: "primary" }, { children: "Medium" })));
        var textElement = screen.getByText("Medium");
        expect(textElement).toHaveClass("text-base py-2 px-4");
    });
    test("Large size is rendered", function () {
        render(_jsx(Button, __assign({ variant: "primary", dim: "lg" }, { children: "Large" })));
        var textElement = screen.getByText("Large");
        expect(textElement).toHaveClass("text-lg py-3 px-4");
    });
    test("Is clicked", function () {
        render(_jsx(Button, __assign({ variant: "primary", dim: "lg", onClick: onClickButton }, { children: "Click" })));
        var textElement = screen.getByText("Click");
        fireEvent.click(textElement);
        expect(onClickButton).toHaveBeenCalled();
    });
    test("Is disabled", function () {
        render(_jsx(Button, __assign({ variant: "primary", dim: "lg", disabled: true }, { children: "Disabled" })));
        var textElement = screen.getByText("Disabled");
        expect(textElement).toHaveClass("disabled:opacity-90 disabled:cursor-not-allowed");
        expect(textElement).toBeDisabled();
    });
});
//# sourceMappingURL=Button.test.js.map