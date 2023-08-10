/* eslint-disable no-undef */
import { act, fireEvent, render } from "@testing-library/react";

import { Input } from "../input";
import { passwordInputMock, textInputMock } from "./input.mock";

describe("Input Component", () => {
  const mockRegister = jest.fn();
  test("Input should render with the right properties for text", () => {
    const { container, getByText } = render(
      <Input {...textInputMock} register={mockRegister} />
    );

    const plantCard = container.querySelector(
      '[data-testid="input-container"]'
    );
    expect(plantCard).toBeInTheDocument();

    const inputElement = container.querySelector(
      '[data-testid="input-component"]'
    ) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();

    expect(inputElement.type).toBe("text");
    expect(inputElement.id).toBe("name");

    const label = getByText(textInputMock.label);
    expect(label).toBeInTheDocument();

    const passwordVisibleButton = plantCard?.querySelector(".eye-icon");
    expect(passwordVisibleButton).not.toBeInTheDocument();
  });

  test("Input should render with the right properties for password", () => {
    const mockEyeClick = jest.fn();
    const { container } = render(
      <Input
        {...passwordInputMock}
        register={mockRegister}
        onClick={mockEyeClick}
      />
    );

    const plantCard = container.querySelector(
      '[data-testid="input-container"]'
    );
    expect(plantCard).toBeInTheDocument();

    const inputElement = container.querySelector(
      '[data-testid="input-component"]'
    ) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();

    expect(inputElement.type).toBe("password");
    expect(inputElement.id).toBe("password");

    const passwordVisibleButton = plantCard?.querySelector(".eye-icon");
    expect(passwordVisibleButton).toBeInTheDocument();

    const passwordIcon = passwordVisibleButton?.querySelector(
      '[data-testid="eye-visible"]'
    );
    expect(passwordIcon).toBeInTheDocument();
  });

  test("Input should show the right password icon", () => {
    const mockEyeClick = jest.fn();
    const { container } = render(
      <Input
        {...passwordInputMock}
        register={mockRegister}
        onClick={mockEyeClick}
        isVisible={true}
      />
    );

    const passwordIcon = container.querySelector(
      '[data-testid="eye-invisible"]'
    );
    expect(passwordIcon).toBeInTheDocument();
  });

  test("Input should trigger handle if  with the right properties for password", () => {
    const mockEyeClick = jest.fn();
    const { container } = render(
      <Input
        {...passwordInputMock}
        register={mockRegister}
        onClick={mockEyeClick}
      />
    );

    const plantCard = container.querySelector(
      '[data-testid="input-container"]'
    );
    expect(plantCard).toBeInTheDocument();

    const passwordVisibleButton = plantCard?.querySelector(".eye-icon");

    expect(passwordVisibleButton).toBeInTheDocument();
    if (passwordVisibleButton) {
      act(() => {
        fireEvent.click(passwordVisibleButton);
      });
      expect(mockEyeClick).toBeCalledTimes(1);
    }
  });
});
