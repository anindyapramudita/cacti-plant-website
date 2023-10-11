import { FC, useMemo, useState, useEffect, useRef, FocusEvent } from "react";
import { INavbarProps } from "./navbar.interface";
import { StylesWrapper } from "./navbar.styles";
import { IconButton } from "../icon-button";
import { Logo } from "@/assets";
import { signOut, useSession } from "next-auth/react";
import { BiMenu } from "react-icons/bi";
import { HiMenu, HiSearch } from "react-icons/hi";
import Image from "next/image";
import { AutocompleteSearchInput } from "./components/autocomplete-search-input";
import classNames from "classnames";
import { Navigation, navigation } from "@/shared/navigation";
import { useRouter } from "next/router";
import { getAutocompletePlants } from "@/sanity/get-autocomplete-plants";
import { AutocompletePlant } from "@/shared/type/data-types";

export const Navbar: FC<INavbarProps> = ({ onLogin }) => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [plantSearch, setPlantSearch] = useState<string>("");
  const [plantSuggestion, setPlantSuggestion] = useState<AutocompletePlant[]>(
    []
  );
  const loggedOutPicture =
    "https://cdn.sanity.io/images/rb0oc6we/production/1f3ce922a72fd46e1ea2cf1a424f64016ba1b733-150x150.png";

  const router = useRouter();

  const currentRole = useMemo(() => {
    if (session?.user?.role) {
      return session?.user?.role;
    } else {
      return "all";
    }
  }, [session?.user?.role]);

  const renderMenu = (navigation: Navigation, index: number) => {
    if (navigation.roles.includes(currentRole)) {
      if (navigation.name === "Divider") {
        return <hr className="divider" key={`divider-${index}`} />;
      } else {
        return (
          <button
            key={`menu-${index}`}
            disabled={!isMenuOpen}
            className="menu-link"
            onClick={() => {
              if (navigation.name === "Sign In") {
                onLogin();
                setIsMenuOpen(false);
              } else if (navigation.name === "Log out") {
                signOut();
                setIsMenuOpen(false);
              } else {
                router.push(navigation.path);
                setIsMenuOpen(false);
              }
            }}
          >
            {navigation.name}
          </button>
        );
      }
    } else {
      return null;
    }
  };

  const handleSearchChange = (search: string) => setPlantSearch(search);

  // eslint-disable-next-line no-undef
  const debounceTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const debouncedGetAutocompletePlants = (query: string) => {
      clearTimeout(debounceTimeoutRef.current);
      debounceTimeoutRef.current = setTimeout(async () => {
        try {
          const response = await getAutocompletePlants(query);
          if (response) {
            setPlantSuggestion(response);
          } else {
            console.log("error");
          }
        } catch (error) {
          console.log(error);
        }
      }, 1000);
    };

    if (plantSearch) {
      debouncedGetAutocompletePlants(`name match "*${plantSearch}*"`);
    } else {
      setPlantSuggestion([]);
    }
    return () => {
      clearTimeout(debounceTimeoutRef.current);
    };
  }, [plantSearch]);

  const handleSearchClick = () => router.push(`/search?search=${plantSearch}`);

  const desktopWrapperRef = useRef<HTMLDivElement | null>(null);
  const desktopMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileWrapperRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileSearchWrapperRef = useRef<HTMLDivElement | null>(null);
  const mobileSearchRef = useRef<HTMLDivElement | null>(null);

  const handleBlurMobile = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.relatedTarget || !mobileWrapperRef.current) {
      setIsMenuOpen(false);
    } else if (!mobileWrapperRef.current.contains(e.relatedTarget as Node)) {
      setIsMenuOpen(false);
    }
  };

  const handleBlurSearchMobile = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.relatedTarget || !mobileSearchWrapperRef.current) {
      setIsSearchOpen(false);
    } else if (
      !mobileSearchWrapperRef.current.contains(e.relatedTarget as Node)
    ) {
      setIsSearchOpen(false);
    }
  };

  const handleBlurDesktop = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.relatedTarget || !desktopWrapperRef.current) {
      setIsMenuOpen(false);
    } else if (!desktopWrapperRef.current.contains(e.relatedTarget as Node)) {
      setIsMenuOpen(false);
    }
  };

  return (
    <StylesWrapper>
      <div className="navbar-content-desktop">
        <IconButton
          icon={<Logo className="website-logo" />}
          onClick={() => router.push("/")}
        />
        <div className="autocomplete-input-wrapper">
          <AutocompleteSearchInput
            onSearchChange={handleSearchChange}
            suggestions={plantSuggestion}
            onSearchClick={handleSearchClick}
          />
        </div>
        <div
          className="dropdown-menu"
          onBlur={handleBlurDesktop}
          ref={desktopWrapperRef}
        >
          <button
            className="profile-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              src={session?.user?.image || loggedOutPicture}
              alt="profile-picture"
              width={24}
              height={24}
              className="profile-picture"
            />
            <BiMenu className="burger-icon" />
          </button>
          <div
            className={classNames("profile-menu", { hidden: !isMenuOpen })}
            ref={desktopMenuRef}
          >
            {navigation.map((nav: Navigation, index: number) =>
              renderMenu(nav, index)
            )}
          </div>
        </div>
      </div>
      <div className="navbar-content-mobile">
        <IconButton
          icon={
            <Image
              src={session?.user?.image || loggedOutPicture}
              alt="profile-picture"
              width={40}
              height={40}
              className="profile-picture"
            />
          }
          className="profile-button"
          onClick={() => (session ? router.push("/profile") : onLogin())}
        />
        <div
          className="dropdown-menu"
          onBlur={handleBlurMobile}
          ref={mobileWrapperRef}
        >
          <div
            className={classNames("dropdown-overlay", { hidden: !isMenuOpen })}
          />
          <IconButton
            icon={<HiMenu className="burger-icon" size={32} />}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <div
            className={classNames("profile-menu", { hidden: !isMenuOpen })}
            ref={mobileMenuRef}
          >
            {navigation.map((nav: Navigation, index: number) =>
              renderMenu(nav, index)
            )}
          </div>
        </div>
        <div
          className="search-wrapper"
          ref={mobileSearchWrapperRef}
          onBlur={handleBlurSearchMobile}
        >
          <div
            className={classNames("search-menu-overlay", {
              hidden: !isSearchOpen,
            })}
          />
          <IconButton
            icon={<HiSearch size={32} className="search-button" />}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          <div
            className={classNames("search-menu", { hidden: !isSearchOpen })}
            ref={mobileSearchRef}
          >
            <AutocompleteSearchInput
              onSearchChange={handleSearchChange}
              suggestions={plantSuggestion}
              onSearchClick={handleSearchClick}
            />
          </div>
        </div>
      </div>
    </StylesWrapper>
  );
};
