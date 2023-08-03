import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --overlay-display: flex;
  --overlay-direction: column;
  --overlay-height: 100%;
  --overlay-width: 75%;
  --overlay-justify-content: space-around;
  --overlay-align-items: center;
  --overlay-text-align: center;

  --text-flex: 2;
  --text-align: start;

  display: var(--overlay-display);
  flex-direction: var(--overlay-direction);
  height: var(--overlay-height);
  width: var(--overlay-width);
  justify-content: var(--overlay-justify-content);
  text-align: var(--overlay-text-align);

  .category-level {
    display: var(--overlay-display);
    align-items: var(--overlay-align-items);
  }

  .level-title {
    flex: var(--text-flex);
    text-align: var(--text-align);
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --overlay-width: 70%;
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    --overlay-width: 65%;
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
    --overlay-width: 50%;
  }
`;

export const LevelWrapper = styled.div<{}>`
  --icon-color: var(--primary-dark);
  --icon-display: flex;
  --icon-flex: 2;
  --icon-justify-content: space-between;

  display: var(--icon-display);
  justify-content: var(--icon-justify-content);
  flex: var(--icon-flex);
  color: var(--icon-color);

  .active {
    color: var(--white);
  }
`;
