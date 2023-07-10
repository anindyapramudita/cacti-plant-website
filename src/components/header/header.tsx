import { Logo } from "@/assets/logo";
import config from "@/shared/config";
import { navigation } from "@/shared/navigation";
import Link from "next/link";
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
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

export const Header: FC<IHeaderProps> = ({ role = "all" }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <StylesWrapper data-testid="card-layout">
      <Link href={`/`} className="logo-link">
        <LogoWrapper>
          <Logo />
          <p>Cacti</p>
        </LogoWrapper>
      </Link>
      <MenuWrapper
        drawerOpen={drawerOpen}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        {drawerOpen ? (
          <AiOutlineClose size={30} color="white" />
        ) : (
          <RxHamburgerMenu size={30} color="#123132" />
        )}
      </MenuWrapper>
      <NavigationWrapper drawerOpen={drawerOpen}>
        {navigation
          .filter((item) => item.roles.includes(role))
          .map((path: any, index) => (
            <li key={index}>
              <a href={`${config.websiteUrl}/${path.path}`} key={index}>
                {path.name}
              </a>
            </li>
          ))}
      </NavigationWrapper>
      <ButtonWrapper>
        <Button variant="outlined" size="small" onClick={() => null}>
          Log in
        </Button>
        <Button size="small">Sign up</Button>
      </ButtonWrapper>
    </StylesWrapper>
  );
};
