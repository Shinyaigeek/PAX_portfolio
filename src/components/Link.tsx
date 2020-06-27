import * as React from "react";
import { router } from "../router";
import { render } from "react-dom";

interface Props {
  to: string;
  label: string | React.ReactElement;
  class?: string;
  id?: string;
}

export const Link = (props: Props) => {
  return (
    <a
      className={`link ${props.class}`}
      id={props.id}
      onClick={() => {
        router
          .resolve({
            pathname: props.to
          })
          .then(component => {
            if (!component || component instanceof Promise) {
              alert("");
              throw new Error("");
            }
            if (!document) {
              throw new Error(")");
            }
            console.log("aiueo");
            render(component, document.getElementById("_app"));
          });
      }}
    >
      {props.label}
    </a>
  );
};
