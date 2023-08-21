import { FC, useMemo } from "react";
import { IHeaderProps } from "./header.interface";
import { StylesWrapper } from "./header.styles";
import { Logo } from "@/assets/logo";
import {
  AiOutlinePhone,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";
import { Navigation, navigation } from "@/shared/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import classNames from "classnames";

export const Header: FC<IHeaderProps> = ({ onLogin }) =>
  // {onLogin}
  {
    // const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const { data } = useSession();
    const { pathname } = useRouter();
    console.log("pathname", pathname);
    const currentRole = useMemo(() => {
      if (data?.user?.role) {
        return data?.user?.role;
      } else {
        return "all";
      }
    }, [data]);

    const renderNavLink = (nav: Navigation, index: number) => {
      if (nav.name !== "Login") {
        return (
          <Link
            href={pathname === nav.path ? "#" : nav.path}
            className={classNames("nav-link", {
              "nav-link-disabled": pathname === nav.path,
            })}
            onClick={(e) => {
              if (pathname === nav.path) e.preventDefault();
            }}
            key={`nav-link-${index}`}
          >
            {nav.name}
          </Link>
        );
      } else {
        return (
          <Link
            href="#"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              onLogin();
            }}
            key={`nav-link-${index}`}
          >
            {nav.name}
          </Link>
        );
      }
    };

    return (
      <StylesWrapper className="header-wrapper" data-testid="header-wrapper">
        <div className="navlinks-1">
          {navigation.map((nav, index) => {
            if (index < 3 && nav.roles.includes(currentRole))
              return renderNavLink(nav, index);
          })}
        </div>
        <div className="desktop-logo-wrapper">
          <Logo className="business-logo" />
        </div>
        <div className="navlinks-2">
          {navigation.map((nav, index) => {
            if (index >= 3 && nav.roles.includes(currentRole))
              return renderNavLink(nav, index);
          })}
        </div>
        <div className="mobile-logo-wrapper">
          <Logo className="business-logo" />
          <AiOutlineSearch size={40} />
          <BiShuffle size={40} />
          <AiOutlinePhone size={40} />
          <AiOutlineUser size={40} />
          <AiOutlineUserAdd size={40} />
        </div>
      </StylesWrapper>
    );
  };
