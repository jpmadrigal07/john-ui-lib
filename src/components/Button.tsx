import '../globals.css';
import * as React from "react";
import clsx from 'clsx';

interface ButtonOptions {
    className?: string;
    variant?: ButtonVariant;
    dim?: ButtonSize;
}

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> &
    ButtonOptions;

type ButtonVariant = "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
type ButtonSize = "xl" | "lg" | "md" | "sm" | "xs";

const getVariant = (variant: ButtonVariant) => {
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

const getSize = (size: ButtonSize) => {
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

const Button = React.forwardRef<Ref, ButtonProps>((props, ref) => {
    const {
        variant = "primary",
        dim = "md",
        className,
        children,
        ...rest
    } = props;

    const merged = clsx("rounded shadow disabled:opacity-90 disabled:cursor-not-allowed", getVariant(variant), getSize(dim), className);

    return (
        <button ref={ref} className={merged} {...rest}>
            {children}
        </button>
    );
});

Button.displayName = "Button";
export default Button;