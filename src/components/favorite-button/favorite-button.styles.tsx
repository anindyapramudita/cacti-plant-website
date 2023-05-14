import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const FavoriteWrapper = styled.button<{ isLiked: boolean }>`
  position: absolute;
  margin: 0.625rem;
  top: 0;
  right: 0;
  cursor: pointer;

  background-color: transparent;
  border: none;

  svg {
    width: 45px;
    height: 45px;
    fill: ${(props) => (props.isLiked ? "#DB5461" : "var(--white)")};
    stroke: ${(props) => (props.isLiked ? "#DB5461" : "var(--white)")};
    transition: scale 0.2s ease-out, fill 0.5s ease;
  }

  svg:hover {
    transform: scale(1.1);
  }

  &:active svg {
    transform: scale(1);
  }

  &:hover {
  }

  @media (min-width: ${gridBreakpoint.sm}) {
  }

  @media (min-width: ${gridBreakpoint.md}) {
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    // display: none;
  }

  @media (min-width: ${gridBreakpoint.xl}) {
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
  }
`;
