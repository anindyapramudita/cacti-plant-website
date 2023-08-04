/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { CardOverlay } from "../card-overlay";
import { cardOverlayMock } from "./card-overlay.mock";

describe("Card Overlay Component", () => {
  test("Card Overlay should render with the right properties", () => {
    const { getByTestId, getByText } = render(
      <CardOverlay {...cardOverlayMock} />
    );

    const cardOverlay = getByTestId("card-overlay");
    expect(cardOverlay).toBeInTheDocument();

    const plantTitle = getByText(cardOverlayMock.name.toUpperCase());
    expect(plantTitle).toBeInTheDocument();

    const waterIcons = cardOverlay
      .querySelectorAll(".category-level")[0]
      .querySelectorAll("svg");
    expect(waterIcons.length).toBe(5);

    const careIcons = cardOverlay
      .querySelectorAll(".category-level")[1]
      .querySelectorAll("svg");
    expect(careIcons.length).toBe(5);

    const sizeIcons = cardOverlay
      .querySelectorAll(".category-level")[2]
      .querySelectorAll("svg");
    expect(sizeIcons.length).toBe(3);

    const seasonIcons = cardOverlay
      .querySelectorAll(".category-level")[3]
      .querySelectorAll("svg");
    expect(seasonIcons.length).toBe(4);
  });

  test("Card Overlay should not render if data is null or undefined", () => {
    const { container } = render(
      <CardOverlay {...cardOverlayMock} name={null as unknown as string} />
    );

    const cardOverlay = container.querySelector('[data-testid="card-overlay"]');
    expect(cardOverlay).not.toBeInTheDocument();
  });

  test("Card Overlay should display the correct number of active icons", () => {
    const { getByTestId } = render(<CardOverlay {...cardOverlayMock} />);

    const cardOverlay = getByTestId("card-overlay");
    expect(cardOverlay).toBeInTheDocument();

    const waterActiveIcons = cardOverlay
      .querySelectorAll(".category-level")[0]
      .querySelectorAll(".active");
    expect(waterActiveIcons.length).toBe(cardOverlayMock.waterLevel);

    const careActiveIcons = cardOverlay
      .querySelectorAll(".category-level")[1]
      .querySelectorAll(".active");
    expect(careActiveIcons.length).toBe(cardOverlayMock.careLevel);

    const sizeActiveIcons = cardOverlay
      .querySelectorAll(".category-level")[2]
      .querySelectorAll(".active");
    expect(sizeActiveIcons.length).toBe(1);

    const seasonActiveIcons = cardOverlay
      .querySelectorAll(".category-level")[3]
      .querySelectorAll(".active");
    expect(seasonActiveIcons.length).toBe(2);
  });

  test("Card Overlay should display the correct active season icon", () => {
    const { getByTestId } = render(<CardOverlay {...cardOverlayMock} />);

    const cardOverlay = getByTestId("card-overlay");
    expect(cardOverlay).toBeInTheDocument();

    const springIcon = cardOverlay.querySelector('[data-testid="spring-icon"]');
    const summerIcon = cardOverlay.querySelector('[data-testid="summer-icon"]');
    const fallIcon = cardOverlay.querySelector('[data-testid="fall-icon"]');
    const winterIcon = cardOverlay.querySelector('[data-testid="winter-icon"]');

    expect(springIcon).toHaveClass("active", { exact: true });
    expect(summerIcon).toHaveClass("active", { exact: true });
    expect(fallIcon).not.toHaveClass("active", { exact: true });
    expect(winterIcon).not.toHaveClass("active", { exact: true });
  });
});
