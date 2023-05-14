import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  position: relative;
  display: flex;
  flex-direction: column;

  .plant-image {
    height: 50vh;
  }

  .plant-details {
    padding: 20px;
    text-align: justify;
    height: calc(100vh - 50vh - 3rem);
  }

  h3 {
    line-height: 1.5rem;
  }

  @media (min-width: ${gridBreakpoint.sm}) {
  }

  @media (min-width: ${gridBreakpoint.md}) {
    h3 {
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  @media (min-width: ${gridBreakpoint.lg}) {
  }

  @media (min-width: ${gridBreakpoint.xl}) {
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
  }
`;
