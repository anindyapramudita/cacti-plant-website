import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --modal-width: 20rem;
  --modal-height: 27rem;
  --modal-padding: 3rem;
  --modal-position: relative;
  --modal-overflow: hidden;

  width: var(--modal-width);
  height: var(--modal-height);
  padding: var(--modal-padding);
  position: var(--modal-position);
  overflow: var(--modal-overflow);

  @media (min-width: ${gridBreakpoint.md}) {
    --modal-width: 600px;
    --modal-height: 500px;
  }
`;
