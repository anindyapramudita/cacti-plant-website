// .storybook/decorators.js

import React from "react";
import { GlobalStyles } from "../src/styles/globals";

const withGlobalStyles = (Story) => (
  <>
    <GlobalStyles />
    <Story />
  </>
);

export const decorators = [withGlobalStyles];
