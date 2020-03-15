import ReactDOM from "react-dom"
import { router } from "../src/router";

router
  .resolve({
    pathname: ""
  })
  .then(component => {
    if (!component || component instanceof Promise) {
      alert("");
      throw new Error("");
    }
    if(!document){
        throw new Error(')')
    }
    ReactDOM.hydrate(component, document.getElementById("_app"))
  });