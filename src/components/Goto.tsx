import React from "react";

interface Props {
  label: string;
  slug: string;
}

export const Goto = (props: Props) => {
  return (
    <a className="goto" href={`/${props.slug}.html`}>
      {props.label} &gt;
    </a>
  );
};
