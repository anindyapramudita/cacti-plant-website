import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  width: max-content;
  position: relative;

  input {
    border: 1px solid var(--disabled-dark);
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    width: 150px;
    transition: width 1s ease;

    &:focus {
      outline: none;
      border: 0.5px solid var(--primary);
      width: 200px;

      ::placeholder {
        color: transparent;
      }
    }
  }

  .search-button {
    position: absolute;
    right: 4.25px;
    top: 4.25px;
    border: none;
    background-color: var(--primary);
    border-radius: 100%;
    width: 25px;
    height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  @media (min-width: ${gridBreakpoint.lg}) {
  }
`;
