import React from "react";
import UniversalRouter from "universal-router";

const Index = React.lazy(() => import("./pages/index"));
const Profile = React.lazy(() => import("./pages/profile"));
const Gallery = React.lazy(() => import("./pages/gallery"));

export const routes = [
  {
    path: "/",
    action: () => (
      <React.Suspense fallback={<div>loading</div>}>
        <Index />
      </React.Suspense>
    )
  },
  {
    path: "/profile",
    action: () => (
      <React.Suspense fallback={<div>loading</div>}>
        <Profile />
      </React.Suspense>
    )
  },
  {
    path: "/gallery",
    action: () => (
      <React.Suspense fallback={<div>loading</div>}>
        <Gallery />
      </React.Suspense>
    )
  }
];

export const router = new UniversalRouter(routes);
