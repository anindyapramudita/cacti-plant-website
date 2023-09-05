import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  --gap-width: 1rem;
  --grid-column: 1fr;
  --card-per-row: 1;
  --padding-size: 2rem;
  --gap-size: 32px;
  --padding-size: 0 2rem;
  --min-height: 110vh;
  --align-items: start;

  gap: var(--gap-size);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: var(--align-items);
  max-width: calc(300px * 5 + 32px * 4);
  margin: auto;

  @media (min-width: ${gridBreakpoint.lg}) {
  }

  @media (min-width: ${gridBreakpoint.lg}) {
  }
`;
