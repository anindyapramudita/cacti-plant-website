/* eslint-disable no-undef */
import { render, fireEvent, act } from "@testing-library/react";
import { Button } from "../button";
import { BsGoogle } from "react-icons/bs";

const text = "Test Button";

describe("Button Component", () => {
  test("Button should render with the right properties", () => {
    const { getByTestId, getByText } = render(<Button>{text}</Button>);

    const button = getByTestId("button");

    const buttonLabel = getByText(text);
    const loader = button.querySelector('[data-testid="loader"]');

    expect(button).toBeInTheDocument();
    expect(buttonLabel).toBeInTheDocument();

    expect(button).toHaveClass("button-filled-primary size-medium");
    expect(loader).not.toBeInTheDocument();
    expect(getComputedStyle(button)).toMatchSnapshot();
  });

  test("Button should render the right variant and type", () => {
    const { getByTestId } = render(
      <Button variant="outlined" color="secondary" size="small">
        {text}
      </Button>
    );

    const button = getByTestId("button");

    expect(button).toBeInTheDocument();

    expect(button).toHaveClass("button-outlined-secondary size-small");
  });

  test("Button should render icon if props has icon", () => {
    const { getByTestId } = render(
      <Button icon={<BsGoogle data-testid="icon-button" />}>{text}</Button>
    );

    const icon = getByTestId("icon-button");

    expect(icon).toBeInTheDocument();
  });

  test("Button should call onClick handler when triggered", () => {
    const onClickFn = jest.fn();
    const { getByTestId } = render(<Button onClick={onClickFn}>{text}</Button>);

    const button = getByTestId("button");

    act(() => {
      fireEvent.click(button);
    });

    expect(onClickFn).toBeCalledTimes(1);
  });

  test("Button should display loader when button is loading", () => {
    const { getByTestId } = render(<Button isLoading={true}>{text}</Button>);

    const button = getByTestId("button");
    const loader = button.querySelector('[data-testid="loader"]');

    expect(button).toBeDisabled();
    expect(loader).toBeInTheDocument();
  });

  test("Button should be disabled when loading is true", () => {
    const onClickFn = jest.fn();

    const { getByTestId } = render(
      <Button isLoading={true} onClick={onClickFn}>
        {text}
      </Button>
    );

    const button = getByTestId("button");

    act(() => {
      fireEvent.click(button);
    });

    expect(button).toBeDisabled();
    expect(onClickFn).not.toBeCalled();
  });

  test("Button should be disabled when disabled prop is true", () => {
    const onClickFn = jest.fn();

    const { getByTestId } = render(
      <Button disabled onClick={onClickFn}>
        {text}
      </Button>
    );

    const button = getByTestId("button");

    act(() => {
      fireEvent.click(button);
    });

    expect(button).toBeDisabled();
    expect(onClickFn).not.toBeCalled();
  });

  test("Button shouldn't render if children is undefined", () => {
    const { container } = render(<Button>{undefined}</Button>);

    const button = container.querySelector('[data-testid="button"]');
    expect(button).not.toBeInTheDocument();
  });
});
