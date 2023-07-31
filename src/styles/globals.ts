import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Raleway:wght@100;400;500;700&display=swap');

  :root {
    /**Achromatic */
    --white: #ffffff;
    --black: #000000;
    /**Colors */
    --primary: #123132;
    --primary-light: #44595b;
    --secondary: #9F5841;
    --secondary-dark: #3C2B25;
    --secondary-light: #a17b6f;
    --disabled-dark: #AFAEAE;
    --disabled-light: #E5E5E5;
    --error-color: red;
    /** Spacings */
    --spacing-xxs: 0.25rem;
    --spacing-xs: 0.5rem;
    --spacing-s: 0.75rem;
    --spacing-md: 1rem;
    --spacing-l: 1.25rem;
    --spacing-xl: 1.5rem;
    --spacing-xxl: 2rem;
    --spacing-xxxl: 2.25rem;
    --spacing-jumbo: 2.5rem;
    --spacing-xjumbo: 3rem;
    --spacing-xxjumbo: 3.5rem;
    --spacing-xxxjumbo: 4rem;
    --spacing-mega: 4.5rem;
    --spacing-giga: 7rem;
    /** Borders */
    --border-radius: 6px;
    /** Grid Breakpoints */
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --breakpoint-xxl: 1400px;
    /** Font Family */
    --font-family: Raleway, Poppins, sans-serif, -apple-system, blinkmacsystemfont, avenir next, avenir, segoe ui, helvetica neue, helvetica,
    ubuntu, roboto, noto, arial, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol;
  }

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: var(--font-family);
  }

    body {
    margin: 0;
    --font-size--small: .875rem;
    --font-size-regular: 1rem;
    --font-size--large: 1.125rem;
    --line-height: 1.5;
    --header-height: 3rem;
    font-size: var(--font-size-regular);
    line-height: var(--line-height);
    font-weight: 400;
    font-family: var(--font-family);
  }

  html, body {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;
