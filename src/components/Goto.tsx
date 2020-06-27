import React from "react";
import { Link } from "./Link";

interface Props {
  label: string;
  slug: string;
}

export const Goto = (props: Props) => {
  return (
    <Link
      class="goto"
      to={`/${props.slug}.html`}
      label={`${props.label} &gt;`}
    />
  );
};
