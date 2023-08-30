/* eslint-disable no-undef */
import { render } from "@testing-library/react";

import { Input } from "../input";
import {
  ErrorTextInputMock,
  TextInputWithIconMock,
  textInputMock,
} from "./input.mock";

describe("Input Component", () => {
  const mockRegister = jest.fn();
  test("Input should render with the right properties for text", () => {
    const { container, getByText } = render(
      <Input {...textInputMock} register={mockRegister} />
    );

    const inputContainer = container.querySelector(
      '[data-testid="input-container"]'
    );
    expect(inputContainer).toBeInTheDocument();

    const inputElement = container.querySelector(
      '[data-testid="input-component"]'
    ) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();

    expect(inputElement.type).toBe("text");
    expect(inputElement.id).toBe("name");

    const label = getByText(textInputMock.label);
    expect(label).toBeInTheDocument();
  });

  test("Input render icon if props has icon", () => {
    const { getByTestId, container } = render(
      <Input {...TextInputWithIconMock} />
    );

    const icon = getByTestId("input-icon");
    expect(icon).toBeInTheDocument();

    const inputContainer = container.querySelector(
      '[data-testid="input-component"]'
    );

    expect(inputContainer).toHaveClass("with-icon");
  });

  test("Input render error message and style if the input status is error", () => {
    const { container, getByText } = render(<Input {...ErrorTextInputMock} />);

    const inputContainer = container.querySelector(
      '[data-testid="input-component"]'
    );

    expect(inputContainer).toHaveClass("input-error");

    const errorText = getByText("input error");
    expect(errorText).toBeInTheDocument();
  });
});
