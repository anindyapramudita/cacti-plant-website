import styled from "styled-components";

export const StylesWrapper = styled.div<{
  size?: "mini" | "small" | "medium" | "large";
}>`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const StylesCircle = styled.div<{
  number: number;
  size?: "mini" | "small" | "medium" | "large";
}>`
  --diameter-mini: 0.375rem;
  --diameter-small: 0.625rem;
  --diameter-medium: 0.75rem;
  --diameter-large: 1rem;

  --margin-mini: 0 0.3125rem;
  --margin-small: 0 0.375rem;
  --margin-medium: 0 0.625rem;
  --margin-large: 0 0.75rem;

  width: ${(props) => props.size && `var(--diameter-${props.size})`};
  height: ${(props) => props.size && `var(--diameter-${props.size})`};
  margin: ${(props) => props.size && `var(--margin-${props.size})`};
  border-radius: 50%;

  background-color: var(--disabled-dark);
  transform-origin: 50% 50%;
  animation: grow 1s ease infinite;

  animation-delay: ${(props) => props.number && `${0.1 * props.number}s`};

  @keyframes grow {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
