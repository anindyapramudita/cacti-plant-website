import { FC, useMemo } from "react";
import { IHeaderProps } from "./header.interface";
import { StylesWrapper } from "./header.styles";
import { Logo } from "@/assets/logo";
import { Navigation, navigation } from "@/shared/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import classNames from "classnames";

export const Header: FC<IHeaderProps> = ({ onLogin }) => {
  // const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { data } = useSession();
  const { pathname, push } = useRouter();
  const currentRole = useMemo(() => {
    if (data?.user?.role) {
      return data?.user?.role;
    } else {
      return "all";
    }
  }, [data]);

  const renderNavLink = (nav: Navigation, index: number) => {
    return (
      <Link
        href={pathname === nav.path || nav.name == "Login" ? "#" : nav.path}
        className={classNames("nav-link", {
          "nav-link-disabled": pathname === nav.path,
        })}
        onClick={(e) => {
          if (nav.name === "Login") {
            e.preventDefault();
            onLogin();
          } else if (pathname === nav.path) {
            e.preventDefault();
          }
        }}
        key={`nav-link-${index}`}
      >
        {nav.name}
      </Link>
    );
  };

  const renderMobileNavLink = (nav: Navigation, index: number) => {
    return (
      <button
        key={`mobile-nav-link-${index}`}
        className={classNames("link-button", {
          "link-button-disabled": pathname === nav.path,
        })}
        onClick={(e) => {
          if (nav.name === "Login") {
            e.preventDefault();
            onLogin();
          } else {
            push(nav.path);
          }
        }}
      >
        {nav.logo}
      </button>
    );
  };

  return (
    <StylesWrapper className="header-wrapper" data-testid="header-wrapper">
      <div className="navlinks-1">
        {navigation.map((nav, index) => {
          if (index < 3 && nav.roles.includes(currentRole))
            return renderNavLink(nav, index);
        })}
      </div>
      <button
        className={classNames("desktop-logo-wrapper", {
          "logo-disabled": pathname === "/",
        })}
        onClick={() => push("/")}
        disabled={pathname === "/"}
      >
        <Logo className="business-logo" />
      </button>
      <div className="navlinks-2">
        {navigation.map((nav, index) => {
          if (index >= 3 && nav.roles.includes(currentRole))
            return renderNavLink(nav, index);
        })}
      </div>
      <div className="mobile-logo-wrapper">
        <button
          className="link-button"
          onClick={() => push("/")}
          disabled={pathname === "/"}
        >
          <Logo className="business-logo" />
        </button>
        {navigation.map((nav, index) => {
          if (nav.roles.includes(currentRole))
            return renderMobileNavLink(nav, index);
        })}
      </div>
    </StylesWrapper>
  );
};
