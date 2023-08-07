/* eslint-disable no-undef */
import { act, fireEvent, render } from "@testing-library/react";
import { SearchInput } from "../search-input";
import { SEARCH } from "@/shared/utils/constants";

const onSaveSearchMock = jest.fn();

describe("Search Input Component", () => {
  test("Search Input should render with the right properties", async () => {
    const { getByRole, getByPlaceholderText } = render(
      <SearchInput onSaveSearch={onSaveSearchMock} />
    );

    const searchInput = getByPlaceholderText(SEARCH);
    const searchButton = getByRole("button");

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test("onSaveSearch should be triggered with the search argument", async () => {
    const { getByRole, getByPlaceholderText } = render(
      <SearchInput onSaveSearch={onSaveSearchMock} />
    );

    const searchInput = getByPlaceholderText(SEARCH);
    const searchButton = getByRole("button");

    const searchText = "Test search text";

    await act(async () => {
      fireEvent.input(searchInput, { target: { value: searchText } });
    });

    await act(async () => {
      fireEvent.click(searchButton);
    });

    expect(onSaveSearchMock).toHaveBeenCalledWith(searchText);
  });
});
