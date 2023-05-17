import '../globals.css';
import * as React from "react";
import { twMerge } from 'tailwind-merge'

interface InputOptions {
    className?: string;
    dim?: InputSize;
}

type Ref = HTMLInputElement;

export type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> &
    InputOptions;

type InputSize = "xl" | "lg" | "md" | "sm" | "xs";

const getSize = (size: InputSize) => {
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

const defaultStyle =
  "relative inline-flex w-full rounded leading-none transition-colors ease-in-out placeholder-gray-500 text-gray-700 bg-gray-50 border border-gray-300 hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-4 focus:ring-opacity-30 disabled:opacity-90 disabled:cursor-not-allowed";

export const Input = React.forwardRef<Ref, InputProps>((props, ref) => {
    const {
        dim = "md",
        className,
        ...rest
    } = props;

    const merged = twMerge(defaultStyle, getSize(dim), className);

    return (
        <input ref={ref} className={merged} {...rest} />
    );
});

Input.displayName = "Input";