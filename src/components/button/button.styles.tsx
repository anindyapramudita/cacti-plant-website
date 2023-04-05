import { ralewayThin } from "@/styles/fonts";
import styled from "styled-components";

export const StylesWrapper = styled.button<{
  color?: "primary" | "secondary";
  variant?: "filled" | "reversed" | "outlined";
  isLoading?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
}>`
  ${ralewayThin}

  --padding-small: .625rem 16px;
  --padding-medium: 0.6875em 3em;
  --padding-large: 0.7125em 3.0125em;

  cursor: pointer;
  display: "inline-block";
  line-height: 1;
  transition: background-color 0.4s ease, border-color 0.4s ease;

  position: ${(props) => props.isLoading && "relative"};
  border: ${(props) =>
    props.variant === "reversed"
      ? ".0625rem solid var(--white)"
      : `.0625rem solid var(--${props.color})`};
  padding: ${(props) =>
    props.size ? `var(--padding-${props.size})` : "var(--padding-medium"};
  color: ${(props) =>
    props.variant === "filled" ? "var(--white)" : `var(--${props.color})`};
  background-color: ${(props) =>
    props.variant === "filled"
      ? `var(--${props.color})`
      : props.variant === "reversed"
      ? "var(--white)"
      : "transparent"};
  font-size: ${(props) => `var(--font-size--${props.size})`};
  width: ${(props) => (props.fullWidth ? "100%" : "")};

  &:hover {
    color: var(--white);
    background-color: ${(props) =>
      props.variant === "filled"
        ? `var(--${props.color}-light)`
        : `var(--${props.color})`};
    border-color: ${(props) =>
      props.variant === "filled"
        ? `var(--${props.color}-light)`
        : `var(--${props.color})`};
  }

  &:disabled {
    background-color: var(--disabled-light);
    border-color: var(--disabled-light);
    color: ${(props) =>
      props.isLoading ? "var(--black)" : "var(--disabled-dark)"};
    // color: ${(props) =>
      props.isLoading ? "transparent" : "var(--disabled-dark)"};
    cursor: default;
  }
`;

export const StylesText = styled.p<{
  isLoading?: boolean;
}>`
  visibility: ${(props) => (props.isLoading ? "hidden" : "")};
  // display: ${(props) => (props.isLoading ? "none" : "")};
`;
