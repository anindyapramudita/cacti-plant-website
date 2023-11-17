import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  width: 100%;

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: grab;
    width: 100%;
    vertical-align: middle;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    background: var(--white);
    border-top: 1px solid var(--light-grey);
    border-radius: 5px;
    height: 1px;
  }

  input[type="range"]::-moz-range-track {
    background: var(--white);
    border-top: 1px solid var(--light-grey);
    border-radius: 5px;
    height: 1px;
  }

  /***** Thumb Styles *****/
  /***** Chrome, Safari, Opera, and Edge Chromium *****/
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    transform: translateY(-50%); /* Center the thumb vertically */
    background-color: var(--black);
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
  }

  /***** Thumb Styles *****/
  /***** Firefox *****/
  input[type="range"]::-moz-range-thumb {
    border: none; /*Removes extra border that FF applies*/
    border-radius: 50%;
    background-color: var(--black);
    height: 1rem;
    width: 1rem;
  }
`;
