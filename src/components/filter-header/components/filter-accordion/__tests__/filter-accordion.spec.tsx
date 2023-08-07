/* eslint-disable no-undef */
import { act, fireEvent, render } from "@testing-library/react";
import { FilterAccordion } from "../filter-accordion";
import { IFilterAccordionProps } from "../filter-accordion.interface";

const filterAccordionMock: IFilterAccordionProps = {
  isOpen: true,
  onSaveFilter: jest.fn(),
  onClearFilter: jest.fn(),
};

describe("Filter Accordion Component", () => {
  test("Filter Accordion should render with the right properties", () => {
    const { getByRole, getAllByTestId } = render(
      <FilterAccordion {...filterAccordionMock} />
    );

    const waterCheckbox = getAllByTestId("water-checkbox");
    const seasonCheckbox = getAllByTestId("season-checkbox");
    const careCheckbox = getAllByTestId("care-checkbox");
    const saveButton = getByRole("button", { name: "Save" });
    const clearButton = getByRole("button", { name: "Clear" });

    expect(waterCheckbox.length).toBe(3);
    expect(seasonCheckbox.length).toBe(4);
    expect(careCheckbox.length).toBe(3);
    expect(saveButton).toBeInTheDocument();
    expect(clearButton).toBeInTheDocument();
  });

  test("Save Button should be disabled if checkbox didn't change", async () => {
    const { getByRole } = render(<FilterAccordion {...filterAccordionMock} />);

    const SaveButton = getByRole("button", { name: "Save" });

    await act(async () => {
      fireEvent.click(SaveButton);
    });

    expect(filterAccordionMock.onSaveFilter).not.toBeCalled();
  });

  test("Clear Button should be disabled if checkbox didn't change", async () => {
    const { getByRole } = render(<FilterAccordion {...filterAccordionMock} />);

    const clearButton = getByRole("button", { name: "Clear" });

    await act(async () => {
      fireEvent.click(clearButton);
    });

    expect(filterAccordionMock.onClearFilter).not.toBeCalled();
  });

  test("/filter Accordion should call onSaveFilter with the right arguments", async () => {
    const { getByRole, getAllByTestId } = render(
      <FilterAccordion {...filterAccordionMock} />
    );

    const waterCheckbox = getAllByTestId("water-checkbox");
    const seasonCheckbox = getAllByTestId("season-checkbox");
    const careCheckbox = getAllByTestId("care-checkbox");
    const saveButton = getByRole("button", { name: "Save" });

    await act(async () => {
      fireEvent.click(waterCheckbox[0]);
      fireEvent.click(seasonCheckbox[1]);
      fireEvent.click(careCheckbox[2]);
    });

    await act(async () => {
      fireEvent.click(saveButton);
    });

    expect(filterAccordionMock.onSaveFilter).toHaveBeenCalledWith({
      water: ["1"],
      season: ["summer"],
      care: ["3"],
    });
  });

  test("onClearFilter should be triggered if checkbox has changed and the button is triggered", async () => {
    const { getByRole, getAllByTestId } = render(
      <FilterAccordion {...filterAccordionMock} />
    );

    const waterCheckbox = getAllByTestId("water-checkbox");
    const clearButton = getByRole("button", { name: "Clear" });

    await act(async () => {
      fireEvent.click(waterCheckbox[0]);
    });

    await act(async () => {
      fireEvent.click(clearButton);
    });

    expect(filterAccordionMock.onClearFilter).toBeCalled();
  });

  test("filter Accordion should call onSaveFilter with empty arguments after being cleared", async () => {
    const { getByRole, getAllByTestId } = render(
      <FilterAccordion {...filterAccordionMock} />
    );

    const waterCheckbox = getAllByTestId("water-checkbox");
    const seasonCheckbox = getAllByTestId("season-checkbox");
    const careCheckbox = getAllByTestId("care-checkbox");
    const saveButton = getByRole("button", { name: "Save" });
    const clearButton = getByRole("button", { name: "Clear" });

    await act(async () => {
      fireEvent.click(waterCheckbox[0]);
      fireEvent.click(seasonCheckbox[1]);
      fireEvent.click(careCheckbox[2]);
    });

    await act(async () => {
      fireEvent.click(clearButton);
    });

    await act(async () => {
      fireEvent.click(saveButton);
    });

    expect(filterAccordionMock.onClearFilter).toBeCalled();
    expect(filterAccordionMock.onSaveFilter).toHaveBeenCalledWith({
      water: [],
      season: [],
      care: [],
    });
  });
});
