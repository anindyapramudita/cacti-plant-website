import { gridBreakpoint } from "@/shared/breakpoints";
import { ralewayThin } from "@/styles/fonts";
import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  ${ralewayThin}

  display: flex;

  button {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .button {
    padding: 0.5rem 1rem;
    border: 1px solid var(--primary);
    border-left: none;
    transition: background-color 0.3s ease-in;
    path,
    svg,
    .g-stroke {
      stroke: var(--primary);
    }

    .g-stroke {
      fill: var(--primary);
    }
  }

  .button:first-child {
    border-left: 1px solid var(--primary);
    border-radius: 15px 0 0 15px;
  }

  .button:last-child {
    border-radius: 0 15px 15px 0;
  }

  .button.selected {
    background-color: var(--primary);
    transition: background-color 0.3s ease-in;
    color: white;

    path,
    svg,
    .g-stroke {
      stroke: white;
    }
    ,
    .g-stroke {
      fill: white;
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

export const ButtonWrapper = styled.button<{ selected: boolean }>`
  padding: 1rem 0.5rem;
  // background-color: ${(props) =>
    props.selected ? "var(--primary)" : "white"};

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
