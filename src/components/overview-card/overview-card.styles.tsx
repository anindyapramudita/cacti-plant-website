import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const OverviewCardWrapper = styled.div<{}>`
  margin-top: 0.75rem;

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

export const StylesWrapper = styled.div<{}>`
  max-height: calc(100vh - 50vh - 3rem - 1.5rem - 0.75rem - 0.625rem - 4rem);
  border: solid 1px var(--primary);
  border-radius: 0.625rem;
  border-top-left-radius: 0;
  padding: 0.5rem;
  position: relative;
  top: -1.2px;
  z-index: -10;

  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

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
