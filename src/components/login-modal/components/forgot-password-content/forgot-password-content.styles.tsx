import { gridBreakpoint } from "@/shared/breakpoints";
import { ralewayThin } from "@/styles/fonts";
import styled from "styled-components";

export const StylesWrapper = styled.div<{
  isForgotPassword: boolean;
}>`
  ${ralewayThin}

  --content-position: absolute;
  --content-top: 50%;
  --content-left: ${(props) => (props.isForgotPassword ? "50%" : "175%")};
  --content-transform: translate(-50%, -50%);
  --content-width: 20rem;
  --content-height: 27rem;
  --content-display: flex;
  --content-flex-direction: column;
  --content-justify-content: center;
  --content-align-items: center;
  --content-transition: left 0.5s;
  --content-gap: 32px;

  --header-text-align: center;
  --header-margin: 1.5rem 0;
  --header-gap: 1rem;

  --heading-font-size: 24px;
  --heading-font-weight: 400;
  --heading-line-height: 40px;

  --button-margin: 1rem 0 0 0;

  --back-button-position: absolute;
  --back-button-top: 0;
  --back-button-left: 0;
  --back-button-border: none;
  --back-button-background-color: transparent;
  --back-button-color: var(--primary);
  --back-button-cursor: pointer;

  --error-margin: 0.25rem 0 0 0;

  position: var(--content-position);
  top: var(--content-top);
  left: var(--content-left);
  transform: var(--content-transform);
  width: var(--content-width);
  height: var(--content-height);
  display: var(--content-display);
  flex-direction: var(--content-flex-direction);
  justify-content: var(--content-justify-content);
  align-items: var(--content-align-items);
  transition: var(--content-transition);
  gap: var(--content-gap);

  .back-button {
    position: var(--back-button-position);
    top: var(--back-button-top);
    left: var(--back-button-left);
    border: var(--back-button-border);
    background-color: var(--back-button-background-color);
    color: var(--back-button-color);
    cursor: var(--back-button-cursor);
  }

  .modal-header {
    display: var(--content-display);
    flex-direction: var(--content-flex-direction);
    align-items: var(--content-align-items);
    text-align: var(--header-text-align);
    gap: var(--header-gap);

    .heading-wrapper {
      display: var(--content-display);
      align-items: var(--content-align-items);
      gap: var(--header-gap);

      .mail-icon {
        color: var(--new-primary);
      }
    }

    .text-heading {
      font-size: var(--heading-font-size);
      font-weight: var(--heading-font-weight);
      line-height: var(--heading-line-height);
    }

    .text-subtitle {
      font-size: var(--font-size--small);
    }
  }

  .form-wrapper {
    display: var(--content-display);
    flex-direction: var(--content-flex-direction);
    gap: var(--content-gap);
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --content-width: 600px;
    --content-height: 500px;

    .modal-header {
      .text-heading {
        --heading-font-size: 40px;
        --heading-font-weight: 400;
      }
    }
  }
`;
