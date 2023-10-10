import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --autocomplete-wrapper-width: 100%;
  --autocomplete-wrapper-height: 40px;
  --autocomplete-wrapper-position: relative;
  --autocomplete-wrapper-overflow: hidden;

  --autocomplete-input-width: 100%;
  --autocomplete-input-height: 100%;
  --autocomplete-input-padding: 0 1rem;
  --autocomplete-input-border-radius: 8px;
  --autocomplete-input-border: 1px solid var(--light-grey);
  --autocomplete-input-outline: none;

  --autocomplete-placeholder-color: var(--light-grey);
  --autocomplete-placeholder-font-size: 12px;

  --search-button-position: absolute;
  --search-button-transform: translate(0, -50%);
  --search-button-top: 50%;
  --search-button-right: 1rem;

  --search-icon-width: 18px;
  --search-icon-height: 18px;

  --easy-care-wrapper-display: none;
  --easy-care-wrapper-position: absolute;
  --easy-care-wrapper-transform: translate(0, -50%);
  --easy-care-wrapper-top: 50%;
  --easy-care-wrapper-left: 1rem;
  --easy-care-wrapper-align-items: center;
  --easy-care-wrapper-gap: 0.5rem;
  --easy-care-wrapper-opacity: 1;
  --easy-care-wrapper-transition: opacity 0.3s ease-in-out;

  --easy-care-wrapper-hidden-opacity: 0;

  --easy-care-button-background-color: var(--white);
  --easy-care-button-border: none;
  --easy-care-button-cursor: pointer;
  --easy-care-button-font-size: 12px;
  --easy-care-button-font-weight: 600;

  --easy-care-divider-height: 15px;
  --easy-care-divider-width: 1px;
  --easy-care-divider-background-color: var(--light-grey);

  --suggestion-wrapper-overflow: visible;
  --suggestion-wrapper-z-index: 100;

  --autocomplete-search-border-radius: 0 0 8px 8px;

  --suggestion-wrapper-position: absolute;
  --suggestion-wrapper-bottom: 39px;
  --suggestion-wrapper-width: 100%;
  --suggestion-wrapper-border-radius: 8px;
  --suggestion-wrapper-border: 1px solid var(--light-grey);
  --suggestion-wrapper-border-bottom: none;
  --suggestion-wrapper-border-top: none;
  --suggestion-wrapper-z-index: 100;
  --suggestion-wrapper-background-color: var(--white);
  --suggestion-wrapper-display: none;

  --suggestion-list-display: flex;
  --suggestion-list-align-items: center;
  --suggestion-list-padding: 13px 16px;
  --suggestion-list-background-color: var(--white);
  --suggestion-list-gap: 8px;
  --suggestion-list-cursor: pointer;
  --suggestion-list-text-decoration: none;

  --plant-suggestion-image-border-radius: 4px;

  --plant-suggestion-name-font-size: 13px;
  --plant-suggestion-name-font-weight: 600;
  --plant-suggestion-name-color: var(--black);

  --suggestion-list-first-child-border-radius: 8px 8px 0 0;
  --suggestion-list-last-child-border-radius: 0 0 8px 8px;

  --autocomplete-search-input-transition: padding 0.3s ease-in-out;

  width: var(--autocomplete-wrapper-width);
  height: var(--autocomplete-wrapper-height);
  position: var(--autocomplete-wrapper-position);
  overflow: var(--autocomplete-wrapper-overflow);

  .autocomplete-search-input {
    width: var(--autocomplete-input-width);
    height: var(--autocomplete-input-height);
    padding: var(--autocomplete-input-padding);
    border-radius: var(--autocomplete-input-border-radius);
    border: var(--autocomplete-input-border);

    ::placeholder {
      color: var(--autocomplete-placeholder-color);
      font-size: var(--autocomplete-placeholder-font-size);
    }
  }

  .autocomplete-search-input:focus {
    outline: var(--autocomplete-input-outline);
  }

  .search-button {
    position: var(--search-button-position);
    transform: var(--search-button-transform);
    top: var(--search-button-top);
    right: var(--search-button-right);

    .search-icon {
      width: var(--search-icon-width);
      height: var(--search-icon-height);
    }
  }

  .easy-care-wrapper {
    display: var(--easy-care-wrapper-display);
    position: var(--easy-care-wrapper-position);
    transform: var(--easy-care-wrapper-transform);
    top: var(--easy-care-wrapper-top);
    left: var(--easy-care-wrapper-left);
    align-items: var(--easy-care-wrapper-align-items);
    gap: var(--easy-care-wrapper-gap);
    opacity: var(--easy-care-wrapper-opacity);
    transition: var(--easy-care-wrapper-transition);

    .easy-care-button {
      background-color: var(--easy-care-button-background-color);
      border: var(--easy-care-button-border);
      cursor: var(--easy-care-button-cursor);
      font-size: var(--easy-care-button-font-size);
      font-weight: var(--easy-care-button-font-weight);
    }

    .divider {
      height: var(--easy-care-divider-height);
      width: var(--easy-care-divider-width);
      background-color: var(--easy-care-divider-background-color);
    }
  }

  .easy-care-wrapper.hidden {
    opacity: var(--easy-care-wrapper-hidden-opacity);
  }

  &.suggestion-showed {
    overflow: var(--suggestion-wrapper-overflow);
    z-index: var(--suggestion-wrapper-z-index);

    .autocomplete-search-input {
      border-radius: var(--autocomplete-search-border-radius);
    }

    .suggestions-wrapper {
      position: var(--suggestion-wrapper-position);
      bottom: var(--suggestion-wrapper-bottom);
      width: var(--suggestion-wrapper-width);
      border-radius: var(--suggestion-wrapper-border-radius);
      border: var(--suggestion-wrapper-border);
      border-bottom: var(--suggestion-wrapper-border-bottom);
      z-index: var(--suggestion-wrapper-z-index);
      background-color: var(--suggestion-wrapper-background-color);

      .suggestion-list {
        display: var(--suggestion-list-display);
        align-items: var(--suggestion-list-align-items);
        padding: var(--suggestion-list-padding);
        background-color: var(--suggestion-list-background-color);
        gap: var(--suggestion-list-gap);
        cursor: var(--suggestion-list-cursor);
        text-decoration: var(--suggestion-list-text-decoration);

        .plant-suggestion-image {
          border-radius: var(--plant-suggestion-image-border-radius);
        }

        .plant-suggestion-name {
          font-size: var(--plant-suggestion-name-font-size);
          font-weight: var(--plant-suggestion-name-font-weight);
          color: var(--plant-suggestion-name-color);
        }
      }

      .suggestion-list:first-child {
        border-radius: var(--suggestion-list-first-child-border-radius);
      }

      .suggestion-list:hover {
        background-color: var(--new-primary);
      }
    }
  }

  &.suggestion-showed.hidden {
    .autocomplete-search-input {
      border-radius: var(--suggestion-wrapper-border-radius);
    }

    .suggestions-wrapper.hidden {
      display: var(--suggestion-wrapper-display);
    }
  }

  @media (min-width: ${gridBreakpoint.md}) {
    .easy-care-wrapper {
      --easy-care-wrapper-display: flex;
    }

    .autocomplete-search-input {
      --autocomplete-input-padding: 0 1rem 0 5.75rem;
      transition: var(--autocomplete-search-input-transition);
    }

    .autocomplete-search-input:focus {
      --autocomplete-input-padding: 0 1rem;
    }
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    &.suggestion-showed {
      .autocomplete-search-input {
        --autocomplete-search-border-radius: 8px 8px 0 0;
      }

      .suggestions-wrapper {
        --suggestion-wrapper-position: static;
        --suggestion-wrapper-border-radius: 0 0 8px 8px;
        --suggestion-wrapper-border-bottom: 1px solid var(--light-grey);

        border-top: var(--suggestion-wrapper-border-top);

        .suggestion-list:last-child {
          border-radius: var(--suggestion-list-last-child-border-radius);
        }

        .suggestion-list:first-child {
          --suggestion-list-first-child-border-radius: 0;
        }
      }
    }
  }
`;
