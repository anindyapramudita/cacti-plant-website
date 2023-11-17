import styled from "styled-components";

export const StylesWrapper = styled.div<{ color: string }>`
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
    width: 20px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: ${(props) => (props.color ? props.color : "black")};
    cursor: pointer;
  }

  .check-box-input:checked + label {
    outline: 2px solid var(--light-grey);
    outline-offset: 2px;
    /* border: 1px solid var(--black); */
    /* background-color: var(--light-grey);
    color: white; */
  }
`;
