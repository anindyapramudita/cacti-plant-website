import styled from "styled-components";

export const FavoriteWrapper = styled.button<{ isLiked: boolean }>`
  --button-position: absolute;
  --button-margin: 0.625rem;
  --button-position-gap: 0.75rem;
  --button-cursor: pointer;
  --button-background-color: transparent;
  --button-color: var(--white);
  --button-border: none;
  --button-size: 45px;
  --button-transition: scale 0.2s ease-out, color 0.5s ease;
  --button-transform: scale(1.1);

  position: var(--button-position);
  margin: var(--button-margin);
  top: var(--button-position-gap);
  right: var(--button-position-gap);
  cursor: var(--button-cursor);

  background-color: var(--button-background-color);
  border: var(--button-border);

  .heart-icon {
    ${props => props.isLiked && '--button-color: var(--like-color)'};
    width: var(--button-size);
    height: var(--button-size);
    color: var(--button-color);
    transition: var(button-transition);
    
    &:hover {
      transform: var(--button-transform);
    }
  }

  &:active .heart-icon {
    --button-transform: scale(1);
  }
`;
