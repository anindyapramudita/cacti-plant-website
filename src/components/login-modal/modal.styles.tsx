import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  .modal-overlay {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: red;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &.modal-hidden {
    display: none;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  .close-button {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    color: var(--primary);
    cursor: pointer;
  }
`;
