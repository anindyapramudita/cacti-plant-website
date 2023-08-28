import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --layout-height: calc(100vh - var(--header-height-mobile));
  --layout-display: flex;
  --layout-flex-direction: column;
  --layout-padding: 24px;
  --layout-gap: 32px;
  --layout-overflow-y: scroll;
  --layout-align-items: stretch;
  --layout-justify-content: flex-start;

  --header-font-size: 36px;

  --line-display: none;
  --line-height: 550px;
  --line-width: 2px;
  --line-background-color: #dfdfdf;

  --content-display: flex;
  --content-flex-direction: column;
  --content-align-items: center;
  --content-gap: 32px;
  --content-width: auto;
  --content-height: auto;

  --text-display: flex;
  --text-width: 100%;
  --text-flex-direction: column;
  --text-gap: 8px;
  --text-animation-name: text-fade-in;
  --text-animation-duration: 0.5s;
  --text-animation: linear;

  --category-font-size: 24px;
  --category-font-weight: 700;

  --image-wrapper-display: flex;
  --image-wrapper-flex-direction: column;
  --image-wrapper-gap: 24px;

  height: var(--layout-height);
  display: var(--layout-display);
  flex-direction: var(--layout-flex-direction);
  padding: var(--layout-padding);
  gap: var(--layout-gap);
  overflow-y: var(--layout-overflow-y);
  align-items: var(--layout-align-items);
  justify-content: var(--layout-justify-content);

  .image-wrapper {
    display: var(--image-wrapper-display);
    flex-direction: var(--image-wrapper-flex-direction);
    gap: var(--image-wrapper-gap);

    .plants-name {
      font-size: var(--header-font-size);
    }
  }

  .middle-line {
    display: var(--line-display);
    height: var(--line-height);
    width: var(--line-width);
    background-color: var(--line-background-color);
  }

  .info-content {
    display: var(--content-display);
    flex-direction: var(--content-flex-direction);
    align-items: var(--content-align-items);
    gap: var(--content-gap);
    width: var(--content-width);
    height: var(--content-height);
    position: relative;
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --layout-height: calc(100vh - var(--header-height-mobile));
    --header-font-size: 42px;
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    --layout-flex-direction: row;
    --layout-align-items: center;
    --layout-justify-content: center;
    --layout-gap: 64px;
    --layout-padding: 24px;

    --content-gap: 24px;
    --content-width: 480px;
    --content-height: 550px;
    --line-display: block;
  }
`;
