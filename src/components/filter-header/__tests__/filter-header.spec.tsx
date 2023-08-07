/* eslint-disable no-undef */
import { act, fireEvent, render } from "@testing-library/react";
import { FilterHeader } from "../filter-header";
import { IFilterHeaderProps } from "../filter-header.interface";

const filterHeaderMock: IFilterHeaderProps = {
  onSaveFilter: jest.fn(),
  onClearFilter: jest.fn(),
  onSaveSearch: jest.fn(),
};

describe("Filter Header Component", () => {
  test("Filter Header should render with the right properties", () => {
    const { container } = render(<FilterHeader {...filterHeaderMock} />);

    const filterTop = container.querySelector('[data-testid="filter-top"]');
    const filterButton = container.querySelector(
      '[data-testid="filter-button"]'
    );
    const FilterAccordion = container.querySelector(
      '[data-testid="filter-accordion"]'
    );

    expect(filterTop).toBeInTheDocument();
    expect(filterButton).not.toHaveClass("clicked");
    expect(FilterAccordion).not.toHaveClass("show");
  });

  test("Filter accordion should show up after filter button is clicked", async () => {
    const { container } = render(<FilterHeader {...filterHeaderMock} />);

    const filterButton = container.querySelector(
      '[data-testid="filter-button"]'
    );
    const FilterAccordion = container.querySelector(
      '[data-testid="filter-accordion"]'
    );

    if (filterButton) {
      await act(async () => {
        fireEvent.click(filterButton);
      });

      expect(filterButton).toHaveClass("clicked");
      expect(FilterAccordion).toHaveClass("show");
    }
  });

  test("Filter accordion should be hidden after filter button is clicked twice", async () => {
    const { container } = render(<FilterHeader {...filterHeaderMock} />);

    const filterButton = container.querySelector(
      '[data-testid="filter-button"]'
    );
    const FilterAccordion = container.querySelector(
      '[data-testid="filter-accordion"]'
    );

    if (filterButton) {
      await act(async () => {
        fireEvent.click(filterButton);
      });

      await act(async () => {
        fireEvent.click(filterButton);
      });

      expect(filterButton).not.toHaveClass("clicked");
      expect(FilterAccordion).not.toHaveClass("show");
    }
  });
});
