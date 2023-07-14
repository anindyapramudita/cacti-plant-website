import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{
  //  isOpen: boolean
}>`
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

  input[type="checkbox"].button + label {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    width: 4.8em;
    height: 3.5em;
    color: var(--primary);
    cursor: pointer;
    border: 1px solid var(--primary);
    border-left: none;
    margin-top: 0.5em;
    padding: 0.3em;
  }

  input[type="checkbox"].first-child + label {
    border-left: 1px solid var(--primary);
    border-radius: 15px 0 0 15px;
  }

  input[type="checkbox"].last-child + label {
    border-radius: 0 15px 15px 0;
  }

  input[type="checkbox"].button:checked + label {
    background-color: var(--primary);
    color: var(--white);
  }

  .button-group {
    display: flex;
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
