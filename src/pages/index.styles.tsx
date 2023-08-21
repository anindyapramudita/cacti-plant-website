import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --home-height: calc(100vh - var(--header-height-mobile));
  --home-text-align: center;
  --home-padding: 42px 16px;
  --home-overflow: scroll;
  --home-display: block;
  --home-vertical-align: baseline;

  --text-wrapper-display: flex;
  --text-wrapper-flex-direction: column;
  --text-wrapper-align-items: start;
  --text-wrapper-justify-content: start;
  --text-wrapper-text-align: left;
  --text-wrapper-gap: 16px;
  --text-wrapper-margin: 42px 0 0 0;
  --text-wrapper-height: auto;

  --heading-font-size: 36px;
  --heading-line-height: 36px;
  --heading-font-weight: 400;

  --button-padding: 8px 32px;
  --button-background-color: #5b7663;
  --button-border: none;
  --button-color: var(--white);
  --button-border-radius: 24px;
  --button-width: max-content;
  --button-cursor: pointer;

  --image-float: none;
  --image-max-height: 400px;
  --image-border-radius: 8px;
  --image-box-shadow: 0 4px 30px rgba(0, 0, 0, 25%), 8px -8px 0 #5b7663;
  --image-margin: 0px;
  --image-margin-right: 0;

  --image-2-display: none;
  --image-2-box-shadow: 0 4px 30px rgba(0, 0, 0, 25%), 8px -8px 0 #9f7e69;

  height: var(--home-height);
  text-align: var(--home-text-align);
  padding: var(--home-padding);
  overflow: var(--home-overflow);
  display: var(--home-display);
  vertical-align: var(--home-vertical-align);

  .text-wrapper {
    display: var(--text-wrapper-display);
    flex-direction: var(--text-wrapper-flex-direction);
    gap: var(--text-wrapper-gap);
    text-align: var(--text-wrapper-text-align);
    margin: var(--text-wrapper-margin);
    align-items: var(--text-wrapper-align-items);
    justify-content: var(--text-wrapper-justify-content);
    height: var(--text-wrapper-height);

    .homepage-heading {
      font-size: var(--heading-font-size);
      line-height: var(--heading-line-height);
      font-weight: var(--heading-font-weight);
    }

    .search-button {
      padding: var(--button-padding);
      background-color: var(--button-background-color);
      border: var(--button-border);
      color: var(--button-color);
      border-radius: var(--button-border-radius);
      width: var(--button-width);
      cursor: var(--button-cursor);
    }
  }

  .image-component-1,
  .image-component-2 {
    float: var(--image-float);
    max-height: var(--image-max-height);
    border-radius: var(--image-border-radius);
    margin: var(--image-margin);
  }

  .image-component-1 {
    box-shadow: var(--image-box-shadow);
    margin-right: var(--image-margin-right);
  }

  .image-component-2 {
    display: var(--image-2-display);
    box-shadow: var(--image-2-box-shadow);
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --home-padding: 62px 16px;
    --home-height: calc(100vh - var(--header-height-desktop));
    --home-overflow: hidden;

    .image-component-1,
    .image-component-2 {
      --image-max-height: 500px;
      --image-margin-right: 48px;
    }

    .image-component-2 {
      --image-2-display: inline;
    }

    .text-wrapper {
      --text-wrapper-text-align: center;
      --text-wrapper-align-items: center;

      .homepage-heading {
        --heading-font-size: 80px;
        --heading-line-height: 108px;
      }
    }
  }

  @media (min-width: ${gridBreakpoint.xl}) {
    --home-padding: 0 82.5px;
    --home-display: table-cell;
    --home-vertical-align: middle;

    .image-component-1,
    .image-component-2 {
      --image-margin-right: 0px;
      --image-margin: 0 24px;
    }

    .image-component-1,
    .image-component-2 {
      --image-float: right;
    }

    .text-wrapper {
      --text-wrapper-margin: 0px;
      --text-wrapper-height: 500px;
      --text-wrapper-text-align: start;
      --text-wrapper-align-items: start;
      --text-wrapper-justify-content: center;
    }
  }
`;
