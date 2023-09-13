import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --checkbox-background-color: var(--white);
  --checkbox-border: 1px solid var(--black);
  --checkbox-padding: 8px 20px;
  --checkbox-line-height: 40px;
  --checkbox-border-radius: 50px;
  --checkbox-cursor: pointer;
  --checkbox-color: var(--black);

  .check-button-input + .check-box-label {
    background-color: var(--checkbox-background-color);
    border: var(--checkbox-border);
    padding: var(--checkbox-padding);
    line-height: var(--checkbox-line-height);
    border-radius: var(--checkbox-border-radius);
    cursor: var(--checkbox-cursor);
    color: var(--checkbox-color);
  }

  .check-button-input:checked + .check-box-label {
    --checkbox-background-color: var(--black);
    --checkbox-color: var(--white);
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    .check-button-input + .check-box-label {
      --checkbox-padding: 8px 30px;
    }
  }
`;
