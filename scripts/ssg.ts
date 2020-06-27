import React from "react";
import { renderToString } from "react-dom/server";
import { router } from "../src/ssgRouter";
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
    const html = helmet(renderToString(component), "main");
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
    fs.mkdirSync("./public/profile");
    fs.writeFileSync("./public/profile/index.html", html);
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
    fs.mkdirSync("./public/gallery");
    fs.writeFileSync("./public/gallery/index.html", html);
  });
