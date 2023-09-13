import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  --header-height: var(--header-height-mobile);

  --layout-display: flex;
  --layout-flex-direction: column;
  --layout-align-items: center;
  --layout-justify-content: center;
  --layout-text-align: center;
  --layout-gap: 32px;

  --image-position: relative;
  --image-width: 100vw;
  --image-height: auto;

  --form-max-width: 15rem;
  --form-width: 100%;
  --form-margin: 32px 0 0 0;
  --form-display: flex;
  --form-flex-direction: column;
  --form-justify-content: center;
  --form-align-items: center;
  --form-text-align: center;
  --form-gap: 32px;

  --desktop-header-display: none;

  display: var(--layout-display);
  flex-direction: var(--layout-flex-direction);
  align-items: var(--layout-align-items);
  justify-content: var(--layout-justify-content);
  text-align: var(--layout-text-align);
  gap: var(--layout-gap);

  .image-side {
    width: var(--image-width);
    height: var(--image-height);
  }

  .form-wrapper {
    display: var(--form-display);
    flex-direction: var(--form-flex-direction);
    align-items: var(--layout-align-items);
    justify-content: var(--form-justify-content);
    gap: var(--form-gap);
    width: var(--form-width);

    .register-form {
      max-width: var(--form-max-width);
      margin: var(--form-margin);
      display: var(--form-display);
      flex-direction: var(--form-flex-direction);
      justify-content: var(--form-justify-content);
      align-items: var(--form-align-items);
      text-align: var(--form-text-align);
      gap: var(--form-gap);
    }
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --header-height: var(--header-height-desktop);
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    --layout-flex-direction: row;

    .image-side {
      --image-width: 50vw;
      --image-height: calc(100vh - var(--header-height));
    }

    .form-wrapper {
      --form-width: 50vw;

      .register-form {
        --form-margin: 0;
      }
    }
  }
`;
