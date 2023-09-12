import styled from "styled-components";

export const ModalWrapper = styled.div`
  --modal-position: fixed;
  --modal-top: 0;
  --modal-left: 0;
  --modal-width: 100%;
  --modal-height: 100%;
  --modal-background-color: rgba(250, 223, 180, 0.5);
  --modal-display: flex;
  --modal-justify-content: center;
  --modal-align-items: center;
  --modal-z-index: 3;
  --modal-padding: 2rem;

  --modal-content-position: relative;
  --modal-content-background-color: #fff;
  --modal-content-padding: 20px;
  --modal-content-border-radius: 10px;
  --modal-content-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  --close-button-position: absolute;
  --close-button-top: 1.5rem;
  --close-button-right: 1.5rem;
  --close-button-padding: 0;
  --close-button-margin: 0;
  --close-button-border: none;
  --close-button-background-color: transparent;
  --close-button-color: var(--new-secondary);
  --close-button-cursor: pointer;
  --close-icon-color: var(--new-secondary);

  position: var(--modal-position);
  top: var(--modal-top);
  left: var(--modal-left);
  width: var(--modal-width);
  height: var(--modal-height);
  background-color: var(--modal-background-color);
  display: var(--modal-display);
  justify-content: var(--modal-justify-content);
  align-items: var(--modal-align-items);
  z-index: var(--modal-z-index);
  padding: var(--modal-padding);

  .modal-content {
    position: var(--modal-content-position);
    background-color: var(--modal-content-background-color);
    padding: var(--modal-content-padding);
    border-radius: var(--modal-content-border-radius);
    box-shadow: var(--modal-content-box-shadow);

    .close-button {
      position: var(--close-button-position);
      top: var(--close-button-top);
      right: var(--close-button-right);
      padding: var(--close-button-padding);
      margin: var(--close-button-margin);
      border: var(--close-button-border);
      background-color: var(--close-button-background-color);
      color: var(--close-button-color);
      cursor: var(--close-button-cursor);

      .close-icon {
        color: var(--close-icon-color);
      }
    }
  }
`;
