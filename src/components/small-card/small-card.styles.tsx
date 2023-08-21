import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
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
  --card-content-width: 80vw;
  --card-content-padding: 1rem 0.5rem;
  --overflow-hidden: hidden;
  --card-display: flex;
  --card-flex-direction: column;
  --card-justify-content: center;
  --card-align-items: center;
  --card-radius: 5%;
  --title-font-weight: 600;
  --card-image-position: relative;
  --info-white-space: nowrap;
  --info-text-overflow: ellipsis;

  display: var(--card-display);
  flex-direction: var(--card-flex-direction);
  justify-content: var(--card-justify-content);
  align-items: var(--card-align-items);

  .card-image {
    width: var(--card-content-width);
    height: var(--card-content-width);
    border-radius: var(--card-radius);
    overflow: var(--overflow-hidden);
    position: var(--card-image-position);
  }

  .card-info {
    width: var(--card-content-width);
    display: var(--card-display);
    flex-direction: var(--card-flex-direction);
    padding: var(--card-content-padding);
    overflow: var(--overflow-hidden);
    white-space: var(--info-white-space);
    text-overflow: var(--info-text-overflow);

    .plant-name {
      font-weight: var(--title-font-weight);
    }

    .plant-info {
      color: var(--dark-grey);
    }
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
`;
