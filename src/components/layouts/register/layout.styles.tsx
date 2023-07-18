import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .image-side {
    position: relative;
    width: 100vw;

    div {
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
      color: white;
      text-shadow: 1px 1px 4px #000000;

      h3 {
        font-size: 30px;
      }

      h1 {
        font-size: 48px;
      }
    }
  }

  .form-wrapper > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1 {
      display: none;
    }
    .input-wrapper {
      margin: 2rem 0 0 0;
    }

    .error-message {
      color: red;
      font-size: 0.725rem;
      font-style: italic;
      margin: 1rem 0;
    }

    button[type="submit"].error-hidden {
      margin: 2rem 0;
    }
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    flex-direction: row;
    justify-content: center;
    .image-side {
      position: relative;
      width: 50vw;
      height: calc(100vh - 3rem);

      div {
        display: none;
      }
    }

    .form-wrapper {
      width: 50vw;
      h1 {
        display: block;
        margin: 2rem 0 0 0;
      }
    }
  }
`;
