import { gridBreakpoint } from "@/shared/breakpoints";
import { errorMessage } from "@/styles/error-text.styles";
import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .image-side {
    position: relative;
    width: 100vw;

    .welcome-header {
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
      color: white;
      text-shadow: 1px 1px 4px #000000;

      .header-text {
        font-size: 30px;
      }

      .logo-text {
        font-size: 48px;
      }
    }
  }

  .register-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .register-header {
      display: none;
    }

    .input-wrapper {
      margin: 2rem 0 0 0;
    }

    .error-message {
      ${errorMessage}
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
      height: calc(100vh - var(--header-height));

      .welcome-header {
        display: none;
      }
    }

    .form-wrapper {
      width: 50vw;

      register-header {
        display: block;
        margin: 2rem 0 0 0;
      }
    }
  }
`;
