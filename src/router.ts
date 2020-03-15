import React from "react";
import UniversalRouter from "universal-router";
import { Index } from "./pages/index";
import { Profile } from "./pages/profile"

export const routes = [
  {
    path: "",
    action: () => React.createElement(Index)
  },
  {
    path: "/profile",
    action: () => React.createElement(Profile)
  }
];

export const router = new UniversalRouter(routes);
