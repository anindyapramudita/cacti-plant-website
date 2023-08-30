import { ReactElement } from "react";
import {
  AiOutlinePhone,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BiShuffle, BiLogOut } from "react-icons/bi";
import { BsCollectionPlay } from "react-icons/bs";

export type Navigation = {
  path: string;
  name: string;
  logo: ReactElement;
  roles: string[];
};
export const navigation: Navigation[] = [
  {
    path: "/contact-us",
    name: "Contact Us",
    logo: <AiOutlinePhone size={30} />,
    roles: ["admin", "user", "all"],
  },
  {
    path: "/shuffle",
    name: "Shuffle",
    logo: <BiShuffle size={30} />,
    roles: ["admin", "user", "all"],
  },
  {
    path: "/search",
    name: "Search",
    logo: <AiOutlineSearch size={30} />,
    roles: ["admin", "user", "all"],
  },
  {
    path: "#",
    name: "Login",
    logo: <AiOutlineUser size={30} />,
    roles: ["admin", "all"],
  },
  {
    path: "/register",
    name: "Sign Up",
    logo: <AiOutlineUserAdd size={30} />,
    roles: ["admin", "all"],
  },
  {
    path: "/collection",
    name: "Collection",
    logo: <BsCollectionPlay size={30} />,
    roles: ["user"],
  },
  {
    path: "/profile",
    name: "Profile",
    logo: <AiOutlineUser size={30} />,
    roles: ["user"],
  },
  {
    path: "#",
    name: "Log out",
    logo: <BiLogOut size={30} />,
    roles: ["user"],
  },
];
