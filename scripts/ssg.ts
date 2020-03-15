import React from "react";
import { renderToString } from "react-dom/server";
import { router } from "../src/router";
import { helmet } from "./helmet";
import fs from "fs";

router
  .resolve({
    pathname: ""
  })
  .then(component => {
    if (!component || component instanceof Promise) {
      throw new Error("please check component");
    }
    const html = helmet(renderToString(component));
    fs.writeFileSync("./dist/index.html", html);
  });
