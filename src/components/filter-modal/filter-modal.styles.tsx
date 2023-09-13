import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --modal-width: 20rem;
  --modal-height: max-content;
  --modal-padding: 1.5rem;
  --modal-position: relative;
  --modal-overflow: scroll;

  --form-wrapper-display: flex;
  --form-wrapper-flex-direction: column;
  --form-wrapper-gap: 24px;

  --level-wrapper-display: flex;
  --level-wrapper-flex-direction: column;
  --level-wrapper-gap: 8px;

  --level-heading-font-size: 16px;

  --checkbox-fieldset-border: none;
  --checkbox-fieldset-display: grid;
  --checkbox-fieldset-grid-template-columns: repeat(2, 1fr);
  --checkbox-fieldset-grid-gap: 16px;

  --button-divider-height: 1px;
  --button-divider-width: 100%;
  --button-divider-background-color: #d9d9d9;

  --button-wrapper-display: flex;
  --button-wrapper-gap: 16px;

  --scrollbar-display: none;

  width: var(--modal-width);
  height: max-content;
  padding: var(--modal-padding);
  position: var(--modal-position);
  overflow-y: var(--modal-overflow);

  .form-wrapper {
    display: var(--form-wrapper-display);
    flex-direction: var(--form-wrapper-flex-direction);
    gap: var(--form-wrapper-gap);

    .level-wrapper {
      display: var(--level-wrapper-display);
      flex-direction: var(--level-wrapper-flex-direction);
      gap: var(--level-wrapper-gap);

      .level-heading {
        font-size: var(--level-heading-font-size);
      }

      .checkbox-fieldset-container,
      .radio-fieldset-container {
        border: var(--checkbox-fieldset-border);
        display: var(--checkbox-fieldset-display);
        grid-template-columns: var(--checkbox-fieldset-grid-template-columns);
        grid-gap: var(--checkbox-fieldset-grid-gap);
      }

      .radio-fieldset-container {
        --checkbox-fieldset-grid-template-columns: repeat(4, 1fr);
      }
    }

    .button-divider {
      height: var(--button-divider-height);
      width: var(--button-divider-width);
      background-color: var(--button-divider-background-color);
    }

    .button-wrapper {
      display: var(--button-wrapper-display);
      gap: var(--button-wrapper-gap);
    }
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --modal-width: 440px;
    --modal-height: 600px;

    ::-webkit-scrollbar {
      display: var(--scrollbar-display);
    }

    .form-wrapper {
      .level-wrapper {
        .checkbox-fieldset-container {
          --checkbox-fieldset-grid-template-columns: repeat(4, 1fr);
        }
      }
    }
  }
`;
