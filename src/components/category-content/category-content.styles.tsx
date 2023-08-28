import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";
import { Info } from "../category-tab/category-tab.interface";

export const StylesWrapper = styled.div<{
  category: Info;
}>`
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
  --wrapper-left: var(--text-left);
  --wrapper-transition: left 0.5s;

  --description-multiplier: 0;
  --water-multiplier: -1;
  --care-multiplier: -2;
  --seasons-multiplier: -3;
  --size-multiplier: -4;
  --sun-multiplier: -5;

  --text-display: flex;
  --text-width: 480px;
  --text-gap: 8px;
  --text-animation-name: text-fade-in;
  --text-animation-duration: 0.5s;
  --text-animation: linear;

  --category-font-size: 24px;
  --category-font-weight: 700;

  --text-left: ${(props) =>
    props.category
      ? `calc(
    (var(--${props.category}-multiplier) * var(--info-width)) +
      (var(--${props.category}-multiplier) * var(--category-gap))
  )`
      : "0"};

  width: var(--info-width);
  height: var(--info-height);
  position: var(--content-position);
  overflow: var(--content-overflow);

  .content-wrapper {
    display: var(--wrapper-display);
    gap: var(--wrapper-gap);
    position: var(--wrapper-position);
    left: var(--wrapper-left);
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
