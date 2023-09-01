/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { CategoryContent } from "../category-content";
import { categoryContentMock } from "./category-content.mock";

describe("Category Content Component", () => {
  test("Category Content should render with the right properties", () => {
    const { getAllByTestId, getByTestId } = render(
      <CategoryContent {...categoryContentMock} />
    );

    const categoryContent = getAllByTestId("category-content");
    expect(categoryContent.length).toBe(5);

    const contentWrapper = getByTestId("content-wrapper");
    expect(contentWrapper).toHaveClass("content-wrapper-description");
  });

  test("Category Content should have the right class according to the prop", () => {
    const { getByTestId } = render(
      <CategoryContent {...categoryContentMock} category="water" />
    );

    const contentWrapper = getByTestId("content-wrapper");
    expect(contentWrapper).toHaveClass("content-wrapper-water");
  });
});
