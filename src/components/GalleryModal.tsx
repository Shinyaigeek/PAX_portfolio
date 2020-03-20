import React, { useState } from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CloseIcon from "@material-ui/icons/Close";

interface Props {
  src: string;
  name: string;
  description: string;
}

export const GalleryModal = (props: {
  contents: Props[];
  target: number;
  visible: boolean;
  setVisible: (state: boolean) => void;
  setTarget: (state: number) => void;
}) => {
  return (
    <React.Fragment>
      <div className="galleryModal">
        <GalleryModalTarget {...props} />
      </div>
      <GalleryModalController {...props} />
      <GalleryModalLayer setVisible={props.setVisible} />
    </React.Fragment>
  );
};

const GalleryModalTarget = (props: {
  contents: Props[];
  target: number;
  setTarget: (state: number) => void;
}) => {
  const [swipable, setSwipable] = useState(true);

  return (
    <img
      src={props.contents[props.target].src}
      className="galleryModal--target"
      onWheel={e => {
        if (swipable) {
          if (e.deltaY > 50) {
            const nextTarget =
              props.target === props.contents.length - 1 ? 0 : props.target + 1;
            props.setTarget(nextTarget);
            setSwipable(false);
            setTimeout(() => {
              setSwipable(true);
            }, 800);
          }

          if (e.deltaY < -50) {
            const nextTarget =
              props.target === 0 ? props.contents.length - 1 : props.target - 1;
            props.setTarget(nextTarget);
            setSwipable(false);
            setTimeout(() => {
              setSwipable(true);
            }, 800);
          }
        }
      }}
    />
  );
};

const GalleryModalLayer = (props: { setVisible: (state: boolean) => void }) => {
  return (
    <div
      className="galleryModal--layer"
      onClick={() => props.setVisible(false)}
    />
  );
};

const GalleryModalController = (props: {
  setTarget: (state: number) => void;
  setVisible: (state: boolean) => void;
}) => {
  return (
    <div className="galleryModal--controller">
      <div className="galleryModal--controller__el">
        <ArrowLeftIcon fontSize="large" />
      </div>
      <div className="galleryModal--controller__el">
        <CloseIcon fontSize="large" />
      </div>
      <div className="galleryModal--controller__el">
        <ArrowRightIcon fontSize="large" />
      </div>
    </div>
  );
};

const GalleryModalFooter = (props: { contents: Props[]; target: number }) => {
  return (
    <div className="galleryModal--footer">
      {props.contents.map(content => {
        return <img src={content.src} className="galleryModal--footer__img" />;
      })}
    </div>
  );
};
