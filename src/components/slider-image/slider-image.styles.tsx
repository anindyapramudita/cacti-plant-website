import styled from "styled-components";

export const StylesWrapper = styled.div<{
  width: number;
  height: number;
  currentId: number;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .image-wrapper {
    position: absolute;
    display: flex;
    left: ${(props) =>
      props.currentId ? `calc(${props.currentId} * -300px)` : "0"};
    transition: left 0.2s;

    .plant-image {
      flex-shrink: 0;
    }
  }

  .button-left,
  .button-right {
    position: absolute;
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));
  }

  .dot-counter {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    gap: 10px;

    .dot {
      height: 10px;
      width: 10px;
      background-color: var(--disabled-dark);
      border-radius: 50%;
    }

    .dot.active {
      background-color: var(--white);
    }
  }

  .button-left {
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
    color: var(--white);
    background-color: var(--disabled-dark);
    border-radius: 50%;
    visibility: hidden;
  }

  &:hover {
    .button-left,
    .button-right {
      visibility: visible;
    }
  }

  .button-left:disabled {
    visibility: hidden;
  }

  .button-right:disabled {
    visibility: hidden;
  }

  .button-right {
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
    color: var(--white);
    background-color: var(--disabled-dark);
    border-radius: 50%;
    visibility: hidden;
  }
`;
