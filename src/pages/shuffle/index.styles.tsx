import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --shuffle-display: grid;
  --shuffle-grid-template-columns: 1fr;
  --shuffle-grid-template-rows: calc(100vh - var(--header-height-mobile));

  display: var(--shuffle-display);
  grid-template-columns: var(--shuffle-grid-template-columns);
  grid-template-rows: var(--shuffle-grid-template-rows);

  @media (min-width: ${gridBreakpoint.sm}) {
    --shuffle-grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${gridBreakpoint.md}) {
    --shuffle-grid-template-rows: calc(100vh - var(--header-height-desktop));
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    --shuffle-grid-template-columns: 1fr 1fr 1fr;
  }
`;
