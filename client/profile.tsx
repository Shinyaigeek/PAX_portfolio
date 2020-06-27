import ReactDOM from "react-dom";
import * as React from "react";
import Profile from "../src/pages/profile";
// import { router } from "../src/router";

// router
//   .resolve({
//     pathname: "/profile"
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

ReactDOM.hydrate(<Profile />, document.getElementById("_app"));
