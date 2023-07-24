import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  --padding-size: 2rem;
  --gap-per-row: 4;
  --card-per-row: 5;
  --gap-size: 2rem;
  --card-size-calc: calc(
    (
        100vw - (var(--gap-per-row) * (var(--gap-size))) -
          (2 * var(--padding-size))
      ) / var(--card-per-row)
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .card-image {
    width: 80vw;
    height: 80vw;
    border-radius: 5%;
    overflow: hidden;
    position: relative;
  }

  .card-info {
    width: 80vw;
    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    .plant-name {
      font-weight: 600;
    }

    .plant-info {
      color: var(--dark-grey);
    }
  }

  @media (min-width: ${gridBreakpoint.sm}) {
  }

  @media (min-width: ${gridBreakpoint.md}) {
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    .card-image {
      width: var(--card-size-calc);
      height: var(--card-size-calc);
    }

    .card-info {
      width: var(--card-size-calc);
    }
  }

  @media (min-width: ${gridBreakpoint.xl}) {
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
  }
`;
