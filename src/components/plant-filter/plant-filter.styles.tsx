import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  --mobile-profile-menu-divider-width: 100%;
  --mobile-profile-menu-divider-align-self: center;
  --mobile-profile-menu-divider-height: 1px;
  --mobile-profile-menu-divider-border: 0;
  --mobile-profile-menu-divider-border-top: 1px solid var(--light-grey);

  /* width: 100%;
  flex-shrink: 0; */

  .filter-header {
    font-weight: 500;
  }

  .filter-range-content {
    display: flex;
    gap: 16px;
    flex-direction: column;
    .range-input-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }

    .divider {
      width: var(--mobile-profile-menu-divider-width);
      align-self: var(--mobile-profile-menu-divider-align-self);
      height: var(--mobile-profile-menu-divider-height);
      border: var(--mobile-profile-menu-divider-border);
      border-top: var(--mobile-profile-menu-divider-border-top);
    }

    .button-wrapper {
      display: flex;
      justify-content: space-between;
      gap: 10px;

      .filter-button {
        width: 100%;
        aspect-ratio: 1 / 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        background-color: var(--white);
        border: 1px solid var(--light-grey);
        cursor: pointer;
      }
    }

    .color-wrapper {
      border: 1px solid var(--light-grey);
      border-radius: 8px;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      row-gap: 16px;
      padding: 8px;
      justify-items: center;

      .color-range-arrow {
        align-self: center;
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 7px solid black;
        border-bottom: none;
        cursor: pointer;
      }

      .color-range-arrow.open {
        border-bottom: 7px solid black;
        border-top: none;
      }

      .color-range {
        width: 20px;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        border: none;
      }
    }

    .filter-button-group {
      display: flex;
      gap: 12px;
    }
  }
`;
