import { ralewayThin } from "@/styles/fonts";
import styled from "styled-components";

export const StylesWrapper = styled.button`
  ${ralewayThin}

  --button-padding: 8px 24px;
  --button-font-size: 1rem;
  --button-background-color: var(--new-primary);
  --button-color: var(--white);
  --button-border-color: var(--new-primary);
  --button-border: 0.0625rem solid var(--button-border-color);

  cursor: pointer;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: background-color 0.4s ease, border-color 0.4s ease;
  background-color: var(--button-background-color);
  border: var(--button-border);
  padding: var(--button-padding);
  color: var(--button-color);
  font-size: var(--button-font-size);
  border-radius: 8px;

  &:hover {
    color: var(--button-color);
    --button-background-color: var(--new-primary-dark);
    --button-border: 0.0625rem solid var(--new-primary-dark);
  }

  &.button-filled-secondary {
    --button-background-color: var(--new-secondary);
    --button-border: 0.0625rem solid var(--new-secondary);
    &:hover {
      --button-background-color: var(--new-secondary-dark);
      --button-border: 0.0625rem solid var(--new-secondary-dark);
    }
  }

  &.button-filled-monochrome {
    --button-background-color: var(--black);
    --button-border: 0.0625rem solid var(--black);
    &:hover {
      --button-background-color: var(--very-dark-grey);
      --button-border: 0.0625rem solid var(--very-dark-grey);
    }
  }

  &.button-outlined-primary,
  &.button-reversed-primary {
    --button-background-color: var(--white);
    --button-color: var(--new-primary);

    &:hover {
      --button-background-color: var(--new-primary);
      --button-border: 0.0625rem solid var(--new-primary);
      --button-color: var(--white);
    }
  }

  &.button-outlined-secondary,
  &.button-reversed-secondary {
    --button-background-color: var(--white);
    --button-color: var(--new-secondary);

    &:hover {
      --button-background-color: var(--new-secondary);
      --button-border: 0.0625rem solid var(--new-secondary);
      --button-color: var(--white);
    }
  }

  &.button-outlined-monochrome,
  &.button-reversed-monochrome {
    --button-background-color: var(--white);
    --button-border: 0.0625rem solid var(--very-dark-grey);
    --button-color: var(--black);

    &:hover {
      --button-background-color: var(--very-dark-grey);
      --button-border: 0.0625rem solid var(--very-dark-grey);
      --button-color: var(--white);
    }
  }

  &.button-outlined-secondary {
    --button-border: 0.0625rem solid var(--new-secondary);

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

    .button-icon {
      visibility: hidden;
    }

    &:hover {
      --button-background-color: var(--disabled-light);
      --button-border: 0.0625rem solid var(--disabled-light);
      cursor: default;
    }
  }
`;
