import React, { useState, createRef } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Drawer } from "./Drawer";
import { FooterBar } from "./FooterBar";

export const Layout = (Component: (props?: any) => JSX.Element) => {
  return (props?: any) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerRotate, setDrawerRotate] = useState(180);

    // const drawerEl = createRef() as React.RefObject<HTMLDivElement>;

    function handleDrawerOpen() {
      // drawerEl.current!.style.transform = "";
      setDrawerRotate(drawerRotate + 180);
      setDrawerOpen(!drawerOpen);
    }
    return (
      <>
        <Header drawerOpen={drawerOpen} handleDrawerOpen={handleDrawerOpen} />
        <Drawer drawerOpen={drawerOpen} drawerRotate={drawerRotate} />

        <div className="page">
          <Component {...props} />
        </div>

        <Footer />
        <FooterBar />
      </>
    );
  };
};
