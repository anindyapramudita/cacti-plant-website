import { render } from "@testing-library/react";
import { Loader } from "../loader";

describe("Loader Component", () => {
  test("Loader should render properly", () => {
    const { queryAllByTestId, getByTestId } = render(<Loader />);

    const loader = getByTestId("loader");
    const loaderDots = queryAllByTestId("loader-dot");

    expect(loader).toBeInTheDocument();
    expect(loaderDots).toHaveLength(3);
  });
});
