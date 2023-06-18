import { gridBreakpoint } from "@/shared/breakpoints";
import { ralewayThin } from "@/styles/fonts";
import styled from "styled-components";

export const StylesWrapper = styled.nav<{}>`
  // ${ralewayThin}

  .filter-top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .filter-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.1875rem;
    border-radius: 20%;
  }

  .filter-button.clicked {
    background-color: var(--primary);

    svg,
    path {
      stroke: white;
    }
  }

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
