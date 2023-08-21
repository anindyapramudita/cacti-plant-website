import { errorMessage } from "@/styles/error-text.styles";
import { ralewayThin } from "@/styles/fonts";
import styled from "styled-components";

export const StylesWrapper = styled.div<{
  isForgotPassword: boolean;
}>`
  ${ralewayThin}

  --login-position: absolute;
  --login-top: 50%;
  --login-left: ${(props) => (props.isForgotPassword ? "-75%" : "50%")};
  --login-transform: translate(-50%, -50%);
  --login-display: flex;
  --login-flex-direction: column;
  --login-justify-content: center;
  --login-align-items: center;
  --login-padding: 3rem;
  --login-width: 20rem;
  --login-height: 27rem;
  --login-transition: left 0.5s;

  --modal-margin: 1.5rem 0 3rem 0;
  --modal-text-align: center;

  --forgot-password-text-align: end;
  --forgot-password-margin: 0.25rem 0 1rem 0;

  --button-border: none;
  --button-background-color: transparent;
  --button-gap: 0.3rem;
  --button-cursor: pointer;

  --footer-margin-top: 1rem;
  --footer-text-align: center;
  --footer-display: flex;
  --footer-flex-direction: column;
  --footer-gap: 1rem;

  --divider-cursor: default;
  --divider-display: table;
  --divider-white-space: nowrap;

  --divider-after-border-top: 1px solid var(--disabled-dark);
  --divider-after-content: "";
  --divider-after-display: table-cell;
  --divider-after-position: relative;
  --divider-after-top: 0.5em;
  --divider-after-width: 45%;

  --divider-right: 1.5%;
  --divider-left: 1.5%;

  position: var(--login-position);
  top: var(--login-top);
  left: var(--login-left);
  transform: var(--login-transform);
  display: var(--login-display);
  flex-direction: var(--login-flex-direction);
  justify-content: var(--login-justify-content);
  align-items: var(--login-align-items);
  padding: var(--login-padding);
  width: var(--login-width);
  height: var(--login-height);
  transition: var(--login-transition);

  .modal-header {
    margin: var(--modal-margin);
    text-align: var(--modal-text-align);
  }

  .forgot-password-container {
    text-align: var(--forgot-password-text-align);
    margin: var(--forgot-password-margin);
  }

  .error-message {
    ${errorMessage}
  }

  .google-sign-in,
  .forgot-password {
    border: var(--button-border);
    background-color: var(--button-background-color);
    gap: var(--button-gap);
    cursor: var(--button-cursor);
  }

  .footer-container {
    margin-top: var(--footer-margin-top);
    text-align: var(--footer-text-align);
    display: var(--footer-display);
    flex-direction: var(--footer-flex-direction);
    gap: var(--footer-gap);

    .or-container {
      font-size: var(--font-size--small);

      .or-span {
        cursor: var(--divider-cursor);
        display: var(--divider-display);
        white-space: var(--divider-white-space);
        &:before,
        &:after {
          border-top: var(--divider-after-border-top);
          content: var(--divider-after-content);
          display: var(--divider-after-display);
          position: var(--divider-after-position);
          top: var(--divider-after-top);
          width: var(--divider-after-width);
        }
        &:before {
          right: var(--divider-right);
        }
        &:after {
          left: var(--divider-left);
        }
      }
    }
  }
`;
