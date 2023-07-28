import { errorMessage } from "@/styles/error-text.styles";
import { ralewayThin } from "@/styles/fonts";
import styled from "styled-components";

export const StylesWrapper = styled.div<{
  isForgotPassword: boolean;
}>`
  ${ralewayThin}

  position: absolute;
  top: 50%;
  left: ${(props) => (props.isForgotPassword ? "50%" : "175%")};
  transform: translate(-50%, -50%);
  width: 20rem;
  height: 27rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: left 0.5s;

  .heading-wrapper {
    display: flex;
    justifyContent: center;
    alignItems center;
    gap: .5rem;
  }

  .back-button {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    border: none;
    background-color: transparent;
    color: var(--primary);
    cursor: pointer;
  }

  .modal-header {
    margin: 1.5rem 0;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .text-heading {
      line-height: 1.5rem;
    }

    .text-subtitle {
      font-size: 0.875rem;
    }
  }

  .submit-button {
    margin: 1rem 0 0 0;
  }

  .error-message {
    ${errorMessage}
    margin: .25rem 0 0 0;
  }
`;
