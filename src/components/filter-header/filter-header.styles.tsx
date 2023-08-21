import styled from "styled-components";

export const StylesWrapper = styled.nav`
  --filter-display: flex;
  --filter-align-items: center;
  --filter-justify-content: center;
  --filter-gap: 0.6rem;

  --button-background-color: transparent;
  --button-border: none;
  --button-cursor: pointer;
  --button-display: flex;
  --button-align-items: center;
  --button-justify-content: center;
  --button-padding: 0.1875rem;
  --button-border-radius: 20%;
  --button-color: var(--primary);

  .filter-top {
    display: var(--filter-display);
    align-items: var(--filter-align-items);
    justify-content: var(--filter-justify-content);
    gap: var(--filter-gap);
  }

  .filter-button {
    background-color: var(--button-background-color);
    border: var(--button-border);
    cursor: var(--button-cursor);
    display: var(--button-display);
    align-items: var(--button-align-items);
    justify-content: var(--button-justify-content);
    padding: var(--button-padding);
    border-radius: var(--button-border-radius);
    color: var(--button-color);
  }

  .filter-button.clicked {
    --button-background-color: var(--primary);
    --button-color: var(--white);
  }
`;
