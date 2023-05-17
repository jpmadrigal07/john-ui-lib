import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button from './Button';

describe('Button', () => {
  const onClickButton = jest.fn();
  test("Renders correctly", () => {
    render(<Button variant="primary">Primary</Button>);
    const textElement = screen.getByText("Primary");
    expect(textElement).toBeInTheDocument();
  });
  test("Primary as a default is rendered", () => {
    render(<Button>Primary</Button>);
    const textElement = screen.getByText("Primary");
    expect(textElement).toHaveClass("bg-blue-500");
  });
  test("Secondary is rendered", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const textElement = screen.getByText("Secondary");
    expect(textElement).toHaveClass("bg-gray-500");
  });
  test("Medium size as a default is rendered", () => {
    render(<Button variant="primary">Medium</Button>);
    const textElement = screen.getByText("Medium");
    expect(textElement).toHaveClass("text-base py-2 px-4");
  });
  test("Large size is rendered", () => {
    render(<Button variant="primary" dim="lg">Large</Button>);
    const textElement = screen.getByText("Large");
    expect(textElement).toHaveClass("text-lg py-3 px-4");
  });
  test("Is clicked", () => {
    render(<Button variant="primary" dim="lg" onClick={onClickButton}>Click</Button>);
    const textElement = screen.getByText("Click");
    fireEvent.click(textElement);
    expect(onClickButton).toHaveBeenCalled();
  });
  test("Is disabled", () => {
    render(<Button variant="primary" dim="lg" disabled>Disabled</Button>);
    const textElement = screen.getByText("Disabled");
    expect(textElement).toHaveClass("disabled:opacity-90 disabled:cursor-not-allowed");
    expect(textElement).toBeDisabled()
  });
})