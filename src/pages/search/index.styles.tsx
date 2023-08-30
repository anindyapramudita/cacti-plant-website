import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --header-height: var(--header-height-mobile);

  height: calc(100vh - var(--header-height));
  overflow-y: scroll;
  padding: 32px 0;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --header-height: var(--header-height-desktop);
  }
`;
