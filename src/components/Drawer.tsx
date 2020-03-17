import React from "react";

interface Props {
  drawerOpen: boolean;
}

export const Drawer = (props: Props) => {
  return (
    <div className={`drawer--wrapper ${props.drawerOpen ? "" : "out"}`}>
      <div className="drawer">アイウエオ</div>
    </div>
  );
};
