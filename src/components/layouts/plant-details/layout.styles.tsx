import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
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
    padding: 0 2rem;
    flex-direction: row;

    .plant-image {
      position: relative;
      margin: 2rem 0;
      height: calc(100vh - 3rem - 4rem);
      width: 35vw;
    }

    .plant-details {
      padding: 2rem;
      width: 65vw;
      height: calc(100vh - 3rem);
    }
  }

  @media (min-width: ${gridBreakpoint.xl}) {
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
  }
`;
