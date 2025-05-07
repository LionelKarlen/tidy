import { Component } from "solid-js";
import { FiMapPin, FiTag } from "solid-icons/fi";
import { RoutePreloadFunc } from "@solidjs/router";

export type NavRoute = {
  name: string;
  href: string;
  icon: Component;
  preload?: RoutePreloadFunc;
  page?: Component;
};

export const routes: NavRoute[] = [
  {
    name: "Categories",
    href: "/categories",
    icon: FiTag,
  },
  {
    name: "Locations",
    href: "/locations",
    icon: FiMapPin,
  },
];
