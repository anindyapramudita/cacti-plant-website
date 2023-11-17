import styled from "styled-components";

export const StylesWrapper = styled.div`
  position: relative;
  cursor: help;
  width: max-content;
  height: max-content;

  .tooltip-wrapper {
    display: none;
  }

  &:hover {
    .tooltip-wrapper {
      position: absolute;
      bottom: calc(2.25rem);
      display: block;
      font-size: 10px;
      font-weight: 600;
      background-color: var(--dark-grey);
      color: white;
      padding: 0.375rem;
      /* min-width: 100px; */
      border-radius: 5px;
      z-index: 5;
      width: max-content;
      box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;
