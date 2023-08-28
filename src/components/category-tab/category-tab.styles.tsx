import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{
  buttonStart: number;
  buttonEnd: number;
  clicked?: boolean;
}>`
  --button-size: 50px;
  --button-gap: 16px;
  --button-border: none;
  --button-background-color: var(--white);
  --button-border-radius: 9px;
  --button-box-shadow: 0 4px 30px rgb(0, 0, 0, 15%);
  --button-cursor: pointer;
  --button-outline-gap: -3.5px;
  --button-outline-size: 57px;
  --button-outline-border: solid 3px #43755c;
  --button-outline-border-radius: 20px;

  --outline-wrapper-position: absolute;
  --outline-wrapper-display: flex;
  --outline-wrapper-flex-direction: column;
  --outline-wrapper-align-items: center;

  --button-1-top: var(--button-outline-gap);
  --button-2-top: var(--button-outline-gap);
  --button-3-top: var(--button-outline-gap);
  --button-4-top: var(--button-outline-gap);
  --button-5-top: calc(
    var(--button-outline-gap) + (var(--button-size)) + (var(--button-gap))
  );
  --button-6-top: calc(
    var(--button-outline-gap) + (var(--button-size)) + (var(--button-gap))
  );
  --button-1-left: var(--button-outline-gap);
  --button-2-left: calc(
    var(--button-outline-gap) + (var(--button-size)) + (var(--button-gap))
  );
  --button-3-left: calc(
    var(--button-outline-gap) + (2 * var(--button-size)) +
      (2 * var(--button-gap))
  );
  --button-4-left: calc(
    var(--button-outline-gap) + (3 * var(--button-size)) +
      (3 * var(--button-gap))
  );
  --button-5-left: calc(
    var(--button-outline-gap) + (var(--button-size)) + (var(--button-gap))
  );
  --button-6-left: calc(
    var(--button-outline-gap) + (2 * var(--button-size)) +
      (2 * var(--button-gap))
  );

  --button-5-grid-column: 2;
  --button-5-grid-row: 2;
  --button-6-grid-column: 3;
  --button-6-grid-row: 2;

  --wrapper-position: relative;
  --wrapper-display: inline-grid;
  --wrapper-grid-template-columns: repeat(4, 1fr);
  --wrapper-width: max-content;
  --wrapper-justify-items: center;
  --wrapper-border-bottom: none;
  --wrapper-padding-bottom: 0;

  --outline-transition: top 0.5s, left 0.5s;

  position: var(--wrapper-position);
  display: var(--wrapper-display);
  grid-template-columns: var(--wrapper-grid-template-columns);
  width: var(--wrapper-width);
  justify-items: var(--wrapper-justify-items);
  gap: var(--button-gap);
  border-bottom: var(--wrapper-border-bottom);
  padding-bottom: var(--wrapper-padding-bottom);

  .button-5 {
    grid-column: var(--button-5-grid-column);
    grid-row: var(--button-5-grid-row);
  }

  .button-6 {
    grid-column: var(--button-6-grid-column);
    grid-row: var(--button-6-grid-row);
  }

  .category-button {
    width: var(--button-size);
    height: var(--button-size);
    border: var(--button-border);
    background-color: var(--button-background-color);
    border-radius: var(--button-border-radius);
    box-shadow: var(--button-box-shadow);
    cursor: var(--button-cursor);
  }

  .outline-wrapper {
    position: var(--outline-wrapper-position);
    display: var(--outline-wrapper-display);
    flex-direction: var(--outline-wrapper-flex-direction);
    align-items: var(--outline-wrapper-align-items);
    top: ${(props) =>
      props.buttonEnd
        ? `var(--button-${props.buttonEnd}-top)`
        : "var(--button-0-top)"};
    left: ${(props) =>
      props.buttonEnd
        ? `var(--button-${props.buttonEnd}-left)`
        : "var(--button-0-left)"};

    transition: var(--outline-transition);

    .button-outline {
      width: var(--button-outline-size);
      height: var(--button-outline-size);
      border: var(--button-outline-border);
      border-radius: var(--button-outline-border-radius);
    }
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --button-size: 60px;
    --button-outline-size: 67px;
    --button-gap: 24px;
    --wrapper-display: flex;

    --button-5-top: var(--button-outline-gap);
    --button-6-top: var(--button-outline-gap);
    --button-5-left: calc(
      var(--button-outline-gap) + (4 * var(--button-size)) +
        (4 * var(--button-gap))
    );
    --button-6-left: calc(
      var(--button-outline-gap) + (5 * var(--button-size)) +
        (5 * var(--button-gap))
    );
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    --wrapper-border-bottom: solid 3px var(--new-primary);
    --wrapper-padding-bottom: 17.5px;

    --arrow-width: 0;
    --arrow-border: 7.5px solid transparent;
    --arrow-border-bottom: 15px solid var(--new-primary);

    .arrow-up {
      width: var(--arrow-width);
      height: var(--arrow-width);
      border-left: var(--arrow-border);
      border-right: var(--arrow-border);
      border-bottom: var(--arrow-border-bottom);
    }
  }
`;
