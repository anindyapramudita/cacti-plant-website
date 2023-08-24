import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  height: 50vh;
  .line-container {
    display: flex;
    gap: 8px;
    margin: 0 0 8px 0;
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    height: calc(100vh - 48px - 64px - 12px);
  }
`;

export const LineCounter = styled.div<{
  index: number;
  activeIndex: number;
  totalLine: number;
  restartImage: boolean;
  currentImage: string;
}>`
  width: ${(props) => props.totalLine && `calc(100vw / ${props.totalLine})`};

  height: 0.1875rem;
  position: relative;
  overflow: hidden;
  background-color: ${(props) =>
    props.index >= props.activeIndex ? "#ddd" : "var(--primary)"};
  -webkit-border-radius: 1.25rem;
  -moz-border-radius: 1.25rem;
  border-radius: 1.25rem;

  cursor: pointer;

  ${(props) =>
    props.index === props.activeIndex &&
    `
  :before {
    content: "";
    position: absolute;
    left: 0;
    height: .1875rem;
    background-color: var(--primary);
    ${
      !props.restartImage && props.currentImage
        ? `-webkit-animation: lineAnim 5s linear;
    -moz-animation: lineAnim 5s linear;
    animation: lineAnim 5s linear;
    `
        : ""
    }
    -webkit-border-radius: 1.25rem;
    -moz-border-radius: 1.25rem;
    border-radius: 1.25rem;
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

  @media (min-width: ${gridBreakpoint.lg}) {
    width: ${(props) => props.totalLine && `calc(35vw / ${props.totalLine})`};
  }
`;
