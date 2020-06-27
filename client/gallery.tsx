import ReactDOM from "react-dom";
import * as React from "react";
import Gallery from "../src/pages/gallery";
// import { router } from "../src/router.tsx";

// router
//   .resolve({
//     pathname: "/gallery"
//   })
//   .then(component => {
//     if (!component || component instanceof Promise) {
//       alert("");
//       throw new Error("");
//     }
//     if (!document) {
//       throw new Error(")");
//     }
//     ReactDOM.hydrate(component, document.getElementById("_app"));
//   });

ReactDOM.hydrate(<Gallery />, document.getElementById("_app"));
