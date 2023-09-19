import { ralewayThin } from "@/styles/fonts";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  ${ralewayThin}
  --container-position: relative;
  --container-margin: 1rem 0 0 0;
  --container-width: max-content;

  --label-position: absolute;
  --label-left: 0.25rem;
  --label-top: 50%;
  --label-transform: translate(0, -50%);
  --label-color: var(--disabled-dark);
  --label-font-size: 0.9rem;
  --label-transition: top 0.3s, font-size 0.3s, padding 0.3s;
  --label-background-color: var(--white);
  --label-left: 0.4rem;
  --label-cursor: text;
  --label-padding: 0;
  --label-font-style: normal;

  --input-height: 2.5rem;
  --input-width: 15rem;
  --input-border: 1px solid var(--input-border-color);
  --input-border-radius: 5px;
  --input-padding: 0.5rem;
  --input-border-color: var(--new-secondary);
  --input-outline: none !important;
  --outline-color: var(--new-secondary);

  --icon-position: absolute;
  --icon-top: 50%;
  --icon-transform: translate(0, -50%);
  --icon-right: 0.25rem;

  --helper-text-font-size: 10px;
  --helper-text-font-style: italic;
  --helper-text-color: var(--black);

  &.wrapper {
    text-align: start;
    width: var(--input-width);
  }

  &.wrapper.fullwidth {
    width: 100%;
  }

  .input-container {
    position: var(--container-position);
    width: var(--container-width);

    .input-component {
      height: var(--input-height);
      width: var(--input-width);
      border: var(--input-border);
      border-radius: var(--input-border-radius);
      padding: var(--input-padding);
      border-color: var(--input-border-color);
    }

    .input-component.fullwidth {
    }
    --input-width: 100%;
    --container-width: 100%;

    .input-component.with-icon {
      --input-padding: 0.5rem 1.5rem 0.5rem 0.5rem;
    }

    .input-component.input-error {
      --input-border-color: var(--error-color);
    }

    .input-component.input-success {
      --input-border-color: var(--new-primary);
    }

    .input-component + .input-label {
      position: var(--label-position);
      left: var(--label-left);
      top: var(--label-top);
      transform: var(--label-transform);
      color: var(--label-color);
      font-size: var(--label-font-size);
      -webkit-transition: var(--label-transition);
      background-color: var(--label-background-color);
      left: var(--label-left);
      cursor: var(--label-cursor);
      padding: var(--label-padding);
      font-style: var(--label-font-style);
    }

    .input-component:focus + .input-label,
    .input-component:not(:placeholder-shown) + .input-label {
      --label-font-size: 0.75rem;
      --label-top: 0;
      --label-padding: 0.3rem;
      --label-color: var(--black);
      --label-font-style: italic;
    }

    .input-component:focus {
      outline: var(--input-outline);
      --input-border: 2px solid var(--outline-color);
    }

    .input-component.input-error:focus {
      --outline-color: var(--error-color);
    }

    .input-component.input-success:focus {
      --outline-color: var(--new-primary);
    }

    .icon {
      position: var(--icon-position);
      top: var(--icon-top);
      transform: var(--icon-transform);
      right: var(--icon-right);
    }
  }

  .helper-text {
    font-size: var(--helper-text-font-size);
    font-style: var(--helper-text-font-style);
    color: var(--helper-text-color);
  }

  .helper-text.helper-text-success {
    --helper-text-color: var(--new-primary);
  }

  .helper-text.helper-text-error {
    --helper-text-color: var(--error-color);
  }
`;
