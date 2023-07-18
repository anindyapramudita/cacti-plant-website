import styled from "styled-components";

export const StylesWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin: 0.5rem 0 0 0;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 7.5px solid #f3f3f3;
    border-top: 7.5px solid var(--primary);
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }

  .spinner-container {
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;
