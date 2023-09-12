import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --header-height: var(--header-height-mobile);
  --page-overflow-y: scroll;
  --page-padding: 32px;
  --page-ms-overflow-style: none;
  --page-scrollbar-width: none;
  --page-display: flex;
  --page-flex-direction: column;
  --page-gap: 42px;

  --scrollbar-display: none;

  --filter-font-size: 24px;
  --filter-line-height: normal;

  --filter-header-display: flex;
  --filter-header-gap: 16px;

  --input-width: 450px;

  --card-layout-display: grid;
  --card-layout-grid-gap: 32px;
  --card-layout-grid-template-columns: repeat(1, 1fr);

  height: calc(100vh - var(--header-height));
  overflow-y: var(--page-overflow-y);
  padding: var(--page-padding);
  -ms-overflow-style: var(--page-ms-overflow-style);
  scrollbar-width: var(--page-scrollbar-width);
  display: var(--page-display);
  flex-direction: var(--page-flex-direction);
  gap: var(--page-gap);

  &::-webkit-scrollbar {
    display: var(--scrollbar-display);
  }

  .filter-heading {
    font-size: var(--filter-font-size);
    line-height: var(--filter-line-height);
  }

  .filter-header {
    display: var(--filter-header-display);
    gap: var(--filter-header-gap);

    .filter-input-container {
      width: var(--input-width);
    }
  }

  .simple-card-layout {
    display: var(--card-layout-display);
    grid-gap: var(--card-layout-grid-gap);
    grid-template-columns: var(--card-layout-grid-template-columns);
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --header-height: var(--header-height-desktop);
    --page-padding: 32px 64px;

    .simple-card-layout {
      --card-layout-grid-template-columns: repeat(3, 1fr);
    }
    .filter-heading {
      --filter-font-size: 36px;
    }
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    --header-height: var(--header-height-desktop);
    --page-padding: 32px 54px;
    --card-content-height: calc(
      (100vw - (2 * 54px) - (4 * 32px)) / 5 * 2 + 32px + (2 * 25px)
    );
    .simple-card-layout {
      --card-layout-grid-template-columns: repeat(5, 1fr);
      height: var(--card-content-height);
    }
  }

  @media (min-width: ${gridBreakpoint.xl}) {
    --header-height: var(--header-height-desktop);
    --page-padding: 32px 64px;
  }
`;
