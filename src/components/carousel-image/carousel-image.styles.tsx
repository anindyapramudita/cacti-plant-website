import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  --line-display: flex;
  --line-gap: 8px;
  --line-margin: 0 0 8px 0;

  --image-max-width: 100%;
  --image-max-height: 300px;

  .line-container {
    display: var(--line-display);
    gap: var(--line-gap);
    margin: var(--line-margin);
  }

  .carousel-image {
    max-width: var(--image-max-width);
    max-height: var(--image-max-height);
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --image-max-height: 380px;
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    --image-max-width: 350px;
    --image-max-height: 450px;
  }
`;

export const LineCounter = styled.div<{
  index: number;
  activeIndex: number;
  totalLine: number;
  restartImage: boolean;
  currentImage: string;
}>`
  --line-width: ${(props) =>
    props.totalLine && `calc(100% / ${props.totalLine})`};
  --line-height: 0.1875rem;
  --line-position: relative;
  --line-overflow: hidden;
  --line-background-color: ${(props) =>
    props.index >= props.activeIndex
      ? "var(--new-secondary-light)"
      : "var(--new-secondary)"};
  --line-border-radius: 1.25rem;

  --line-load-content: "";
  --line-load-position: absolute;
  --line-load-left: 0;
  --line-load-height: 0.1875rem;
  --line-load-background-color: var(--new-secondary);
  --line-load-animation: lineAnim 5s linear;

  width: var(--line-width);
  height: var(--line-height);
  position: var(--line-position);
  overflow: var(--line-overflow);
  background-color: var(--line-background-color);

  -webkit-border-radius: var(--line-border-radius);
  -moz-border-radius: var(--line-border-radius);
  border-radius: var(--line-border-radius);

  // cursor: pointer;

  ${(props) =>
    props.index === props.activeIndex &&
    `
  :before {
    content: var(--line-load-content);
    position: var(--line-load-position);
    left: var(--line-load-left);
    height: var(--line-load-height);
    background-color: var(--line-load-background-color);
    ${
      !props.restartImage && props.currentImage
        ? `-webkit-animation: var(--line-load-animation);
    -moz-animation: var(--line-load-animation);
    animation: var(--line-load-animation);
    `
        : ""
    }
    -webkit-border-radius: var(--line-border-radius);
    -moz-border-radius: var(--line-border-radius);
    border-radius: var(--line-border-radius);
  }
  `}

  @keyframes lineAnim {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;
