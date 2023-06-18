import { gridBreakpoint } from "@/shared/breakpoints";
import { ralewayMedium, ralewayThin } from "@/styles/fonts";
import styled from "styled-components";

export const StylesWrapper = styled.nav<{}>`
  ${ralewayThin}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.2px 10px;
  height: 3rem;

  .logo-link {
    text-decoration: none;
    color: black;
  }
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

export const LogoWrapper = styled.div<{}>`
  ${ralewayMedium}
  display: flex;
  align-items: center;
  font-size: 24px;

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

export const NavigationWrapper = styled.ul<{
  drawerOpen: boolean;
}>`
  position: fixed;
  inset: 0 0 0 30%;
  background: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: min(20vh, 160px) 32px;
  background: rgba(18, 49, 50, 0.8);
  z-index: 1000;
  a {
    color: var(--white);
    text-decoration: none;
  }

  transform: ${(props) =>
    props.drawerOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-out;

  @supports (backdrop-filter: blur(16px)) {
    background: rgba(18, 49, 50, 0.5);
    backdrop-filter: blur(16px);
  }

  @media (min-width: ${gridBreakpoint.sm}) {
  }

  @media (min-width: ${gridBreakpoint.md}) {
    padding: 0;
    position: static;
    flex-direction: row;
    ${ralewayThin}
    align-items: center;
    background-color: transparent;
    gap: 32px;
    transform: translateX(0);
    a {
      color: var(--black);
    }

    li {
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    li:hover {
      transform: translateY(-1.6px);
      text-decoration: underline;
    }

    li:active {
      transform: translateY(0);
    }
  }

  @media (min-width: ${gridBreakpoint.lg}) {
  }

  @media (min-width: ${gridBreakpoint.xl}) {
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
  }
`;

export const ButtonWrapper = styled.div<{}>`
  display: none;

  @media (min-width: ${gridBreakpoint.sm}) {
  }

  @media (min-width: ${gridBreakpoint.md}) {
    ${ralewayThin}
    height: 36px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (min-width: ${gridBreakpoint.lg}) {
  }

  @media (min-width: ${gridBreakpoint.xl}) {
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
  }
`;

export const MenuWrapper = styled.button<{
  drawerOpen: boolean;
}>`
  cursor: pointer;
  z-index: 9999;
  position: absolute;
  display: flex;
  background-color: transparent;
  border: 0;
  top: 8px;
  right: ${(props) => (props.drawerOpen ? "60%" : "32px")};
  transition: right 0.3s ease-out;

  @media (min-width: ${gridBreakpoint.sm}) {
  }

  @media (min-width: ${gridBreakpoint.md}) {
    display: none;
  }

  @media (min-width: ${gridBreakpoint.lg}) {
  }

  @media (min-width: ${gridBreakpoint.xl}) {
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
  }
`;
