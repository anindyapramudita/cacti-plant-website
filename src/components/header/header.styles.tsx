import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.nav<{}>`
  --header-height: var(--header-height-mobile);
  --header-background-color: var(--white);
  --header-box-shadow: 0 -4px 25px rgba(0, 0, 0, 25%);
  --header-overflow: hidden;
  --header-position: fixed;
  --header-bottom: 0;
  --header-width: 100%;
  --header-z-index: 2;
  --header-display: block;
  --header-align-items: center;
  --header-justify-content: center;

  --nav-link-color: var(--black);
  --nav-link-text-decoration: none;
  --nav-link-cursor: pointer;
  --nav-link-flex: 0;
  --nav-link-gap: 0;
  --nav-link-justify-content: start;

  --desktop-links-display: none;
  --desktop-links-margin: 0;

  --logo-width: 40px;
  --logo-height: 40px;
  --logo-border: none;
  --logo-background: transparent;
  --logo-cursor: pointer;

  --mobile-wrapper-height: var(--header-height-mobile);
  --mobile-wrapper-display: flex;
  --mobile-wrapper-align-items: center;
  --mobile-wrapper-justify-content: space-evenly;
  --mobile-wrapper-color: var(--disabled-dark);

  height: var(--header-height);
  background-color: var(--header-background-color);
  box-shadow: var(--header-box-shadow);
  overflow: var(--header-overflow);
  position: var(--header-position);
  bottom: var(--header-bottom);
  width: var(--header-width);
  z-index: var(--header-z-index);
  display: var(--header-display);
  align-items: var(--header-align-items);
  justify-content: var(--header-justify-content);

  .nav-link {
    color: var(--nav-link-color);
    text-decoration: var(--nav-link-text-decoration);
    cursor: var(--nav-link-cursor);
  }

  .nav-link:hover {
    --nav-link-text-decoration: underline;
  }

  .nav-link.nav-link-disabled {
    --nav-link-color: var(--disabled-dark);
  }

  .nav-link.nav-link-disabled:hover {
    --nav-link-text-decoration: none;
    --nav-link-cursor: default;
  }

  .business-logo {
    width: var(--logo-width);
    height: var(--logo-height);
  }

  .navlinks-1,
  .navlinks-2,
  .desktop-logo-wrapper {
    display: var(--desktop-links-display);
    flex: var(--nav-link-flex);
    gap: var(--nav-link-gap);
    justify-content: var(--nav-link-justify-content);
    margin: var(--desktop-links-margin);
  }

  .desktop-logo-wrapper {
    border: var(--logo-border);
    background: var(--logo-background);
    cursor: var(--logo-cursor);
  }

  .desktop-logo-wrapper.logo-disabled {
    --logo-cursor: default;
  }

  .mobile-logo-wrapper {
    height: var(--mobile-wrapper-height);
    display: var(--mobile-wrapper-display);
    align-items: var(--mobile-wrapper-align-items);
    justify-content: var(--mobile-wrapper-justify-content);
  }

  .link-button {
    border: var(--logo-border);
    background: var(--logo-background);
    color: var(--mobile-wrapper-color);
  }

  .link-button.link-button-disabled {
    border-bottom: 5px solid var(--secondary);
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --header-height: var(--header-height-desktop);
    --header-display: flex;
    --header-align-items: center;
    --header-justify-content: center;

    .navlinks-1,
    .navlinks-2 {
      --desktop-links-display: flex;
      --nav-link-flex: 1;
      --nav-link-gap: 1.5rem;
    }

    .navlinks-1 {
      --nav-link-justify-content: flex-end;
    }

    .desktop-logo-wrapper {
      --desktop-links-display: flex;
      --desktop-links-margin: 0 1.5rem;
    }

    .business-logo {
      --logo-width: 60px;
      --logo-height: 60px;
    }

    .mobile-logo-wrapper {
      --mobile-wrapper-display: none;
    }
  }
`;
