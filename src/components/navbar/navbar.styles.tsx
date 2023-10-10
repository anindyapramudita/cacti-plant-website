import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --navbar-wrapper-position: fixed;
  --navbar-wrapper-background-color: var(--white);
  --navbar-wrapper-z-index: 100;
  --navbar-wrapper-bottom: 0;
  --navbar-wrapper-width: 100vw;
  --navbar-wrapper-height: var(--header-height-mobile);
  --navbar-wrapper-padding: 0 1rem;
  --navbar-wrapper-display: flex;
  --navbar-wrapper-justify-content: center;
  --navbar-wrapper-border-top: 1px solid var(--light-grey);
  --navbar-wrapper-border-bottom: none;

  --navbar-content-mobile-display: flex;
  --navbar-content-mobile-justify-content: center;
  --navbar-content-mobile-align-items: center;
  --navbar-content-mobile-gap: 2rem;
  --navbar-content-mobile-z-index: 100;

  --navbar-profile-picture-border-radius: 50%;
  --navbar-burger-icon-color: var(--dark-grey);

  --dropdown-menu-wrapper-position: relative;
  --dropdown-menu-wrapper-z-index: 100;
  --dropdown-menu-wrapper-background-color: var(--white);
  --dropdown-menu-wrapper-border: none;

  --dropdown-menu-overlay-background-color: rgba(250, 223, 180, 0.5);
  --dropdown-menu-overlay-position: fixed;
  --dropdown-menu-overlay-top: 0;
  --dropdown-menu-overlay-left: 0;
  --dropdown-menu-overlay-width: 100vw;
  --dropdown-menu-overlay-height: calc(100vh - var(--header-height-mobile));
  --dropdown-menu-overlay-z-index: -5;
  --dropdown-menu-overlay-opacity: 1;
  --dropdown-menu-overlay-transition: opacity 0.3s;

  --dropdown-menu-overlay-hidden-display: none;

  --mobile-profile-menu-position: absolute;
  --mobile-profile-menu-bottom: calc(100% + 2rem);
  --mobile-profile-menu-right: 50%;
  --mobile-profile-menu-translate: calc(50%);
  --mobile-profile-menu-border-radius: 8px;
  --mobile-profile-menu-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  --mobile-profile-menu-width: calc(100vw - 2rem);
  --mobile-profile-menu-transition: opacity 0.3s, transform 0.3s;
  --mobile-profile-menu-background-color: var(--white);
  --mobile-profile-menu-transform-origin: bottom center;
  --mobile-profile-menu-list-style-type: none;
  --mobile-profile-menu-font-size: 13px;
  --mobile-profile-menu-display: flex;
  --mobile-profile-menu-flex-direction: column;
  --mobile-profile-menu-gap: 0.25rem;
  --mobile-profile-menu-padding: 0.5rem 0;
  --mobile-profile-menu-min-width: 125px;

  --mobile-profile-menu-divider-width: calc(100% - 2rem);
  --mobile-profile-menu-divider-align-self: center;
  --mobile-profile-menu-divider-height: 1px;
  --mobile-profile-menu-divider-border: 0;
  --mobile-profile-menu-divider-border-top: 1px solid var(--light-grey);

  --profile-menu-link-cursor: pointer;
  --profile-menu-link-background-color: white;
  --profile-menu-link-border: none;
  --profile-menu-link-text-align: left;
  --profile-menu-link-color: var(--black);
  --profile-menu-link-padding: 0.5rem 1rem;

  --mobile-profile-menu-hidden-transform: scale(0.8);

  --mobile-search-wrapper-position: relative;

  --mobile-search-menu-position: absolute;
  --mobile-search-menu-bottom: calc(100% + 2rem);
  --mobile-search-menu-right: 50%;
  --mobile-search-menu-translate: calc(32.5%);
  --mobile-search-menu-border-radius: 8px;
  --mobile-search-menu-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  --mobile-search-menu-width: calc(100vw - 2rem);
  --mobile-search-menu-transition: opacity 0.3s, transform 0.3s;
  --mobile-search-menu-background-color: var(--white);
  --mobile-search-menu-transform-origin: bottom center;
  --mobile-search-menu-list-style-type: none;
  --mobile-search-menu-font-size: 13px;
  --mobile-search-menu-display: flex;
  --mobile-search-menu-flex-direction: column;
  --mobile-search-menu-gap: 0.25rem;
  --mobile-search-menu-min-width: 125px;

  --navbar-content-desktop-width: 100%;
  --navbar-content-desktop-max-width: 1184px;
  --navbar-content-desktop-justify-content: space-between;
  --navbar-content-desktop-align-items: center;
  --navbar-content-desktop-display: none;

  --navbar-logo-width: 40px;
  --navbar-logo-height: 40px;

  --autocomplete-input-wrapper-width: 380px;

  --desktop-dropdown-menu-wrapper-position: relative;
  --desktop-dropdown-menu-wrapper-outline: none;

  --desktop-profile-button-background-color: white;
  --desktop-profile-button-border: 1px solid var(--light-grey);
  --desktop-profile-button-border-radius: 8px;
  --desktop-profile-button-padding: 12px;
  --desktop-profile-button-display: flex;
  --desktop-profile-button-align-items: center;
  --desktop-profile-button-gap: 12px;
  --desktop-profile-button-cursor: pointer;

  --desktop-burger-icon-width: 24px;
  --desktop-burger-icon-height: 24px;
  --desktop-burger-icon-color: var(--light-grey);

  --desktop-profile-menu-position: absolute;
  --desktop-profile-menu-bottom: calc(100% + 0.5rem);
  --desktop-profile-menu-right: 0;
  --desktop-profile-menu-height: max-content;
  --desktop-profile-menu-border-radius: 8px;
  --desktop-profile-menu-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  --desktop-profile-menu-width: max-content;
  --desktop-profile-menu-transition: opacity 0.3s, transform 0.3s, display 0.3s;
  --desktop-profile-menu-background-color: var(--white);
  --desktop-profile-menu-transform-origin: bottom right;
  --desktop-profile-menu-list-style-type: none;
  --desktop-profile-menu-font-size: 13px;
  --desktop-profile-menu-display: flex;
  --desktop-profile-menu-flex-direction: column;
  --desktop-profile-menu-gap: 0.25rem;
  --desktop-profile-menu-padding: 0.5rem 0;
  --desktop-profile-menu-min-width: 125px;
  --desktop-profile-menu-z-index: 20;

  --menu-link-hover-background-color: var(--very-light-grey);

  --profile-menu-hidden-opacity: 0;
  --profile-menu-hidden-transform: scale(0.8);
  --profile-menu-desktop-top: calc(100% + 0.5rem);

  position: var(--navbar-wrapper-position);
  background-color: var(--navbar-wrapper-background-color);
  z-index: var(--navbar-wrapper-z-index);
  bottom: var(--navbar-wrapper-bottom);
  width: var(--navbar-wrapper-width);
  height: var(--navbar-wrapper-height);
  padding: var(--navbar-wrapper-padding);
  display: var(--navbar-wrapper-display);
  justify-content: var(--navbar-wrapper-justify-content);
  border-top: var(--navbar-wrapper-border-top);
  border-bottom: var(--navbar-wrapper-border-bottom);

  .navbar-content-mobile {
    display: var(--navbar-content-mobile-display);
    justify-content: var(--navbar-content-mobile-justify-content);
    align-items: var(--navbar-content-mobile-align-items);
    gap: var(--navbar-content-mobile-gap);
    z-index: var(--navbar-content-mobile-z-index);

    .profile-button {
      .profile-picture {
        border-radius: var(--navbar-profile-picture-border-radius);
      }
    }

    .burger-icon {
      color: var(--navbar-burger-icon-color);
    }

    .dropdown-menu {
      position: var(--dropdown-menu-wrapper-position);
      z-index: var(--dropdown-menu-wrapper-z-index);
      background-color: var(--dropdown-menu-wrapper-background-color);
      border: var(--dropdown-menu-wrapper-border);

      .dropdown-overlay {
        background-color: var(--dropdown-menu-overlay-background-color);
        position: var(--dropdown-menu-overlay-position);
        top: var(--dropdown-menu-overlay-top);
        left: var(--dropdown-menu-overlay-left);
        width: var(--dropdown-menu-overlay-width);
        height: var(--dropdown-menu-overlay-height);
        z-index: var(--dropdown-menu-overlay-z-index);
        opacity: var(--dropdown-menu-overlay-opacity);
        transition: var(--dropdown-menu-overlay-transition);
      }

      .dropdown-overlay.hidden {
        display: var(--dropdown-menu-overlay-hidden-display);
        --dropdown-menu-overlay-opacity: 0;
      }

      .profile-menu {
        position: var(--mobile-profile-menu-position);
        bottom: var(--mobile-profile-menu-bottom);
        right: var(--mobile-profile-menu-right);
        translate: var(--mobile-profile-menu-translate);
        border-radius: var(--mobile-profile-menu-border-radius);
        box-shadow: var(--mobile-profile-menu-box-shadow);
        width: var(--mobile-profile-menu-width);
        transition: var(--mobile-profile-menu-transition);
        background-color: var(--mobile-profile-menu-background-color);
        transform-origin: var(--mobile-profile-menu-transform-origin);
        list-style-type: var(--mobile-profile-menu-list-style);
        font-size: var(--mobile-profile-menu-font-size);
        display: var(--mobile-profile-menu-display);
        flex-direction: var(--mobile-profile-menu-flex-direction);
        gap: var(--mobile-profile-menu-gap);
        padding: var(--mobile-profile-menu-padding);
        min-width: var(--mobile-profile-menu-min-width);

        .divider {
          width: var(--mobile-profile-menu-divider-width);
          align-self: var(--mobile-profile-menu-divider-align-self);
          height: var(--mobile-profile-menu-divider-height);
          border: var(--mobile-profile-menu-divider-border);
          border-top: var(--mobile-profile-menu-divider-border-top);
        }

        .menu-link {
          cursor: var(--profile-menu-link-cursor);
          background-color: var(--profile-menu-link-background-color);
          border: var(--profile-menu-link-border);
          text-align: var(--profile-menu-link-text-align);
          color: var(--profile-menu-link-color);
          padding: var(--profile-menu-link-padding);
        }
      }

      .profile-menu.hidden {
        --mobile-profile-menu-display: none;
        transform: var(--mobile-profile-menu-hidden-transform);
      }
    }

    .search-wrapper {
      position: var(--mobile-search-wrapper-position);

      .search-menu-overlay {
        background-color: var(--dropdown-menu-overlay-background-color);
        position: var(--dropdown-menu-overlay-position);
        top: var(--dropdown-menu-overlay-top);
        left: var(--dropdown-menu-overlay-left);
        width: var(--dropdown-menu-overlay-width);
        height: var(--dropdown-menu-overlay-height);
        z-index: var(--dropdown-menu-overlay-z-index);
        opacity: var(--dropdown-menu-overlay-opacity);
        transition: var(--dropdown-menu-overlay-transition);
      }

      .search-menu-overlay.hidden {
        --dropdown-menu-overlay-opacity: 0;

        display: var(--dropdown-menu-overlay-hidden-display);
      }

      .search-button {
        color: var(--navbar-burger-icon-color);
      }

      .search-menu {
        position: var(--mobile-search-menu-position);
        bottom: var(--mobile-search-menu-bottom);
        right: var(--mobile-search-menu-right);
        translate: var(--mobile-search-menu-translate);
        border-radius: var(--mobile-search-menu-border-radius);
        box-shadow: var(--mobile-search-menu-box-shadow);
        width: var(--mobile-search-menu-width);
        transition: var(--mobile-search-menu-transition);
        background-color: var(--mobile-search-menu-background-color);
        transform-origin: var(--mobile-search-menu-transform-origin);
        list-style-type: var(--mobile-search-menu-list-style);
        font-size: var(--mobile-search-menu-font-size);
        display: var(--mobile-search-menu-display);
        flex-direction: var(--mobile-search-menu-flex-direction);
        gap: var(--mobile-search-menu-gap);
        min-width: var(--mobile-search-menu-min-width);
      }

      .search-menu.hidden {
        --mobile-search-menu-display: none;
      }
    }
  }

  .navbar-content-desktop {
    width: var(--navbar-content-desktop-width);
    max-width: var(--navbar-content-desktop-max-width);
    justify-content: var(--navbar-content-desktop-justify-content);
    align-items: var(--navbar-content-desktop-align-items);
    display: var(--navbar-content-desktop-display);

    .website-logo {
      width: var(--navbar-logo-width);
      height: var(--navbar-logo-height);
    }

    .autocomplete-input-wrapper {
      width: var(--autocomplete-input-wrapper-width);
    }

    .dropdown-menu {
      position: var(--desktop-dropdown-menu-wrapper-position);
      outline: var(--desktop-dropdown-menu-wrapper-outline);

      .profile-button {
        background-color: var(--desktop-profile-button-background-color);
        border: var(--desktop-profile-button-border);
        border-radius: var(--desktop-profile-button-border-radius);
        padding: var(--desktop-profile-button-padding);
        display: var(--desktop-profile-button-display);
        align-items: var(--desktop-profile-button-align-items);
        gap: var(--desktop-profile-button-gap);
        cursor: var(--desktop-profile-button-cursor);

        .profile-picture {
          border-radius: var(--navbar-profile-picture-border-radius);
        }

        .burger-icon {
          width: var(--desktop-burger-icon-width);
          height: var(--desktop-burger-icon-height);
          color: var(--desktop-burger-icon-color);
        }
      }

      .profile-menu {
        position: var(--desktop-profile-menu-position);
        bottom: var(--desktop-profile-menu-bottom);
        right: var(--desktop-profile-menu-right);
        height: var(--desktop-profile-menu-height);
        border-radius: var(--desktop-profile-menu-border-radius);
        box-shadow: var(--desktop-profile-menu-box-shadow);
        width: var(--desktop-profile-menu-width);
        transition: var(--desktop-profile-menu-transition);
        background-color: var(--desktop-profile-menu-background-color);
        transform-origin: var(--desktop-profile-menu-transform-origin);
        list-style-type: var(--desktop-profile-menu-list-style);
        font-size: var(--desktop-profile-menu-font-size);
        display: var(--desktop-profile-menu-display);
        flex-direction: var(--desktop-profile-menu-flex-direction);
        gap: var(--desktop-profile-menu-gap);
        padding: var(--desktop-profile-menu-padding);
        min-width: var(--desktop-profile-menu-min-width);
        z-index: var(--desktop-profile-menu-z-index);

        .divider {
          width: var(--mobile-profile-menu-divider-width);
          align-self: var(--mobile-profile-menu-divider-align-self);
          height: var(--mobile-profile-menu-divider-height);
          border: var(--mobile-profile-menu-divider-border);
          border-top: var(--mobile-profile-menu-divider-border-top);
        }

        .menu-link {
          cursor: var(--profile-menu-link-cursor);
          background-color: var(--profile-menu-link-background-color);
          border: var(--profile-menu-link-border);
          text-align: var(--profile-menu-link-text-align);
          color: var(--profile-menu-link-color);
          padding: var(--profile-menu-link-padding);
        }

        .menu-link:hover {
          background-color: var(--menu-link-hover-background-color);
        }
      }

      .profile-menu.hidden {
        opacity: var(--profile-menu-hidden-opacity);
        transform: var(--profile-menu-hidden-transform);

        .menu-link {
          --profile-menu-link-cursor: default;
        }
      }
    }
  }

  @media (min-width: ${gridBreakpoint.md}) {
    height: var(--header-height-desktop);

    .navbar-content-mobile {
      --navbar-content-mobile-display: none;
    }

    .navbar-content-desktop {
      --navbar-content-desktop-display: flex;
    }
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    --navbar-wrapper-border-top: none;
    --navbar-wrapper-border-bottom: 1px solid var(--light-grey);
    --navbar-wrapper-position: static;

    .navbar-content-desktop {
      .dropdown-menu {
        .profile-menu {
          --desktop-profile-menu-transform-origin: top right;
          top: var(--profile-menu-desktop-top);
        }
      }
    }
  }
`;
