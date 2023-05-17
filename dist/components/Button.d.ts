import '../globals.css';
import React from "react";
interface ButtonOptions {
    className?: string;
    variant?: ButtonVariant;
    dim?: ButtonSize;
}
export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonOptions;
type ButtonVariant = "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
type ButtonSize = "xl" | "lg" | "md" | "sm" | "xs";
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
