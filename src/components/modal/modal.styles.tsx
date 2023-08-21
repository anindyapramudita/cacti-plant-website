import styled from "styled-components";

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
  z-index: 3;
  padding: 2rem;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    color: var(--primary);
    cursor: pointer;
  }
`;
