import { render, fireEvent, act } from "@testing-library/react";
import { ShuffleButton } from "../shuffle-button";

describe("Shuffle Button", () => {
  test("Renders shuffle button properly", () => {
    const onClickFn = jest.fn();
    const { getByTestId } = render(<ShuffleButton handleShuffle={onClickFn} />);

    const shuffleButton = getByTestId("shuffle-button");
    expect(shuffleButton).toBeInTheDocument();
    expect(shuffleButton).toMatchSnapshot();
  });

  test("Calls onClick handler when button is triggered", () => {
    const onClickFn = jest.fn();
    const { getByTestId } = render(<ShuffleButton handleShuffle={onClickFn} />);

    const shuffleButton = getByTestId("shuffle-button");

    act(() => {
      fireEvent.click(shuffleButton);
    });
    expect(onClickFn).toBeCalledTimes(1);
  });
});
