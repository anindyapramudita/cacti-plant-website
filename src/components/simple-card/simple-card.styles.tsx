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

  position: var(--card-position);
  text-align: var(--card-text-align);

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
      display: block;
      height: 24px;
      width: 24px;
      fill: rgba(0, 0, 0, 0.5);
      stroke: white;
      stroke-width: 2;
      overflow: visible;
      transition: fill 0.2s, stroke 0.2s;
    }
  }

  .like-button.is-liked {
    .like-icon {
      fill: var(--like-color);
      stroke: var(--like-color);
    }
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    .like-button:hover {
      --like-button-transform: scale(1.1);
    }
  }
`;
