import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{ currentTab: "Collection" | "Liked" }>`
  --card-layout-display: grid;
  --card-layout-grid-gap: 32px;
  --card-layout-grid-template-columns: repeat(1, 1fr);
  --card-layout-text-align: center;

  --header-height: var(--header-height-mobile);
  --page-overflow-y: scroll;
  --page-padding: 32px;
  --page-ms-overflow-style: none;
  --page-scrollbar-width: none;
  --page-text-align: center;
  --page-display: flex;
  --page-flex-direction: column;
  --page-align-items: center;
  --page-gap: 24px;
  --page-padding: 24px;

  --page-heading-display: flex;
  --page-heading-flex-direction: column;
  --page-heading-align-items: center;
  --page-heading-gap: 8px;
  --page-heading-margin-bottom: 12px;

  --button-wrapper-display: flex;
  --button-wrapper-justify-content: center;
  --button-wrapper-gap: 8px;

  --profile-picture-wrapper-width: 125px;
  --profile-picture-wrapper-height: 125px;
  --profile-picture-wrapper-border-radius: 50%;
  --profile-picture-wrapper-overflow: hidden;
  --profile-picture-wrapper-display: inline-block;

  --username-font-size: 24px;

  --profile-tab-width: max-content;
  --profile-tab-display: inline-block;
  --profile-tab-position: relative;

  --profile-category-tab-border: none;
  --profile-category-tab-display: flex;
  --profile-category-tab-gap: 24px;
  --profile-category-tab-justify-content: center;

  --tab-underline-position: absolute;
  --tab-underline-bottom: 0;
  --tab-underline-height: 2px;
  --tab-underline-background-color: var(--new-secondary);
  --tab-underline-transition: all 0.5s ease-out;

  --tab-underline-collection-right: calc(40px + 24px);
  --tab-underline-collection-width: 75px;
  --tab-underline-liked-right: 0;
  --tab-underline-liked-width: 40px;

  --tab-label-cursor: pointer;
  --tab-label-transform: none;

  --no-image-grid-column-start: 1;
  --no-image-grid-column-end: 6;

  text-align: var(--page-text-align);
  display: var(--page-display);
  flex-direction: var(--page-flex-direction);
  align-items: var(--page-align-items);
  gap: var(--page-gap);
  padding: var(--page-padding);
  height: calc(100vh - var(--header-height));
  overflow-y: var(--page-overflow-y);
  padding: var(--page-padding);
  -ms-overflow-style: var(--page-ms-overflow-style);
  scrollbar-width: var(--page-scrollbar-width);

  &::-webkit-scrollbar {
    display: var(--scrollbar-display);
  }

  .profile-heading {
    display: var(--page-heading-display);
    flex-direction: var(--page-heading-flex-direction);
    align-items: var(--page-heading-align-items);
    gap: var(--page-heading-gap);
    margin-bottom: var(--page-heading-margin-bottom);

    .button-wrapper {
      display: var(--button-wrapper-display);
      justify-content: var(--button-wrapper-justify-content);
      gap: var(--button-wrapper-gap);
    }

    .profile-picture-wrapper {
      width: var(--profile-picture-wrapper-width);
      height: var(--profile-picture-wrapper-height);
      border-radius: var(--profile-picture-wrapper-border-radius);
      overflow: var(--profile-picture-wrapper-overflow);
      display: var(--profile-picture-wrapper-display);
    }

    .user-name-heading {
      font-size: var(--username-font-size);
    }
  }

  .profile-tab {
    width: var(--profile-tab-width);
    display: var(--profile-tab-display);
    position: var(--profile-tab-position);

    .profile-category-tab {
      border: var(--profile-category-tab-border);
      display: var(--profile-category-tab-display);
      gap: var(--profile-category-tab-gap);
      justify-content: var(--profile-category-tab-justify-content);
    }

    .tab-underline {
      ${(props) =>
        props.currentTab === "Collection"
          ? `right: var(--tab-underline-collection-right);
        width: var(--tab-underline-collection-width);`
          : `right: var(--tab-underline-liked-right);
        width: var(--tab-underline-liked-width);
        `}
      position: var(--tab-underline-position);
      bottom: var(--tab-underline-bottom);
      height: var(--tab-underline-height);
      background-color: var(--tab-underline-background-color);
      transition: var(--tab-underline-transition);
    }

    .category-tab-label {
      cursor: var(--tab-label-cursor);
      transform: var(--tab-label-transform);
    }

    .category-tab-label:hover {
      --tab-label-transform: scale(1.1);
    }

    .category-tab:checked + .category-tab-label {
      --tab-label-transform: none;
      --tab-label-cursor: default;
    }
  }

  .pictures-wrapper {
    display: var(--card-layout-display);
    grid-gap: var(--card-layout-grid-gap);
    grid-template-columns: var(--card-layout-grid-template-columns);
    text-align: var(--card-layout-text-align);

    .no-collection-text,
    .no-image-text {
      grid-column-start: var(--no-image-grid-column-start);
      grid-column-end: var(--no-image-grid-column-end);
    }
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --header-height: var(--header-height-desktop);
    --card-layout-grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    --header-height: var(--header-height-desktop);
    --card-layout-grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: ${gridBreakpoint.xl}) {
    --header-height: var(--header-height-desktop);
  }
`;
