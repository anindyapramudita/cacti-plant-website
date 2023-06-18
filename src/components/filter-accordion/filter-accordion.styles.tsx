import { gridBreakpoint } from "@/shared/breakpoints";
import { ralewayThin } from "@/styles/fonts";
import styled from "styled-components";

export const StylesWrapper = styled.div<{
  //  isOpen: boolean
}>`
  // ${ralewayThin}

  .content {
    max-height: 0;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0, 1, 0, 1);
    margin: 1rem;

    .content-row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    .buttons {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .content.show {
    max-height: 100vh;
    padding: 1rem;
    height: auto;
    border-top: 1px solid var(--disabled-light);
    border-bottom: 1px solid var(--disabled-light);
    transition: all 0.3s cubic-bezier(1, 0, 1, 0);
  }

  @media (min-width: ${gridBreakpoint.sm}) {
  }

  @media (min-width: ${gridBreakpoint.md}) {
    .content {
      .content-row {
        flex-direction: row;
        gap: 2rem;
      }
    }
  }

  @media (min-width: ${gridBreakpoint.lg}) {
  }

  @media (min-width: ${gridBreakpoint.xl}) {
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
  }
`;
