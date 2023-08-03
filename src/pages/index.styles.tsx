import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: calc(100vh - 3rem);

  @media (min-width: ${gridBreakpoint.sm}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
