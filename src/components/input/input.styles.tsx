import { ralewayThin } from "@/styles/fonts";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  ${ralewayThin}

  position: relative;
  margin: 1rem 0;
  width: max-content;

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
    cursor: text;
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
`;

export const InputWrapper = styled.input`
  ${ralewayThin}
`;
