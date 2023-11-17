import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  --checkbox-container-display: flex;
  --checkbox-container-gap: 8px;
  --checkbox-container-align-items: center;

  --checkbox-input-accent-color: var(--black);
  --checkbox-input-width: 20px;
  --checkbox-input-height: 20px;
  --checkbox-input-cursor: pointer;

  display: var(--checkbox-container-display);
  gap: var(--checkbox-container-gap);
  align-items: var(--checkbox-container-align-items);

  .check-box-input {
    accent-color: var(--checkbox-input-accent-color);
    width: var(--checkbox-input-width);
    height: var(--checkbox-input-height);
    cursor: var(--checkbox-input-cursor);
  }

  .check-box-input + label {
    border: 1px solid var(--light-grey);
    padding: 0.5rem;
    border-radius: 8px;
    background-color: white;
    color: black;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .check-box-input:checked + label {
    /* border: 1px solid var(--black); */
    background-color: var(--light-grey);
    color: white;
  }
`;
