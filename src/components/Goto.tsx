import React from "react";
import { Link } from "./Link";

interface Props {
  label: string;
  slug: string;
}

export const Goto = (props: Props) => {
  return (
    <Link class="goto" to={`/${props.slug}`} label={`${props.label} &gt;`} />
  );
};
