import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --content-max-height: 0;
  --content-height: auto;
  --content-overflow: hidden;
  --content-transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  --content-margin: 1rem;
  --content-padding: 0;
  --content-border: none;
  --content-transition: all 0.5s cubic-bezier(0, 1, 0, 1);

  --row-display: flex;
  --row-flex-direction: column;
  --row-justify-content: center;
  --row-align-items: center;
  --row-gap: 1rem;

  --buttons-margin-top: 1rem;
  --buttons-display: flex;
  --buttons-justify-content: center;
  --buttons-align-items: center;
  --buttons-gap: 0.5rem;

  --button-flex-direction: column;
  --button-justify-content: space-evenly;
  --button-align-items: center;
  --button-font-size: 14px;
  --button-width: 4.8em;
  --button-height: 3.5em;
  --button-color: var(--primary);
  --button-cursor: pointer;
  --button-border: 1px solid var(--primary);
  --button-border-left: none;
  --button-margin-top: 0.5em;
  --button-padding: 0.3em;
  --button-border-radius: 0;
  --button-background-color: var(--white);

  .content {
    max-height: var(--content-max-height);
    overflow: var(--content-overflow);
    transition: var(--content-transition);
    margin: var(--content-margin);
    height: var(--content-height);
    padding: var(--content-padding);
    border-top: var(--content-border);
    border-bottom: var(--content-border);

    .content-row {
      display: var(--row-display);
      flex-direction: var(--row-flex-direction);
      justify-content: var(--row-justify-content);
      align-items: var(--row-align-items);
      gap: var(--row-gap);
    }

    .buttons {
      margin: var(--buttons-margin-top);
      display: var(--buttons-display);
      justify-content: var(--buttons-justify-content);
      align-tems: var(--buttons-align-items);
      gap: var(--buttons-gap);
    }
  }

  .content.show {
    --content-max-height: 100vh;
    --content-padding: 1rem;
    --content-border: 1px solid var(--disabled-light);
    --content-transition: all 0.3s cubic-bezier(1, 0, 1, 0);
  }

  input[type="checkbox"].button + label {
    display: var(--buttons-display);
    flex-direction: var(--button-flex-direction);
    justify-content: var(--button-justify-content);
    align-items: var(--button-align-items);
    font-size: var(--button-font-size);
    width: var(--button-width);
    height: var(--button-height);
    color: var(--button-color);
    cursor: var(--button-cursor);
    border: var(--button-border);
    border-left: var(--button-border-left);
    margin-top: var(--button-margin-top);
    padding: var(--button-padding);
    border-radius: var(--button-border-radius);
    background-color: var(--button-background-color);
  }

  input[type="checkbox"].first-child + label {
    --button-border-left: 1px solid var(--primary);
    --button-border-radius: 15px 0 0 15px;
  }

  input[type="checkbox"].last-child + label {
    --button-border-radius: 0 15px 15px 0;
  }

  input[type="checkbox"].button:checked + label {
    --button-background-color: var(--primary);
    --button-color: var(--white);
  }

  .button-group {
    display: var(--buttons-display);
  }

  @media (min-width: ${gridBreakpoint.md}) {
    .content > .content-row {
      --row-flex-direction: row;
      --row-gap: 2rem;
    }
  }
`;
