import { BurgerIcon } from "@/assets/burger-icon";
import { CloseIcon } from "@/assets/close-icon";
import { Logo } from "@/assets/logo";
import { FC, useState } from "react";
import { Button } from "../button";
import { IHeaderProps } from "./header.interface";
import {
  StylesWrapper,
  LogoWrapper,
  ButtonWrapper,
  NavigationWrapper,
  MenuWrapper,
} from "./header.styles";

export const Header: FC<IHeaderProps> = ({ children }) => {

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <StylesWrapper data-testid="card-layout">
      <LogoWrapper>
        <Logo />
        <p>Cacti</p>
      </LogoWrapper>
      <MenuWrapper
        drawerOpen={drawerOpen}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        {drawerOpen ? (
          <CloseIcon color="white" />
        ) : (
          <BurgerIcon color="#123132" />
        )}
      </MenuWrapper>
      <NavigationWrapper drawerOpen={drawerOpen}>
        <li>
          <a>Discovery</a>
        </li>
        <li>
          <a>Search</a>
        </li>
        <li>
          <a>Login</a>
        </li>
        <li>
          <a>Register</a>
        </li>
      </NavigationWrapper>
      <ButtonWrapper>
        <Button variant="outlined" size="small">
          Log in
        </Button>
        <Button size="small">Sign up</Button>
      </ButtonWrapper>
    </StylesWrapper>
  );
};
