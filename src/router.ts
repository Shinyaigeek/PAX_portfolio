import React from "react";
import UniversalRouter from "universal-router";
import { Index } from "./pages/index";
import { Profile } from "./pages/profile"
import { Gallery } from "./pages/gallery";

export const routes = [
  {
    path: "",
    action: () => React.createElement(Index)
  },
  {
    path: "/profile",
    action: () => React.createElement(Profile)
  },
  {
    path: "/gallery", 
    action: () => React.createElement(Gallery)
  }
];

export const router = new UniversalRouter(routes);
