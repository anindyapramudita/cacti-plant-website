import { gridBreakpoint } from "@/shared/breakpoints";
import { ralewayThin } from "@/styles/fonts";
import styled from "styled-components";

export const StylesWrapper = styled.button<{}>`
  ${ralewayThin}

  --padding-small: .625rem 16px;
  --padding-medium: 0.6875em 3em;
  --padding-large: 0.7125em 3.0125em;

  position: absolute;
  border: none;
  background-color: var(--primary);

  top: calc(3rem + 0.75rem + 0.75rem);
  left: 0.75rem;
  padding: 0.75rem;
  border-radius: 50%;
  cursor: pointer;

  @media (min-width: ${gridBreakpoint.lg}) {
    top: calc(3rem + 0.75rem + 2rem + 0.75rem);
    left: calc(0.75rem + 2rem);
  }
`;
