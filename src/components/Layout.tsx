import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Drawer } from "./Drawer";

export const Layout = (Component: (props?: any) => JSX.Element) => {
  return (props?: any) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    function handleDrawerOpen() {
      setDrawerOpen(!drawerOpen);
    }
    return (
      <>
        <Header drawerOpen={drawerOpen} handleDrawerOpen={handleDrawerOpen} />
        <Drawer drawerOpen={drawerOpen} />

        <div className="page">
          <Component {...props} />
        </div>

        <Footer />
      </>
    );
  };
};
