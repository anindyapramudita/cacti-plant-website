import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --header-height: var(--header-height-mobile);
  --page-padding: 32px;

  height: calc(100vh - var(--header-height));
  overflow-y: scroll;
  padding: var(--page-padding);
  -ms-overflow-style: none;
  scrollbar-width: none;
  tex-align: center;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --page-padding: 32px 64px;
    --header-height: var(--header-height-desktop);
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    --page-padding: 32px 54px;
    --header-height: var(--header-height-desktop);
  }

  @media (min-width: ${gridBreakpoint.xl}) {
    --page-padding: 32px 64px;
    --header-height: var(--header-height-desktop);
  }
`;
