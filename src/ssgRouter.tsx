import React from "react";
import UniversalRouter from "universal-router";

import Index from "./pages/index";
import Profile from "./pages/profile";
import Gallery from "./pages/gallery";

export const routes = [
  {
    path: "",
    action: () => <Index />
  },
  {
    path: "/profile",
    action: () => <Profile />
  },
  {
    path: "/gallery",
    action: () => <Gallery />
  }
];

export const router = new UniversalRouter(routes);
