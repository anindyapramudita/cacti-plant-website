import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  display: flex;
  gap: 1rem;
  margin: 1rem;
  justify-content: center;

  .page-button {
    background-color: transparent;
    border: none;
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }

  .active {
    background-color: var(--secondary-light);
    border-radius: 50%;
    color: var(--white);
  }
`;
