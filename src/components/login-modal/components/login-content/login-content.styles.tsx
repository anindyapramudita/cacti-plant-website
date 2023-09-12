import { gridBreakpoint } from "@/shared/breakpoints";
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
  --login-width: 600px;
  --login-height: 500px;
  --login-transition: left 0.5s;
  --login-gap: 32px;

  --modal-text-align: center;

  --heading-font-size: 24px;
  --heading-font-weight: 400;
  --heading-line-height: 40px;

  --form-width: 15rem;
  --form-display: flex;
  --form-flex-direction: column;
  --form-align-items: center;
  --form-gap: 24px;

  --forgot-password-text-align: end;
  --forgot-password-margin: 8px 0 0 0;
  --forgot-password-font-size: 12px;
  --forgot-password-font-style: italic;
  --forgot-password-text-decoration: underline;

  --button-border: none;
  --button-background-color: transparent;
  --button-gap: 0.3rem;
  --button-cursor: pointer;

  --footer-margin-top: 1rem;
  --footer-text-align: center;
  --footer-display: flex;
  --footer-flex-direction: column;
  --footer-gap: 32px;

  --divider-cursor: default;
  --divider-display: table;
  --divider-white-space: nowrap;

  --divider-after-border-top: 1px solid var(--disabled-dark);
  --divider-after-content: "";
  --divider-after-display: table-cell;
  --divider-after-position: relative;
  --divider-after-top: 0.6em;
  --divider-after-width: 50%;

  --divider-right: 1.5%;
  --divider-left: 1.5%;

  --password-container-width: 100%;

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
  gap: var(--login-gap);

  .modal-header {
    text-align: var(--modal-text-align);

    .heading-text {
      font-size: var(--heading-font-size);
      font-weight: var(--heading-font-weight);
      line-height: var(--heading-line-height);
    }
  }

  .form-wrapper {
    width: var(--form-width);
    display: var(--form-display);
    flex-direction: var(--form-flex-direction);
    align-items: var(--form-align-items);
    gap: var(--form-gap);
  }

  .password-container {
    text-align: var(--forgot-password-text-align);
    width: var(--password-container-width);

    .forgot-password {
      margin: var(--forgot-password-margin);
      font-size: var(--forgot-password-font-size);
      font-style: var(--forgot-password-font-style);
    }

    .forgot-password:hover {
      text-decoration: var(--forgot-password-text-decoration);
    }
  }

  .google-sign-in,
  .forgot-password {
    border: var(--button-border);
    background-color: var(--button-background-color);
    gap: var(--button-gap);
    cursor: var(--button-cursor);
  }

  .footer-container {
    width: var(--form-width);
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
          border-color: var(--new-secondary);
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

  @media (min-width: ${gridBreakpoint.md}) {
    --login-width: 600px;
    --login-height: 500px;

    .modal-header {
      .heading-text {
        --heading-font-size: 40px;
        --heading-font-weight: 400;
      }
    }
  }
`;
