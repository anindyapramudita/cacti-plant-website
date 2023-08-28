import { ReactElement } from "react";
import {
  AiOutlinePhone,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";

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
    logo: <AiOutlinePhone size={40} />,
    roles: ["admin", "user", "all"],
  },
  {
    path: "/shuffle",
    name: "Shuffle",
    logo: <BiShuffle size={40} />,
    roles: ["admin", "user", "all"],
  },
  {
    path: "/search",
    name: "Search",
    logo: <AiOutlineSearch size={40} />,
    roles: ["admin", "user", "all"],
  },
  {
    path: "/login",
    name: "Login",
    logo: <AiOutlineUser size={40} />,
    roles: ["admin", "all"],
  },
  {
    path: "/register",
    name: "Sign Up",
    logo: <AiOutlineUserAdd size={40} />,
    roles: ["admin", "all"],
  },
  {
    path: "/collection",
    name: "Collection",
    logo: <AiOutlineUserAdd size={40} />,
    roles: ["user"],
  },
  {
    path: "/profile",
    name: "Profile",
    logo: <AiOutlineUserAdd size={40} />,
    roles: ["user"],
  },
];
