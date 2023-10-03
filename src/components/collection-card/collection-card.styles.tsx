import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --card-position: relative;
  --card-text-align: start;
  --collection-title-font-weight: 700;
  --collection-title-margin-top: 5px;

  --delete-button-position: absolute;
  --delete-button-top: 10px;
  --delete-button-right: 10px;
  --delete-button-filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));
  --delete-button-transform: scale(1);
  --delete-button-background-color: #453d47;
  --delete-button-border: solid 2px white;
  --delete-button-border-radius: 50%;
  --delete-button-height: 24px;
  --delete-button-width: 24px;

  --delete-icon-color: var(--white);

  --image-container-position: relative;
  --page-padding: 64px;
  --card-gap: 32px;
  --card-per-row: 1;

  --image-per-row: 1;
  --gap-per-row: 0;
  --page-padding: 32px;
  --gap-per-image: 32px;

  --image-width: calc(
    (
        100vw - (2 * var(--page-padding)) -
          (var(--gap-per-row) * var(--gap-per-image))
      ) / var(--image-per-row)
  );

  --saved-plant-color: grey;
  --saved-plant-font-size: 14px;

  position: var(--card-position);
  text-align: var(--card-text-align);

  .image-container {
    position: var(--image-container-position);
    width: var(--image-width);
    height: var(--image-width);
  }

  .collection-title {
    font-weight: var(--collection-title-font-weight);
    margin-top: var(--collection-title-margin-top);
  }

  .plants-saved-title {
    color: var(--saved-plant-color);
    font-size: var(--saved-plant-font-size);
  }

  .delete-button {
    position: var(--delete-button-position);
    top: var(--delete-button-top);
    left: var(--delete-button-right);
    filter: var(--delete-button-filter);
    transform: var(--delete-button-transform);
    background-color: var(--delete-button-background-color);
    border: var(--delete-button-border);
    border-radius: var(--delete-button-border-radius);
    height: var(--delete-button-height);
    width: var(--delete-button-width);

    .delete-icon {
      color: var(--delete-icon-color);
    }
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --image-per-row: 3;
    --gap-per-row: 2;
    --page-padding: 64px;
    --image-width: calc(
      (
          100vw - (2 * var(--page-padding)) -
            (var(--gap-per-row) * var(--gap-per-image))
        ) / var(--image-per-row)
    );
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    --image-per-row: 5;
    --gap-per-row: 4;
    --page-padding: 54px;
    --image-width: calc(
      (
          100vw - (2 * var(--page-padding)) -
            (var(--gap-per-row) * var(--gap-per-image))
        ) / var(--image-per-row)
    );

    .collection-button:hover {
      --like-button-transform: scale(1.1);
    }
  }
`;
