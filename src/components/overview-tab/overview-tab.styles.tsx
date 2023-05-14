import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{}>`
  display: flex;
  align-items: center;
  margin: 0;
  @media (min-width: ${gridBreakpoint.sm}) {
  }

  @media (min-width: ${gridBreakpoint.md}) {
  }

  @media (min-width: ${gridBreakpoint.lg}) {
  }

  @media (min-width: ${gridBreakpoint.xl}) {
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
  }
`;

export const TabWrapper = styled.button<{ activeTab?: number; index: number }>`
  background: ${(props) =>
    props.activeTab === props.index ? "var(--white)" : "var(--primary)"};
  border: solid 1px var(--primary);
  border-bottom: none;
  cursor: pointer;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0.25rem 0.625rem;
  display: flex;
  align-items: center;

  @media (min-width: ${gridBreakpoint.sm}) {
  }

  @media (min-width: ${gridBreakpoint.md}) {
    padding: 0.5rem 1rem;
    svg {
      width: 25px;
      height: 25px;
    }
  }

  @media (min-width: ${gridBreakpoint.lg}) {
  }

  @media (min-width: ${gridBreakpoint.xl}) {
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
  }
`;
// export const StylesWrapper = styled.div<{}>`
//   border-radius: 10px;
//   background-color: var(--primary);
//   width: max-content;

//   display: flex;
//   align-items: center;
//   // gap: 20px;
//   // padding: 10px;

//   @media (min-width: ${gridBreakpoint.sm}) {
//   }

//   @media (min-width: ${gridBreakpoint.md}) {
//   }

//   @media (min-width: ${gridBreakpoint.lg}) {
//   }

//   @media (min-width: ${gridBreakpoint.xl}) {
//   }

//   @media (min-width: ${gridBreakpoint.xxl}) {
//   }
// `;

// export const TabWrapper = styled.button<{ activeTab?: number; index: number }>`
//   background-color: ${(props) =>
//     props.activeTab === props.index ? "var(--white)" : "transparent"};
//   border: none;
//   padding: 0.25rem 0.625rem;
//   border-radius: 10px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;

//   &:hover {
//     background-color: ${(props) =>
//       props.activeTab === props.index
//         ? "var(--white)"
//         : "var(--primary-light)"};
//   }

//   @media (min-width: ${gridBreakpoint.sm}) {
//   }

//   @media (min-width: ${gridBreakpoint.md}) {
//   }

//   @media (min-width: ${gridBreakpoint.lg}) {
//   }

//   @media (min-width: ${gridBreakpoint.xl}) {
//   }

//   @media (min-width: ${gridBreakpoint.xxl}) {
//   }
// `;
