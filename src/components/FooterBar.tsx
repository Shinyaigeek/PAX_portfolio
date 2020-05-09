import * as React from "react";
import { Home, Smile, PenTool } from "@zeit-ui/react-icons";

export const FooterBar = () => {
  return (
    <div className="footer--bar">
      <div className="footer--el">
        <Smile />
      </div>

      <div className="footer--el">
        <Home />
      </div>

      <div className="footer--el">
        <PenTool />
      </div>
    </div>
  );
};
