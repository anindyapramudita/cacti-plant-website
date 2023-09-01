import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --category-button-height: 60px;
  --category-line-height: 20px;
  --category-gap: 24px;
  --info-width: calc(100vw - (2 * 24px));
  --info-height: 446px;
  --content-position: relative;
  --content-overflow: hidden;

  --wrapper-display: flex;
  --wrapper-gap: 24px;
  --wrapper-position: absolute;
  --wrapper-transition: left 0.5s;

  --multiplier: 0;

  --text-display: flex;
  --text-width: 480px;
  --text-gap: 8px;
  --text-animation-name: text-fade-in;
  --text-animation-duration: 0.5s;
  --text-animation: linear;

  --category-font-size: 24px;
  --category-font-weight: 700;

  width: var(--info-width);
  height: var(--info-height);
  position: var(--content-position);
  overflow: var(--content-overflow);

  .content-wrapper-description {
    --multiplier: 0;
  }
  .content-wrapper-water {
    --multiplier: -1;
  }
  .content-wrapper-care {
    --multiplier: -2;
  }
  .content-wrapper-seasons {
    --multiplier: -3;
  }
  .content-wrapper-size {
    --multiplier: -4;
  }
  .content-wrapper-sun {
    --multiplier: -5;
  }

  .content-wrapper {
    --text-left: calc(
      (var(--multiplier) * var(--info-width)) +
        (var(--multiplier) * var(--category-gap))
    );

    display: var(--wrapper-display);
    gap: var(--wrapper-gap);
    position: var(--wrapper-position);
    left: var(--text-left);
    transition: var(--wrapper-transition);

    .info-text {
      display: var(--text-display);
      width: var(--info-width);
      flex-direction: var(--text-flex-direction);
      gap: var(--text-gap);

      .category-header {
        font-size: var(--category-font-size);
        font-weight: var(--category-font-weight);
      }
    }
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --info-width: 480px;
  }
`;
