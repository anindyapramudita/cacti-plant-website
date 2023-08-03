import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{
  showSummary: boolean;
}>`
  --card-position: relative;
  --card-overflow: hidden;

  --icon-position: absolute;
  --icon-bottom: ${(props) => (props.showSummary ? "20%" : "0")};
  --icon-left: 50%;
  --icon-transform: translate(-50%, -50%);
  --icon-display: flex;
  --icon-flex-direction: column;
  --icon-align-items: center;
  --icon-color: var(--white);
  --icon-text-shadow: 0.125rem 0.125rem 0.375rem #000000;
  --icon-transition: bottom 0.5s ease-out;
  --icon-background-color: transparent;
  --icon-border: none;

  --overlay-visibility: ${(props) => (!props.showSummary ? "hidden" : "visible")};
  --overlay-top: ${(props) => (props.showSummary ? "80%" : "100%")};
  --overlay-background: rgba(18, 49, 50, 0.8);
  --overlay-width: 100%;
  --overlay-height: 20%;
  --overlay-display: flex;
  --overlay-justify-content: center;
  --overlay-transition: top 0.5s ease-out, visibility 0.5s ease-out;

  position: var(--card-position);
  overflow: var(--card-overflow);

  .swipe-up-icon {
    position: var(--icon-position);
    bottom: var(--icon-bottom);
    left: var(--icon-left);
    transform: var(--icon-transform);
    display: var(--icon-display);
    flex-direction: var(--icon-flex-direction);
    align-items: var(--icon-align-items);
    color: var(--icon-color);
    text-shadow: var(--icon-text-shadow);
    transition: var(--icon-transition);
    background-color: var(--icon-background-color);
    border: var(--icon-border);
  }

  .card-overlay {
    visibility: var(--overlay-visibility);
    position: var(--icon-position);
    top: var(--overlay-top);
    background: var(--overlay-background);
    width: var(--overlay-width);
    height: var(--overlay-height);
    display: var(--overlay-display);
    align-items: var(--icon-align-items);
    justify-content: var(--overlay-justify-content);
    color: var(--icon-color);
    transition: var(--overlay-transition);

  }

  @media (min-width: ${gridBreakpoint.lg}) {
    &:hover .card-overlay {
      --overlay-top: 80%;
      --overlay-visibility: visible;
    }

    .swipe-up-icon {
      --icon-display: none;
    }
  }
`;
