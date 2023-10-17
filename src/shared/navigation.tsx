export type Navigation = {
  path: string;
  name: string;
  roles: string[];
};
export const navigation: Navigation[] = [
  {
    path: "#",
    name: "Sign In",
    roles: ["admin", "all"],
  },
  {
    path: "/register",
    name: "Sign Up",
    roles: ["admin", "all"],
  },
  {
    path: "/profile",
    name: "Profile",
    roles: ["user"],
  },
  {
    path: "#",
    name: "Divider",
    roles: ["user", "admin", "all"],
  },
  {
    path: "/shuffle",
    name: "Shuffle",
    roles: ["admin", "user", "all"],
  },
  {
    path: "/",
    name: "Plants",
    roles: ["admin", "user", "all"],
  },
  {
    path: "#",
    name: "Divider",
    roles: ["user", "admin", "all"],
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    roles: ["admin", "user", "all"],
  },
  {
    path: "/about-us",
    name: "About Us",
    roles: ["admin", "user", "all"],
  },
  {
    path: "#",
    name: "Divider",
    roles: ["user"],
  },
  {
    path: "#",
    name: "Log out",
    roles: ["user"],
  },
];
