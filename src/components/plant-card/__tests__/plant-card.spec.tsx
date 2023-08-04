/* eslint-disable no-undef */
import { act, fireEvent, render } from "@testing-library/react";
import { PlantCard } from "../plant-card";
import { plantCardMock } from "./plant-card.mock";
import { HIDE_SUMMARY, SEE_SUMMARY } from "../plant-card.constants";
import { PlantDataType } from "@/shared/type/data-types";

describe("Plant Card Component", () => {
  test("Plant Card should render with the right properties", () => {
    const { getByText, getByAltText, getByTestId } = render(
      <PlantCard {...plantCardMock} />
    );

    const summaryButton = getByText(SEE_SUMMARY);
    const plantImage = getByAltText("Strelitzia Nicolai 1");
    const FAvoriteButton = getByTestId("favorite-button");
    const cardOverlay = getByTestId("card-overlay");

    expect(summaryButton).toBeInTheDocument();
    expect(plantImage).toBeInTheDocument();
    expect(FAvoriteButton).toBeInTheDocument();
    expect(cardOverlay).not.toBeVisible();
  });

  test("Plant Card should not be rendered if data is undefined or null", () => {
    const { container } = render(
      <PlantCard {...plantCardMock} plant={null as unknown as PlantDataType} />
    );

    const plantCard = container.querySelector('[data-testid="plant-card"]');
    expect(plantCard).not.toBeInTheDocument();
  });

  test("Plant Card should show summary when the toggle button is clicked", () => {
    const { getByText, getByTestId } = render(<PlantCard {...plantCardMock} />);

    const summaryButton = getByText(SEE_SUMMARY);
    const cardOverlay = getByTestId("card-overlay-wrapper");

    expect(cardOverlay).not.toBeVisible();

    act(() => {
      fireEvent.click(summaryButton);
    });

    expect(summaryButton).toHaveTextContent(HIDE_SUMMARY);
    expect(cardOverlay).toHaveClass("show-overlay");
    expect(cardOverlay).toBeVisible();
  });

  test("Plant Card should hide summary when the toggle button is clicked twice", () => {
    const { getByText, getByTestId } = render(<PlantCard {...plantCardMock} />);

    const summaryButton = getByText(SEE_SUMMARY);
    const cardOverlay = getByTestId("card-overlay");

    expect(cardOverlay).not.toBeVisible();

    act(() => {
      fireEvent.click(summaryButton);
    });

    act(() => {
      fireEvent.click(summaryButton);
    });

    expect(cardOverlay).not.toBeVisible();
    expect(summaryButton).toHaveTextContent(SEE_SUMMARY);
  });

  test("Plant Card should call onLikeClick when FavoriteButton is clicked", () => {
    const onLikeMock = jest.fn();

    const { getByTestId } = render(
      <PlantCard {...plantCardMock} onLikeClick={onLikeMock} />
    );

    const favoriteButton = getByTestId("favorite-button");

    act(() => {
      fireEvent.click(favoriteButton);
    });

    expect(onLikeMock).toBeCalledTimes(1);
  });
});
