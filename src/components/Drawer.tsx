import React from "react";

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
              <a href="/" className="drawer--list__anchor">
                HOME
              </a>
            </li>
            <li>
              <a href="/profile.html" className="drawer--list__anchor">
                Profile
              </a>
            </li>
            <li>
              <a href="/gallery.html" className="drawer--list__anchor">
                Gallery
              </a>
            </li>
            <li>
              <a href="mailto:">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
