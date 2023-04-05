import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{
  showSummary: boolean;
}>`
  position: relative;
  overflow: hidden;

  div {
    top: ${(props) => props.showSummary && "80%"};
  }

  @media (min-width: ${gridBreakpoint.sm}) {
  }

  @media (min-width: ${gridBreakpoint.md}) {
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    top: 0%;

    &:hover div {
      top: 80%;
    }
  }

  @media (min-width: ${gridBreakpoint.xl}) {
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
  }
`;

export const OverlayWrapper = styled.div<{}>`
  display: block;
  position: absolute;
  top: 100%;
  background: rgba(18, 49, 50, 0.8);
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  transition: top 0.5s ease-out;

  @media (min-width: ${gridBreakpoint.sm}) {
  }

  @media (min-width: ${gridBreakpoint.md}) {
  }

  @media (min-width: ${gridBreakpoint.lg}) {
  }

  @media (min-width: ${gridBreakpoint.xl}) {
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
  }
`;

export const SwipeUpWrapper = styled.button<{
  showSummary: boolean;
}>`
  position: absolute;
  bottom: ${(props) => (props.showSummary ? "20%" : "0")};
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white);
  text-shadow: 0.125rem 0.125rem 0.375rem #000000;
  transition: bottom 0.5s ease-out;

  background-color: transparent;
  border: none;

  @media (min-width: ${gridBreakpoint.sm}) {
  }

  @media (min-width: ${gridBreakpoint.md}) {
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    display: none;
  }

  @media (min-width: ${gridBreakpoint.xl}) {
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
  }
`;

export const FavoriteWrapper = styled.button<{ isLiked: boolean }>`
  position: absolute;
  margin: 0.625rem;
  top: 0;
  right: 0;
  cursor: pointer;

  background-color: transparent;
  border: none;

  svg {
    width: 45px;
    height: 45px;
    fill: ${(props) => (props.isLiked ? "#DB5461" : "var(--white)")};
    stroke: ${(props) => (props.isLiked ? "#DB5461" : "var(--white)")};
    transition: scale 0.2s ease-out, fill 0.5s ease;
  }

  svg:hover {
    transform: scale(1.1);
  }

  &:active svg {
    transform: scale(1);
  }

  &:hover {
  }

  @media (min-width: ${gridBreakpoint.sm}) {
  }

  @media (min-width: ${gridBreakpoint.md}) {
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    // display: none;
  }

  @media (min-width: ${gridBreakpoint.xl}) {
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
  }
`;
