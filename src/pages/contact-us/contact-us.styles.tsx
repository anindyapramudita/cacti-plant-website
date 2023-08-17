import { gridBreakpoint } from "@/shared/breakpoints";
import { errorMessage } from "@/styles/error-text.styles";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --layout-display: flex;
  --layout-flex-direction: column;
  --layout-align-items: center;
  --layout-text-align: center;

  --image-wrapper-position: relative;
  --image-wrapper-width: 100vw;
  --image-wrapper-height: auto;

  --form-wrapper-width: 100%;

  --form-display: flex;
  --form-flex-direction: column;
  --form-justify-content: center;
  --form-align-items: center;
  --form-text-align: center;

  --input-margin: 1rem 0 0 0;
  --button-margin: 1rem 0;

  display: var(--layout-display);
  flex-direction: var(--layout-flex-direction);
  align-items: var(--layout-align-items);
  text-align: var(--layout-text-align);

  .image-side {
    position: var(--image-wrapper-position);
    width: var(--image-wrapper-width);
    height: var(--image-wrapper-height);
  }

  .form-wrapper {
    width: var(--form-wrapper-width);

    .contact-us-form {
      display: var(--form-display);
      flex-direction: var(--form-flex-direction);
      justify-content: var(--form-justify-content);
      align-items: var(--form-align-items);
      text-align: var(--form-text-align);

      .input-wrapper,
      .textarea-wrapper {
        margin: var(--input-margin);
      }

      .error-message {
        ${errorMessage}
      }

      .send-button {
        margin: var(--button-margin);
      }
    }
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    --layout-flex-direction: row;

    .image-side {
      --image-wrapper-width: 50vw;
      --image-wrapper-height: calc(100vh - var(--header-height));
    }

    .form-wrapper {
      --form-wrapper-width: 50vw;
    }
  }
`;
