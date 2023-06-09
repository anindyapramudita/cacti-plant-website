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
  border: solid 0.0625rem var(--primary);
  border-bottom: none;
  cursor: pointer;
  border-top-left-radius: 0.625rem;
  border-top-right-radius: 0.625rem;
  padding: 4px 10px;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.activeTab === props.index ? "var(--primary)" : "var(--white)"};

  @media (min-width: ${gridBreakpoint.sm}) {
  }

  @media (min-width: ${gridBreakpoint.md}) {
    padding: 0.5rem 1rem;
    svg {
      width: 1.5625rem;
      height: 1.5625rem;
    }
  }

  @media (min-width: ${gridBreakpoint.lg}) {
  }

  @media (min-width: ${gridBreakpoint.xl}) {
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
  }
`;
