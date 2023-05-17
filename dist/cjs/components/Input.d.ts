import '../globals.css';
import React from "react";
interface InputOptions {
    className?: string;
    dim?: InputSize;
}
export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & InputOptions;
type InputSize = "xl" | "lg" | "md" | "sm" | "xs";
declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default Input;
