import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Input } from './Input';

describe('Input', () => {
  test("Renders correctly", () => {
    render(<Input type="text" data-testid="render" />);
    const element = screen.getByTestId("render");
    expect(element).toBeInTheDocument();
  });
  test("Is disabled", () => {
    render(<Input type="text" data-testid="disabled" disabled />);
    const element = screen.getByTestId("disabled");
    expect(element).toHaveClass("disabled:opacity-90 disabled:cursor-not-allowed");
    expect(element).toBeDisabled()
  });
  test("Is focused", () => {
    render(<Input type="text" data-testid="focus" />);
    const element = screen.getByTestId("focus");
    element.focus();
    expect(element).toHaveClass("focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-4 focus:ring-opacity-30");
    expect(element).toHaveFocus();
  });
  test("Allow any character if type text", () => {
    render(<Input type="text" data-testid="text" />);
    const element = screen.getByTestId("text") as HTMLInputElement;
    fireEvent.change(element, {target: {value: '$23.0 USD'}})
    expect(element.value).toBe('$23.0 USD')
  });
  test("Allow number if type number", () => {
    render(<Input type="number" data-testid="number" />);
    const element = screen.getByTestId("number") as HTMLInputElement;
    fireEvent.change(element, {target: {value: '$23.0 USD'}})
    expect(element.value).toBe('')
    fireEvent.change(element, {target: {value: 23.0}})
    expect(Number(element.value)).toBe(23.0)
  });
})