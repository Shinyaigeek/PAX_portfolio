import ReactDOM from "react-dom";
import * as React from "react";
import Index from "../src/pages/index";
// import { router } from "../src/router";

// router
//   .resolve({
//     pathname: ""
//   })
//   .then(component => {
//     if (!component || component instanceof Promise) {
//       alert("");
//       throw new Error("");
//     }
//     if(!document){
//         throw new Error(')')
//     }
//     ReactDOM.hydrate(component, document.getElementById("_app"))
//   });

ReactDOM.hydrate(<Index />, document.getElementById("_app"));
