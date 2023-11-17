import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{
  currentId: number;
}>`
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

  --slider-overflow: hidden;
  --slider-position: relative;
  --slider-min-width: 150px;
  --slider-min-height: 150px;
  --slider-border-radius: 8px;
  --slider-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);

  --image-wrapper-display: grid;
  --image-wrapper-grid-template-columns: repeat(100, 1fr);
  --image-wrapper-position: absolute;
  --image-wrapper-transition: left 0.3s;

  --image-container-position: relative;
  --image-position: absolute;

  --button-position: absolute;
  --button-top: 50%;
  --button-transform: translate(0, -50%);
  --button-color: var(--new-primary);
  --button-background-color: var(--white);
  --button-opacity: 0.8;
  --button-border-radius: 50%;
  --button-filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));

  --button-visibility: visible;
  --button-left-right: 10px;

  --dot-container-position: absolute;
  --dot-container-bottom: 10px;
  --dot-container-left: 50%;
  --dot-container-transform: translate(-50%, 0);
  --dot-container-display: flex;
  --dot-container-gap: 10px;

  --dot-height: 8px;
  --dot-width: 8px;
  --dot-background-color: var(--disabled-dark);
  --dot-border-radius: 50%;
  border-radius: 8px;
  overflow: hidden;

  .slider-component {
    overflow: var(--slider-overflow);
    position: var(--slider-position);
    min-height: var(--slider-min-height);
    min-width: var(--slider-min-width);
    width: var(--image-width);
    height: var(--image-width);

    .slider-image-wrapper {
      width: var(--image-width);
      height: var(--image-width);
      display: var(--image-wrapper-display);
      grid-template-columns: var(--image-wrapper-grid-template-columns);
      position: var(--image-wrapper-position);
      left: ${(props) =>
        props.currentId
          ? `calc(${props.currentId} * -1 * var(--image-width))`
          : "0"};
      transition: var(--image-wrapper-transition);

      .image-container {
        position: var(--image-container-position);
        width: var(--image-width);
        height: var(--image-width);
      }

      .plant-image {
        position: var(--image-position);
      }
    }

    .button-left,
    .button-right {
      position: var(--button-position);
      top: var(--button-top);
      transform: var(--button-transform);
      color: var(--button-color);
      background-color: var(--button-background-color);
      opacity: var(--button-opacity);
      border-radius: var(--button-border-radius);
      filter: var(--button-filter);
      visibility: var(--button-visibility);
    }

    .button-left:disabled,
    .button-right:disabled {
      --button-visibility: hidden;
    }

    .button-right {
      right: var(--button-left-right);
    }

    .button-left {
      left: var(--button-left-right);
    }

    .dot-counter {
      position: var(--dot-container-position);
      bottom: var(--dot-container-bottom);
      left: var(--dot-container-left);
      transform: var(--dot-container-transform);
      display: var(--dot-container-display);
      gap: var(--dot-container-gap);

      .dot {
        height: var(--dot-height);
        width: var(--dot-width);
        background-color: var(--dot-background-color);
        border-radius: var(--dot-border-radius);
      }

      .dot.active {
        --dot-background-color: var(--white);
      }
    }
  }

  @media (min-width: ${gridBreakpoint.md}) {
    .slider-component {
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
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    .slider-component {
      --image-per-row: 4;
      --gap-per-row: 3;
      --page-padding: 54px;
      --image-width: calc(
        (
            100vw - (2 * var(--page-padding)) -
              (var(--gap-per-row) * var(--gap-per-image))
          ) / var(--image-per-row)
      );

      .button-left,
      .button-right {
        --button-visibility: hidden;
      }
    }

    .slider-component:hover {
      .button-left,
      .button-right {
        --button-visibility: visible;
      }

      .button-left:hover,
      .button-right:hover {
        --button-opacity: 1;
      }

      .button-left:disabled,
      .button-right:disabled {
        --button-visibility: hidden;
      }
    }
  }

  @media (min-width: ${gridBreakpoint.xl}) {
    .slider-component {
      --page-padding: 64px;
      --image-width: calc(
        (1184px - (var(--gap-per-row) * var(--gap-per-image))) /
          var(--image-per-row)
      );
    }
  }
`;
