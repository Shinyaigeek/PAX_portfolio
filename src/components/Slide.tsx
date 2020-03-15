import React, { useRef, useState, useEffect } from "react";

interface ElProps {
  src: string;
  state: string;
}

const SlideEl = (props: ElProps) => {
  return <img className={`slideel ${props.state}`} src={props.src} />;
};

export const Slide = () => {
  const [state, setState] = useState(0);

  const refState = useRef(state);

  const states = ["left", "front", "right", "back"];

  useEffect(() => {
    refState.current = state;
  }, [state]);

  useEffect(() => {
    window.setInterval(() => {
      let prestate = refState.current;
      if (prestate === 3) {
        prestate = 0;
      }
      prestate += 1;
      setState(prestate);
    }, 8000);
  }, []);

  return (
    <div className="slide">
      {["/static/1.jpg", "/static/2.jpg", "/static/3.jpg", "/static/4.jpg"].map(
        (slug, index) => {
          return (
            <SlideEl
              src={slug}
              state={states[(index + state) % 4]}
              key={`slideEl__${index}`}
            />
          );
        }
      )}
    </div>
  );
};
