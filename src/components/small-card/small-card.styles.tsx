import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --padding-size: 2rem;
  --gap-per-row: 4;
  --card-per-row: 5;
  --gap-size: 2rem;
  --card-size-calc: calc(
    (
        (100vw - (2 * 54px)) - (var(--gap-per-row) * (var(--gap-size))) -
          (2 * var(--padding-size))
      ) / var(--card-per-row)
  );
  --card-content-width: calc(100vw - (2 * 32px));
  --card-content-padding: 1rem 0.5rem;
  --overflow-hidden: hidden;
  --card-display: flex;
  --card-flex-direction: column;
  --card-justify-content: center;
  --card-align-items: center;
  --card-radius: 8px;
  --card-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  --title-font-weight: 700;
  --title-font-size: 16px;

  --card-image-position: relative;
  --info-white-space: nowrap;
  --info-text-overflow: ellipsis;

  display: var(--card-display);
  flex-direction: var(--card-flex-direction);
  justify-content: var(--card-justify-content);
  align-items: var(--card-align-items);
  max-width: 300px;
  min-width: 150px;
  min-height: 150px;

  .card-image {
    width: var(--card-content-width);
    min-width: 150px;
    max-width: 300px;
    height: var(--card-content-width);
    max-height: 300px;
    min-height: 150px;
    border-radius: var(--card-radius);
    overflow: var(--overflow-hidden);
    position: var(--card-image-position);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    .favorite-button {
      position: absolute;
      top: 5px;
      right: 5px;
      color: var(--white);
      transition: color 0.3s;

      .love-icon {
        filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));
      }
    }

    .favorite-button.clicked {
      color: var(--like-color);
    }

    .favorite-button:hover {
      top: 3px;
    }

    .favorite-button:active {
      top: 5px;
    }
  }

  .card-info {
    width: var(--card-content-width);
    display: var(--card-display);
    flex-direction: var(--card-flex-direction);
    padding: var(--card-content-padding);
    overflow: var(--overflow-hidden);
    white-space: var(--info-white-space);
    text-overflow: var(--info-text-overflow);
    min-width: 150px;
    max-width: 300px;
    max-height: 300px;

    .plant-name {
      font-weight: var(--title-font-weight);
      font-size: var(--title-font-size);
    }
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --card-content-width: calc(100vw - (2 * 256px));
  }
  @media (min-width: ${gridBreakpoint.lg}) {
    width: var(--card-size-calc);
    max-width: 300px;
    max-height: 300px;

    .card-image {
      width: var(--card-size-calc);
      height: var(--card-size-calc);
    }

    .card-info {
      width: var(--card-size-calc);
    }
  }

  @media (min-width: ${gridBreakpoint.xl}) {
    --card-size-calc: calc(
      (
          (100vw - (2 * 128px)) - (var(--gap-per-row) * (var(--gap-size))) -
            (2 * var(--padding-size))
        ) / var(--card-per-row)
    width: var(--card-size-calc);
  }
`;
