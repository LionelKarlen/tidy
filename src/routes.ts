import { Component } from "solid-js";
import { FiLogOut, FiMapPin, FiTag } from "solid-icons/fi";

export type NavRoute = {
  name: string;
  href: string;
  icon: Component;
  priviledged: boolean;
  page?: Component;
};

export const routes: NavRoute[] = [
  {
    name: "Categories",
    href: "/categories",
    icon: FiTag,
    priviledged: true,
  },
  {
    name: "Locations",
    href: "/locations",
    icon: FiMapPin,
    priviledged: true,
  },
  {
    name: "Logout",
    href: "/logout",
    icon: FiLogOut,
    priviledged: true,
  },
];
