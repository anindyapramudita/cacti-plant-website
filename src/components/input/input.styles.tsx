import { ralewayThin } from "@/styles/fonts";
import styled from "styled-components";

export const StylesWrapper = styled.div<{
  width?: string;
}>`
  ${ralewayThin}

  --wrapper-position: relative;
  --wrapper-margin: 1rem 0;
  --wrapper-width: ${(props) => (props.width ? props.width : "15rem")};

  --border-color: var(--disabled-dark);

  --input-min-height: 2.5rem;
  --input-width: 100%;
  --input-border: 1px solid var(--border-color);
  --input-border-radius: 5px;
  --input-padding: 0.5rem;
  --input-outline: none !important;

  --label-position: absolute;
  --label-top: 1.25rem;
  --label-padding: 0;
  --label-transform: translate(0, -50%);
  --label-font-size: 0.9rem;
  --label-transition: top 0.3s, font-size 0.3s, padding 0.3s;
  --label-background-color: var(--white);
  --label-left: 0.4rem;
  --label-cursor: text;

  position: var(--wrapper-position);
  margin: var(--wrapper-margin);
  width: var(--wrapper-width);

  .input-component {
    height: var(--input-min-height);
    width: var(--input-width);
    border: var(--input-border);
    border-radius: var(--input-border-radius);
    padding: var(--input-padding);
    outline: var(--input-outline);
  }

  .input-label {
    position: var(--label-position);
    top: var(--label-top);
    transform: var(--label-transform);
    font-size: var(--label-font-size);
    -webkit-transition: var(--label-transition);
    background-color: var(--label-background-color);
    left: var(--label-left);
    cursor: var(--label-cursor);
  }

  .input-component:focus + .input-label,
  input-component:not(:placeholder-shown) + .input-label {
    --label-font-size: 0.75rem;
    --label-top: 0;
    --label-padding: 0.3rem;
  }

  .input-component:focus {
    --border-color: var(--secondary-light);
    --input-border: 2px solid var(--border-color);
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
