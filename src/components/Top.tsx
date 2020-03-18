import React, { useRef, useEffect } from "react";

export const Top = () => {
  const titleEl = useRef(null) as React.RefObject<HTMLDivElement>;
  const topEl = useRef(null) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    topEl.current!.classList.add("withOpacity");
    titleEl.current!.classList.remove("out");
  }, []);

  return (
    <div className="top--wrapper">
      <div className="top" ref={topEl} />
      <div className="title out" ref={titleEl}>
        <div>Chie</div>
        <div>Shiraishi's</div>
        <div>Portfolio</div>
      </div>
    </div>
  );
};
