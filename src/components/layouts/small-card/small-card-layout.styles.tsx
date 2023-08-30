import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  --gap-width: 1rem;
  --grid-column: 1fr;
  --gap-per-row: 0;
  --card-per-row: 1;
  --padding-size: 2rem;
  --gap-size: 2rem;
  --padding-size: 0 2rem;
  --min-height: 110vh;
  --align-items: start;

  display: grid;
  grid-template-columns: repeat(var(--card-per-row), var(--grid-column));
  gap: var(--gap-size);
  padding: var(--padding-size);
  min-height: var(--min-height);
  align-items: var(--align-items);
  width: 100%;

  @media (min-width: ${gridBreakpoint.lg}) {
    --gap-per-row: 2;
    --card-per-row: 5;
  }
`;
