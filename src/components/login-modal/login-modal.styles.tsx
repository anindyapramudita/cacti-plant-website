import { ralewayThin } from "@/styles/fonts";
import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  ${ralewayThin}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 3rem;

  .modal-header {
    margin: 1.5rem 0 3rem 0;
    text-align: center;
  }

  .input-container {
    position: relative;
    margin: 1rem 0;
  }

  label {
    position: absolute;
    left: 0.25rem;
    top: 50%;
    transform: translate(0, -50%);
  }

  input {
    height: 2.5rem;
    width: 15rem;
    border: 1px solid var(--disabled-dark);
    border-radius: 5px;
    padding: 0.5rem;
  }

  input + label {
    font-size: 0.9rem;
    -webkit-transition: top 0.3s, font-size 0.3s, padding 0.3s;
    background-color: var(--white);
    left: 0.4rem;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    font-size: 0.75rem;
    top: 0;
    padding: 0.3rem;
  }

  input:focus {
    outline: none !important;
    border: 2px solid var(--secondary-light);
  }

  input:not(:placeholder-shown) {
  }

  .eye-icon {
    position: absolute;
    right: 0.25rem;
    top: 50%;
    transform: translate(0, -50%);

    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .error-message {
    color: red;
    font-size: 0.725rem;
    font-style: italic;
    margin: 1rem 0;
  }

  .footer-container {
    margin-top: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .or-container {
      font-size: var(--font-size--small);

      p.no-span {
        display: table;
        white-space: nowrap;
        &:before,
        &:after {
          border-top: 1px solid var(--disabled-dark);
          content: "";
          display: table-cell;
          position: relative;
          top: 0.5em;
          width: 45%;
        }
        &:before {
          right: 1.5%;
        }
        &:after {
          left: 1.5%;
        }
      }
    }

    button {
      border: none;
      background-color: transparent;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      cursor: pointer;
    }
  }
`;
