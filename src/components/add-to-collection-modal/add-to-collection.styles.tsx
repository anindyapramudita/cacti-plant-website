import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.form<{ isNewCollection: boolean }>`
  --modal-width: 20rem;
  --modal-height: 27rem;
  --modal-padding: 3rem;
  --modal-position: relative;
  --modal-overflow: hidden;
  --modal-display: flex;
  --modal-flex-direction: column;
  --modal-align-items: center;

  --heading-font-size: 24px;
  --heading-font-weight: 400;
  --heading-height: 48px;

  --scroll-overflow-y: scroll;
  --scroll-display: none;

  --content-min-height: 70px;
  --content-flex: 1;
  --content-position: relative;
  --content-text-align: center;
  --content-margin-new-collection: 24px 0 32px 0;
  --content-margin: 0;

  --back-button-position: absolute;
  --back-button-top: 0;
  --back-button-left: 0;
  --back-button-border: none;
  --back-button-background-color: transparent;
  --back-button-color: var(--primary);
  --back-button-cursor: pointer;

  --card-layout-display: grid;
  --card-layout-grid-gap: 16px;
  --card-layout-number-of-gap: 1;
  --card-layout-number-of-card: 2;
  --card-layout-grid-template-columns: repeat(2, 1fr);
  --card-border: none;
  --card-cursor: pointer;
  --card-box-shadow: 0 4px 4px rgba(0, 0, 0, 15%);

  --collection-title-font-size: 12px;
  --collection-title-font-weight: 600;

  --collection-text-grid-column-start: 1;
  --collection-text-grid-column-end: 3;

  --collection-character-font-size: 11px;
  --collection-character-align-self: self-start;
  --collection-character-margin-top: 4px;

  --modal-footer-position: absolute;
  --modal-footer-bottom: 0;
  --modal-footer-width: calc(100% - 2 * var(--modal-padding));
  --modal-footer-display: flex;
  --modal-footer-justify-content: space-between;

  width: var(--modal-width);
  height: ${(props) =>
    props.isNewCollection ? "auto" : "var(--modal-height)"};
  padding: var(--modal-padding);
  position: var(--modal-position);
  overflow: var(--modal-overflow);
  display: var(--modal-display);
  flex-direction: var(--modal-flex-direction);
  align-items: var(--modal-align-items);

  .back-button {
    position: var(--back-button-position);
    top: var(--back-button-top);
    left: var(--back-button-left);
    border: var(--back-button-border);
    background-color: var(--back-button-background-color);
    color: var(--back-button-color);
    cursor: var(--back-button-cursor);
  }

  .collection-modal-heading {
    text-align: center;
    font-size: var(--heading-font-size);
    font-weight: var(--heading-font-weight);
    height: var(--heading-height);
  }

  .collection-modal-content {
    overflow-y: var(--scroll-overflow-y);
    ::-webkit-scrollbar {
      display: var(--scroll-display);
    }

    min-height: var(--content-min-height);
    flex: var(--content-flex);
    position: var(--content-position);
    text-align: var(--content-text-align);
    display: var(--card-layout-display);
    grid-gap: var(--card-layout-grid-gap);
    grid-template-columns: var(--card-layout-grid-template-columns);
    margin: ${(props) =>
      props.isNewCollection
        ? "var(--content-margin-new-collection)"
        : "var(--content-margin)"};

    .collection-container {
      position: relative;
      width: calc(
        (
            var(--modal-width) -
              (var(--card-layout-grid-gap) * var(--card-layout-number-of-gap))
          ) / var(--card-layout-number-of-card)
      );
      height: calc(
        (
            var(--modal-width) -
              (var(--card-layout-grid-gap) * var(--card-layout-number-of-gap))
          ) / var(--card-layout-number-of-card)
      );
      border: var(--card-border);
      cursor: var(--card-cursor);
    }

    .collection-container:hover {
      box-shadow: var(--card-box-shadow);
    }

    .collection-title {
      font-size: var(--collection-title-font-size);
      font-weight: var(--collection-title-font-weight);
    }

    .no-collection-text {
      grid-column-start: var(--collection-text-grid-column-start);
      grid-column-end: var(--collection-text-grid-column-end);
    }
  }

  .new-collection-input-content {
    .collection-name-characters {
      font-size: var(--collection-character-font-size);
      align-self: var(--collection-character-align-self);
      margin-top: var(--collection-character-margin-top);
    }
  }

  .collection-modal-footer {
    position: var(--modal-footer-position);
    bottom: var(--modal-footer-bottom);
    width: var(--modal-footer-width);
    display: var(--modal-footer-display);
    justify-content: var(--modal-footer-justify-content);
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --modal-width: 600px;
    --modal-height: 500px;
    --card-layout-grid-template-columns: repeat(3, 1fr);
    --card-layout-grid-gap: 32px;
    --card-layout-number-of-gap: 2;
    --card-layout-number-of-card: 3;
    --collection-text-grid-column-end: 4;
  }
`;
