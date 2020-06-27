import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import Skeleton from "@material-ui/lab/Skeleton";
import { GalleryModal } from "../components/GalleryModal";

interface Props {
  name: string;
  description: string;
  src: string;
}

const Table = (props: {
  contents: Props[];
  setVisible: (state: boolean) => void;
  setTarget: (state: number) => void;
}) => {
  return (
    <div className="gallery--table">
      {new Array(Math.ceil(props.contents.length / 3)).fill(0).map((_, i) => {
        const con = [props.contents[i * 3]];

        if (props.contents.length > i * 3 + 1) {
          con.push(props.contents[i * 3 + 1]);
        }

        if (props.contents.length > i * 3 + 2) {
          con.push(props.contents[i * 3 + 2]);
        }

        return (
          <Column
            contents={con}
            column={i}
            setTarget={props.setTarget}
            setVisible={props.setVisible}
          />
        );
      })}
    </div>
  );
};

const Column = (props: {
  contents: Props[];
  column: number;
  setVisible: (state: boolean) => void;
  setTarget: (state: number) => void;
}) => {
  return (
    <div className="gallery--column">
      {props.contents.map((content, index) => {
        return (
          <Cell
            content={content}
            index={props.column * 3 + index}
            setTarget={props.setTarget}
            setVisible={props.setVisible}
          />
        );
      })}
    </div>
  );
};

const Cell = (props: {
  content: Props;
  setTarget: (state: number) => void;
  setVisible: (state: boolean) => void;
  index: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  function changeTarget() {
    props.setTarget(props.index);
    props.setVisible(true);
  }

  const url = `https:${props.content.src}`;

  useEffect(() => {
    if (props.content.src.length !== 0) {
      fetch(url).then(_ => {
        setIsLoading(false);
      });
    }
  }, [props.content.src]);

  return (
    <div className="gallery--el">
      {isLoading ? (
        <Skeleton
          variant="rect"
          style={{
            width: "27vw",
            maxWidth: "240px",
            height: "27vw",
            maxHeight: "240px"
          }}
        />
      ) : (
        <img
          src={url}
          className="gallery--el__img"
          onClick={() => changeTarget()}
        />
      )}
    </div>
  );
};

const Gallery = Layout(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [target, setTarget] = useState(0);
  const [visible, setVisible] = useState(false);

  const initialContents = new Array(12) as Props[];
  initialContents.fill({
    name: "",
    description: "",
    src: ""
  } as Props);

  const [contents, setContents] = useState(initialContents);

  useEffect(() => {
    fetch("/api/getWorks.ts").then(res => {
      res.json().then(json => {
        setContents(json);
      });
    });
  }, []);

  return (
    <div className="gallery">
      <div className="works">
        <div className="table">
          <Table
            contents={contents}
            setVisible={setVisible}
            setTarget={setTarget}
          />
        </div>
      </div>
      {visible && (
        <GalleryModal
          target={target}
          visible={visible}
          contents={contents}
          setVisible={setVisible}
          setTarget={setTarget}
        />
      )}
    </div>
  );
});

export default Gallery;
