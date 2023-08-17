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

  --textarea-min-height: 2.5rem;
  --textarea-width: 100%;
  --textarea-border: 1px solid var(--border-color);
  --textarea-border-radius: 5px;
  --textarea-padding: 0.5rem;
  --textarea-resize: none;
  --textarea-outline: none !important;

  --label-position: absolute;
  --label-left: 0.25rem;
  --label-top: 1.25rem;
  --label-padding: 0;
  --label-transform: translate(0, -50%);
  --label-font-size: 0.9rem;
  --label-ransition: top 0.3s, font-size 0.3s, padding 0.3s;
  --label-background-color: var(--white);
  --label-left: 0.4rem;
  --label-cursor: text;

  position: var(--wrapper-position);
  margin: var(--wrapper-margin);
  width: var(--wrapper-width);

  .textarea-component {
    min-height: var(--textarea-min-height);
    width: var(--textarea-width);
    border: var(--textarea-border);
    border-radius: var(--textarea-border-radius);
    padding: var(--textarea-padding);
    resize: var(--textarea-resize);
    outline: var(--label-outline);
  }

  .textarea-label {
    position: var(--label-position);
    left: var(--label-left);
    top: var(--label-top);
    transform: var(--label-transform);
    font-size: var(--label-font-size);
    -webkit-transition: var(--label-ransition);
    background-color: var(--label-background-color);
    left: var(--label-left);
    cursor: var(--label-cursor);
    padding: var(--label-padding);
  }

  .textarea-component:focus + .textarea-label,
  .textarea-component:not(:placeholder-shown) + .textarea-label {
    --label-font-size: 0.75rem;
    --label-top: 0;
    --label-padding: 0.3rem;
  }

  .textarea-component:focus {
    --border-color: var(--secondary-light);
    --textarea-border: 2px solid var(--border-color);
  }
`;
