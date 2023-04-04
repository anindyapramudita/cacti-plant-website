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
  text-shadow: 2px 2px 6px #000000;
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
