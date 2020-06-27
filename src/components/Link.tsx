import * as React from "react";
import { router } from "../router";
import { render } from "react-dom";

const isSSG = typeof document === "undefined";

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
      href={`${props.to}`}
      onClick={(evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        evt.preventDefault();
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
              throw new Error("");
            }
            if (!isSSG) {
              history.pushState(null, "", props.to);
            }
            render(component, document.getElementById("_app"));
          });
      }}
    >
      {props.label}
    </a>
  );
};
