import * as React from "react";
import { Home, Smile, PenTool } from "@zeit-ui/react-icons";
import { Link } from "./Link";

export const FooterBar = () => {
  return (
    <div className="footer--bar">
      <Link class="footer--el" label={<Smile />} to="/profile" />

      <Link class="footer--el" label={<Home />} to="/" />

      <Link class="footer--el" label={<PenTool />} to="/gallery" />
    </div>
  );
};
