import React from "react";
import UniversalRouter from "universal-router";
import { Index } from "./pages/index";

export const routes = [
  {
    path: "",
    action: () => React.createElement(Index)
  },
  {
    path: "/garalley",
    action: () => React.createElement(Index)
  }
];

export const router = new UniversalRouter(routes);
