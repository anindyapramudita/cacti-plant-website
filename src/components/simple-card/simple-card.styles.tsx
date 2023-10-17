import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --card-position: relative;
  --card-text-align: start;
  --plant-name-font-weight: 700;
  --plant-name-margin-top: 5px;

  --like-button-position: absolute;
  --like-button-top: 10px;
  --like-button-right: 10px;
  --like-button-filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));
  --like-button-transform: scale(1);

  --like-icon-display: block;
  --like-icon-height: 24px;
  --like-icon-width: 24px;
  --like-icon-fill: rgba(0, 0, 0, 0.5);
  --like-icon-stroke: white;
  --like-icon-stroke-width: 2;
  --like-icon-overflow: visible;
  --like-icon-transition: fill 0.2s, stroke 0.2s;

  --collection-button-background-color: #453d47;
  --collection-button-border: solid 2px white;
  --collection-button-border-radius: 50%;
  --collection-button-height: 24px;
  --collection-button-width: 24px;

  --collection-icon-color: var(--white);

  position: var(--card-position);
  text-align: var(--card-text-align);
  height: max-content;

  .plant-name {
    font-weight: var(--plant-name-font-weight);
    margin-top: var(--plant-name-margin-top);
  }

  .like-button {
    position: var(--like-button-position);
    top: var(--like-button-top);
    right: var(--like-button-right);
    filter: var(--like-button-filter);
    transform: var(--like-button-transform);

    .like-icon {
      display: var(--like-icon-display);
      height: var(--like-icon-height);
      width: var(--like-icon-width);
      fill: var(--like-icon-fill);
      stroke: var(--like-icon-stroke);
      stroke-width: var(--like-icon-stroke-width);
      overflow: var(--like-icon-overflow);
      transition: var(--like-icon-transition);
    }
  }

  .collection-button {
    position: var(--like-button-position);
    top: var(--like-button-top);
    left: var(--like-button-right);
    filter: var(--like-button-filter);
    transform: var(--like-button-transform);
    background-color: var(--collection-button-background-color);
    border: var(--collection-button-border);
    border-radius: var(--collection-button-border-radius);
    height: var(--collection-button-height);
    width: var(--collection-button-width);

    .collection-icon {
      color: var(--collection-icon-color);
    }
  }

  .like-button.is-liked {
    .like-icon {
      fill: var(--like-color);
      stroke: var(--like-color);
    }
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    .like-button:hover,
    .collection-button:hover {
      --like-button-transform: scale(1.1);
    }
  }
`;
