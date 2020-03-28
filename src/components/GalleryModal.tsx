import React, { useState, createRef } from "react";
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
  const galleryModalTargetEl = createRef() as React.RefObject<HTMLImageElement>;
  const [swipable, setSwipable] = useState(true);

  const handleViewingImg = (isUp: boolean) => {
    const targetEl = galleryModalTargetEl.current!;

    if (isUp) {
      const nextTarget =
        props.target === props.contents.length - 1 ? 0 : props.target + 1;
      setSwipable(false);
      targetEl.classList.add("out--topright");

      setTimeout(() => {
        props.setTarget(nextTarget);
        targetEl.classList.contains("out--topright") &&
          targetEl.classList.remove("out--topright");
        setSwipable(true);
      }, 1200);
    } else {
      const nextTarget =
        props.target === 0 ? props.contents.length - 1 : props.target - 1;
      setSwipable(false);
      targetEl.classList.add("out--bottomleft");
      setTimeout(() => {
        props.setTarget(nextTarget);
        targetEl.classList.contains("out--bottomleft") &&
          targetEl.classList.remove("out--bottomleft");
        setSwipable(true);
      }, 1200);
    }
  };
  return (
    <React.Fragment>
      <div className="galleryModal">
        <GalleryModalTarget
          {...props}
          handleViewingImg={handleViewingImg}
          galleryModalTargetEl={galleryModalTargetEl}
          swipable={swipable}
        />
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
  handleViewingImg: (state: boolean) => void;
  galleryModalTargetEl: React.RefObject<HTMLImageElement>;
  swipable: boolean;
}) => {
  let touchStartY = -1;

  return (
    <img
      src={props.contents[props.target].src}
      className="galleryModal--target"
      ref={props.galleryModalTargetEl}
      onWheel={e => {
        const targetEl = props.galleryModalTargetEl.current!;
        if (props.swipable) {
          if (e.deltaY > 50) {
            props.handleViewingImg(true);
          }

          if (e.deltaY < -50) {
            props.handleViewingImg(false);
          }
        }
      }}
      // call stackが溢れる
      // onTouchMove={() => {
      //   const el = galleryModalTargetEl.current!;
      //   const evt = document.createEvent("HTMLEvents");
      //   evt.initEvent("touchmove", true, true); // event type, bubbling, cancelable
      //   return el.dispatchEvent(evt);
      // }}

      onTouchEnd={e => {
        const targetEl = props.galleryModalTargetEl.current!;
        if (e.changedTouches[0].clientY - touchStartY < -50) {
          props.handleViewingImg(true);
        }

        if (e.changedTouches[0].clientY - touchStartY > 50) {
          props.handleViewingImg(false);
        }

        touchStartY = -1;
      }}
      onTouchStart={e => {
        touchStartY = e.changedTouches[0].clientY;
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
