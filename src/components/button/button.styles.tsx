import { ralewayThin } from "@/styles/fonts";
import styled from "styled-components";

export const StylesWrapper = styled.button`
  ${ralewayThin}

  --button-padding: 0.6875em 3em;
  --button-font-size: 1rem;
  --button-background-color: var(--primary);
  --button-color: var(--white);
  --button-border-color: var(--primary);
  --button-border: 0.0625rem solid var(--button-border-color);

  cursor: pointer;
  display: "inline-block";
  line-height: 1;
  transition: background-color 0.4s ease, border-color 0.4s ease;
  background-color: var(--button-background-color);
  border: var(--button-border);
  padding: var(--button-padding);
  color: var(--button-color);
  font-size: var(--button-font-size);

  &:hover {
    color: var(--button-color);
    --button-background-color: var(--primary-light);
    --button-border: 0.0625rem solid var(--primary-light);
  }

  &.button-filled-secondary {
    --button-background-color: var(--secondary);
    --button-border: 0.0625rem solid var(--secondary);
    &:hover {
      --button-background-color: var(--secondary-light);
      --button-border: 0.0625rem solid var(--secondary-light);
    }
  }

  &.button-outlined-primary,
  &.button-reversed-primary {
    --button-background-color: var(--white);
    --button-color: var(--primary);

    &:hover {
      --button-background-color: var(--primary);
      --button-border: 0.0625rem solid var(--primary);
      --button-color: var(--white);
    }
  }

  &.button-outlined-secondary,
  &.button-reversed-secondary {
    --button-background-color: var(--white);
    --button-color: var(--secondary);

    &:hover {
      --button-background-color: var(--secondary);
      --button-border: 0.0625rem solid var(--secondary);
      --button-color: var(--white);
    }
  }

  &.button-outlined-secondary {
    --button-border: 0.0625rem solid var(--secondary);

    &:hover {
      --button-color: var(--white);
    }
  }

  &.button-reversed-primary {
    --button-border: 0.0625rem solid var(--white);
  }

  &.button-reversed-secondary {
    --button-border: 0.0625rem solid var(--white);
  }

  &.size-small {
    --button-padding: 0.625rem 16px;
    --button-font-size: 0.875rem;
  }

  &.size-large {
    --button-padding: 0.7125em 3.0125em;
    --button-font-size: 1.125rem;
  }

  &.button-fullwidth {
    width: 100%;
  }

  &:disabled {
    --button-background-color: var(--disabled-light);
    --button-border: 0.0625rem solid var(--disabled-light);
    --button-color: var(--disabled-dark);
    cursor: default;
    position: relative;

    &:hover {
      --button-background-color: var(--disabled-light);
      --button-border: 0.0625rem solid var(--disabled-light);
      --button-color: var(--disabled-dark);
      cursor: default;
    }
  }

  &.button-loading {
    position: relative;
    --button-color: var(--black);

    color: transparent;

    &:hover {
      --button-background-color: var(--disabled-light);
      --button-border: 0.0625rem solid var(--disabled-light);
      cursor: default;
    }
  }
`;
