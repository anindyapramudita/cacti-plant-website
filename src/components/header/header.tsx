import { Logo } from "@/assets/logo";
import config from "@/shared/config";
import { navigation } from "@/shared/navigation";
import Link from "next/link";
import { FC, useMemo, useState } from "react";
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
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const Header: FC<IHeaderProps> = ({ onLogin }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { data } = useSession();
  const router = useRouter();

  const currentRoll = useMemo(() => {
    if (data?.user?.role) {
      return data?.user?.role;
    } else {
      return "all";
    }
  }, [data]);

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
          .filter((item) => item.roles.includes(currentRoll))
          .map((path: any, index) => (
            <li key={index}>
              <a href={`${config.websiteUrl}/${path.path}`} key={index}>
                {path.name}
              </a>
            </li>
          ))}
      </NavigationWrapper>
      {data?.user?.name ? (
        <ButtonWrapper>
          <p>Welcome back, {data?.user?.name}</p>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            onClick={() => signOut()}
          >
            Sign out
          </Button>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <Button variant="outlined" size="small" onClick={onLogin}>
            Log in
          </Button>
          <Button
            size="small"
            color="secondary"
            onClick={() => {
              router.push("/register");
            }}
          >
            Sign up
          </Button>
        </ButtonWrapper>
      )}
    </StylesWrapper>
  );
};
