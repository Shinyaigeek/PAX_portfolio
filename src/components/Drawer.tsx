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
      <div className="drawer">アイウエオ</div>
    </div>
  );
};
