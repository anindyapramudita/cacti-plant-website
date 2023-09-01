/* eslint-disable no-undef */
import { act, fireEvent, render } from "@testing-library/react";
import { CategoryTab } from "../category-tab";

describe("Category Tab Component", () => {
  test("Category Tab should render with the right properties", () => {
    const onClickMock = jest.fn();
    const { getAllByTestId, getByTestId } = render(
      <CategoryTab onClick={onClickMock} />
    );

    const categoryButton = getAllByTestId("category-button");
    expect(categoryButton.length).toBe(6);

    const buttonOutline = getByTestId("outline-wrapper");
    expect(buttonOutline).toBeInTheDocument();
  });

  test("Category Tab should trigger onClick when button is triggered", () => {
    const onClickMock = jest.fn();
    const { getAllByTestId } = render(<CategoryTab onClick={onClickMock} />);

    const categoryButton = getAllByTestId("category-button");
    act(() => {
      fireEvent.click(categoryButton[1]);
    });
    expect(onClickMock).toHaveBeenCalledWith("water");
  });

  test("Category Tab should change button outline state on click", async () => {
    const outlineStyle = {
      firstButtonTop: `top: var(--button-outline-gap)`,
      firstButtonLeft: `left: var(--button-outline-gap)`,
      thirdButtonTop: `top: var(--button-outline-gap)`,
      thirdButtonLeft: `left: calc(var(--button-outline-gap) + (2 * var(--button-size)) + (2 * var(--button-gap)))`,
    };

    const { getAllByTestId, getByTestId } = render(
      <CategoryTab onClick={() => {}} />
    );

    const categoryButton = getAllByTestId("category-button");
    const buttonWrapper = getByTestId("outline-wrapper");

    expect(buttonWrapper).toHaveStyle(outlineStyle.firstButtonTop);
    expect(buttonWrapper).toHaveStyle(outlineStyle.firstButtonLeft);

    fireEvent.click(categoryButton[2]);

    await act(() => new Promise((resolve) => setTimeout(resolve, 600)));

    expect(buttonWrapper).toHaveStyle(outlineStyle.thirdButtonTop);
    expect(buttonWrapper).toHaveStyle(outlineStyle.thirdButtonLeft);
  });
});
