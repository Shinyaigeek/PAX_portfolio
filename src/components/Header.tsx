import React from "react";

interface Props {
  drawerOpen: boolean;
  handleDrawerOpen: () => void;
}

export const Header = (props: Props) => (
  <header className={`header ${props.drawerOpen ? "transparent" : ""}`}>
    <div className="title">Chie Shiraishi</div>

    <div className="header--contentsHamburger">
      <div
        id="hamburger--menu"
        className={
          !props.drawerOpen
            ? "hamburger--menu__trigger"
            : "hamburger--menu__trigger__active"
        }
        onClick={() => props.handleDrawerOpen()}
      >
        <span className="hamburger--menu__trigger__part" />
        <span className="hamburger--menu__trigger__part" />
        <span className="hamburger--menu__trigger__part" />
      </div>
    </div>
  </header>
);
