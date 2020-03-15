import React from "react";
import { Header } from "./Header";

export const Layout = (Component: (props?: any) => JSX.Element) => {
  return (props?: any) => (
    <>
      <Header />

      <div className="page">
        <Component {...props} />
      </div>
    </>
  );
};