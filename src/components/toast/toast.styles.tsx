import styled from "styled-components";

export const StylesWrapper = styled.div`
  --toast-position: absolute;
  --toast-top: 0.5rem;
  --toast-bottom: 0.5rem;
  --toast-right: 1rem;
  --toast-left: 1rem;
  --toast-padding: 1rem;
  --toast-border-radius: 0.25rem;
  --toast-display: flex;
  --toast-align-items: center;
  --toast-gap: 3rem;
  --toast-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  --toast-z-index: 100;

  --message-gap: 0.5rem;
  --message-font-size: 12px;

  --border-color: var(--black);
  --border-left: 0.375rem solid var(--border-color);
  --icon-color: var(--black);
  --success-color: #23d578;
  --warning-color: #ffbf19;
  --error-color: #ff6e6e;
  --button-background-color: transparent;
  --button-border: none;
  --button-cursor: pointer;
  --button-display: flex;
  --button-align-items: center;

  position: var(--toast-position);
  border-left: var(--border-left);
  padding: var(--toast-padding);
  border-radius: var(--toast-border-radius);
  display: var(--toast-display);
  align-items: var(--toast-align-items);
  gap: var(--toast-gap);
  box-shadow: var(--toast-box-shadow);
  z-index: var(--toast-z-index);
  background-color: var(--white);

  .toast-message {
    display: var(--toast-display);
    align-items: var(--toast-align-items);
    gap: var(--message-gap);
    font-size: var(--message-font-size);
    .message-icon {
      color: var(--icon-color);
    }
  }
  .close-icon {
    color: var(--new-secondary);
  }

  &.toast-success {
    --border-color: var(--success-color);
    .message-icon {
      --icon-color: var(--success-color);
    }
  }
  &.toast-warning {
    --border-color: var(--warning-color);
    .message-icon {
      --icon-color: var(--warning-color);
    }
  }
  &.toast-error {
    --border-color: var(--error-color);
    .message-icon {
      --icon-color: var(--error-color);
    }
  }
  &.toast-top {
    top: var(--toast-top);
  }
  &.toast-bottom {
    bottom: var(--toast-bottom);
  }
  &.toast-left {
    left: var(--toast-left);
    animation: toast-in-left 5000ms;
  }
  &.toast-right {
    right: var(--toast-right);
    animation: toast-in-right 5000ms;
  }
  @keyframes toast-in-right {
    0% {
      transform: translateX(100%);
    }
    5% {
      transform: translateX(0);
    }
    95% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
  @keyframes toast-in-left {
    0% {
      transform: translateX(-100%);
    }
    5% {
      transform: translateX(0);
    }
    95% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
