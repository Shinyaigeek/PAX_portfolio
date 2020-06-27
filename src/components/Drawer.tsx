import React from "react";
import { Link } from "./Link";

interface Props {
  drawerOpen: boolean;
  // drawerEl: React.RefObject<HTMLDivElement>
  drawerRotate: number;
}

export const Drawer = (props: Props) => {
  return (
    <div
      className={`drawer--wrapper ${props.drawerOpen ? "" : "out"}`}
      style={{
        transform: `rotate(${props.drawerRotate}deg)`
      }}
    >
      <div className="drawer">
        <div className="drawer--content">
          <ul className="drawer--list">
            <li>
              <Link class="drawer--list__anchor" to="/" label={"HOME"} />
            </li>
            <li>
              <Link
                class="drawer--list__anchor"
                to="/profile"
                label={"PROFILE"}
              />
            </li>
            <li>
              <Link
                class="drawer--list__anchor"
                to="/gallery"
                label={"GALLERY"}
              />
            </li>
            <li>
              <a href="mailto:" className="drawer--list__anchor">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
