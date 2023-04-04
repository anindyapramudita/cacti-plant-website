import { gridBreakpoint } from "@/shared/breakpoints";
import { ralewayBold, ralewayMedium, ralewayThin } from "@/styles/fonts";
import styled from "styled-components";

export const StylesWrapper = styled.nav<{}>`
  ${ralewayThin}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.325rem 0.625rem;

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
  font-size: 1.5rem;

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
  drawerOpen: boolean 
}>`
  position: fixed;
  inset: 0 0 0 30%;
  background: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: min(20vh, 10rem) 2rem;
  color: var(--white);
  background: rgba(18, 49, 50, 0.8);
  z-index: 1000;

  transform: ${(props) =>
    props.drawerOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-out;

  

  @supports (backdrop-filter: blur(1rem)) {
    background: rgba(18, 49, 50, 0.5);
    backdrop-filter: blur(1rem);
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
    color: var(--black);
    gap: 2rem;
    transform: translateX(0);

    li {
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    li:hover {
      transform: translateY(-0.1rem);
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
    height: 2.25rem;
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }

  @media (min-width: ${gridBreakpoint.lg}) {
  }

  @media (min-width: ${gridBreakpoint.xl}) {
  }

  @media (min-width: ${gridBreakpoint.xxl}) {
  }
`;

export const MenuWrapper = styled.button<{
  drawerOpen: boolean
}>`
  cursor: pointer;
  z-index: 9999;
  position: absolute;
  display: flex;
  background-color: transparent;
  border: 0;
  top: 0.5rem;
  right: ${props => props.drawerOpen ? '60%': '2rem'};
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
