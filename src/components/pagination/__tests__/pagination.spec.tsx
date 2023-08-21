/* eslint-disable no-undef */
import { act, fireEvent, render } from "@testing-library/react";
import { paginationMock } from "./pagination.mock";
import { Pagination } from "..";

describe("Pagination Component", () => {
  test("Pagination should render with the right properties", () => {
    const { getAllByRole, container } = render(
      <Pagination {...paginationMock} />
    );

    const pageButtons = getAllByRole("button", { name: /\d+/ });
    const firstPageButton = container.querySelector(
      '[data-testid="first-page-button"]'
    );
    const previousPageButton = container.querySelector(
      '[data-testid="previous-page-button"]'
    );
    const nextPageButton = container.querySelector(
      '[data-testid="next-page-button"]'
    );
    const lastPageButton = container.querySelector(
      '[data-testid="last-page-button"]'
    );

    expect(pageButtons).toHaveLength(5);
    expect(pageButtons[0]).toHaveClass("active");
    expect(firstPageButton).toBeInTheDocument();
    expect(previousPageButton).toBeInTheDocument();
    expect(nextPageButton).toBeInTheDocument();
    expect(lastPageButton).toBeInTheDocument();
  });

  test("Page button should be highlighted if it's currently active in that page", () => {
    const { getAllByRole } = render(
      <Pagination {...paginationMock} currentPage={3} />
    );

    const pageButtons = getAllByRole("button", { name: /\d+/ });

    expect(pageButtons).toHaveLength(5);
    expect(pageButtons[2]).toHaveClass("active");
    expect(pageButtons[0]).not.toHaveClass("active");
  });

  test("First page button should be disabled when current page is 1", async () => {
    const { container } = render(<Pagination {...paginationMock} />);

    const firstPageButton = container.querySelector(
      '[data-testid="first-page-button"]'
    );

    expect(firstPageButton).toBeDisabled();
  });

  test("Previous page button should be disabled when current page is 1", async () => {
    const { container } = render(<Pagination {...paginationMock} />);

    const previousPageButton = container.querySelector(
      '[data-testid="previous-page-button"]'
    );

    expect(previousPageButton).toBeDisabled();
  });

  test("Last page button should be disabled when current page is the same as total page", async () => {
    const { container } = render(
      <Pagination {...paginationMock} currentPage={10} />
    );

    const lastPageButton = container.querySelector(
      '[data-testid="last-page-button"]'
    );

    expect(lastPageButton).toBeDisabled();
  });

  test("Next page button should be disabled when current page is the same as total page", async () => {
    const { container } = render(
      <Pagination {...paginationMock} currentPage={10} />
    );

    const nextPageButton = container.querySelector(
      '[data-testid="next-page-button"]'
    );

    expect(nextPageButton).toBeDisabled();
  });

  test("onPageClick should not be triggered if the current page button is clicked", async () => {
    const onPageClickMock = jest.fn();

    const { getAllByRole } = render(
      <Pagination {...paginationMock} onPageClick={onPageClickMock} />
    );

    const pageButtons = getAllByRole("button", { name: /\d+/ });

    await act(async () => {
      fireEvent.click(pageButtons[0]);
    });

    expect(onPageClickMock).not.toBeCalled();
  });

  test("onPageClick should be triggered when page button is clicked", async () => {
    const onPageClickMock = jest.fn();

    const { getAllByRole } = render(
      <Pagination {...paginationMock} onPageClick={onPageClickMock} />
    );

    const pageButtons = getAllByRole("button", { name: /\d+/ });

    await act(async () => {
      fireEvent.click(pageButtons[2]);
    });

    expect(onPageClickMock).toBeCalledWith(3);
  });

  test("should call onPageClick with the correct page number when previous and next buttons are clicked", async () => {
    const onPageClickMock = jest.fn();

    const { container } = render(
      <Pagination
        {...paginationMock}
        currentPage={3}
        onPageClick={onPageClickMock}
      />
    );

    const nextPageButton = container.querySelector(
      '[data-testid="next-page-button"]'
    );
    const previousPageButton = container.querySelector(
      '[data-testid="previous-page-button"]'
    );

    if (nextPageButton) {
      await act(async () => {
        fireEvent.click(nextPageButton);
      });

      expect(onPageClickMock).toBeCalledWith(4);
    }

    if (previousPageButton) {
      await act(async () => {
        fireEvent.click(previousPageButton);
      });

      expect(onPageClickMock).toBeCalledWith(2);
    }
  });

  test("should call onPageClick with the correct page number when first and last buttons are clicked", async () => {
    const onPageClickMock = jest.fn();

    const { container } = render(
      <Pagination
        {...paginationMock}
        currentPage={3}
        onPageClick={onPageClickMock}
      />
    );

    const firstPageButton = container.querySelector(
      '[data-testid="first-page-button"]'
    );
    const lastPageButton = container.querySelector(
      '[data-testid="last-page-button"]'
    );

    if (firstPageButton) {
      await act(async () => {
        fireEvent.click(firstPageButton);
      });

      expect(onPageClickMock).toBeCalledWith(1);
    }

    if (lastPageButton) {
      await act(async () => {
        fireEvent.click(lastPageButton);
      });

      expect(onPageClickMock).toBeCalledWith(10);
    }
  });
});
