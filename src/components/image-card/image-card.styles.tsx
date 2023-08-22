import styled from "styled-components";
import Image from "next/image";
import { gridBreakpoint } from "@/shared/breakpoints";

export const StyledImage = styled(Image)`
  @media (min-width: ${gridBreakpoint.xl}) {
    &.carousel {
      animation: fade 5s linear infinite;

      @keyframes fade {
        0% {
          opacity: 0;
        }
        20% {
          opacity: 1;
        }
        80% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    }
  }
`;
