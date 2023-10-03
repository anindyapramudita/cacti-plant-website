import styled from "styled-components";

export const StylesWrapper = styled.div`
  --modal-display: flex;
  --modal-flex-direction: column;
  --modal-gap: 24px;
  --modal-padding: 24px;
  --modal-min-width: 300px;

  --description-text-font-size: 14px;

  --button-wrapper-display: flex;
  --button-wrapper-justify-content: space-between;

  display: var(--modal-display);
  flex-direction: var(--modal-flex-direction);
  gap: var(--modal-gap);
  padding: var(--modal-padding);
  min-width: var(--modal-min-width);

  .description-text {
    font-size: var(--description-text-font-size);
  }

  .button-wrapper {
    display: var(--button-wrapper-display);
    justify-content: var(--button-wrapper-justify-content);
  }
`;
