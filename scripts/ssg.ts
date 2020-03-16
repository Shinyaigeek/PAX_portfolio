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
    const html = helmet(renderToString(component), "index");
    fs.writeFileSync("./public/index.html", html);
  });

router
  .resolve({
    pathname: "/profile"
  })
  .then(component => {
    if (!component || component instanceof Promise) {
      throw new Error("please check component");
    }
    const html = helmet(renderToString(component), "profile");
    fs.writeFileSync("./public/profile.html", html);
  });

router
  .resolve({
    pathname: "/gallery"
  })
  .then(component => {
    if (!component || component instanceof Promise) {
      throw new Error("please check component");
    }
    const html = helmet(renderToString(component), "gallery");
    fs.writeFileSync("./public/gallery.html", html);
  });
