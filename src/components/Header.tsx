import React from "react";
import { Link } from "./Link";

interface Props {
  drawerOpen: boolean;
  handleDrawerOpen: () => void;
}

export const Header = (props: Props) => (
  <header className={`header ${props.drawerOpen ? "transparent" : ""}`}>
    {/* <a href="/" className="title">
      Chie Shiraishi
    </a> */}
    <Link to="/" class="title" label="Chie Shiraishi" />

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
