import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 75%;
  justify-content: space-around;
  text-align: center;
  
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  div p {
    flex: 2;
    text-align: start;
  }
  @media (min-width: ${gridBreakpoint.sm}) {
  }
  
  @media (min-width: ${gridBreakpoint.md}) {
    width: 70%;
  }
  
  @media (min-width: ${gridBreakpoint.lg}) {
    width: 65%;
  }
  
  @media (min-width: ${gridBreakpoint.xl}) {
  }
  
  @media (min-width: ${gridBreakpoint.xxl}) {
    width: 50%;
  }
`;

export const LevelWrapper = styled.div<{}>`
  display: flex;
  justify-content: center;
  flex: 2;

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
