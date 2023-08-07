import styled from "styled-components";

export const StylesWrapper = styled.div`
  --pagination-display: flex;
  --pagination-gap: 1rem;
  --pagination-margin: 1rem;
  --pagination-justify-content: center;

  --button-background-color: transparent;
  --button-border: none;
  --button-size: 2rem;
  --button-cursor: pointer;
  --button-color: var(--black);
  --button-border-radius: 0%;

  display: var(--pagination-display);
  gap: var(--pagination-gap);
  margin: var(--pagination-margin);
  justify-content: var(--pagination-justify-content);

  .page-button {
    background-color: var(--button-background-color);
    border: var(--button-border);
    width: var(--button-size);
    height: var(--button-size);
    cursor: var(--button-cursor);
    border-radius: var(--button-border-radius);
    color: var(--button-color);

    &:disabled {
      --button-cursor: default;
    }
  }

  .page-button.active {
    --button-border-radius: 50%;
    --button-background-color: var(--secondary-light);
    --button-color: var(--white);
  }
`;
