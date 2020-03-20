import fetch from "node-fetch";
import { NowRequest, NowResponse } from "@now/node";

export default (_: NowRequest, s: NowResponse) => {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;
  if (!CONTENTFUL_ACCESS_TOKEN || !CONTENTFUL_SPACE_ID) {
    throw new Error("");
  }

  return fetch(
    `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=works`
  )
    .then(i => {
      return i
        .json()
        .then(e => {
          s.json(e);
        })
        .catch(_ => {
          return false;
        });
    })
    .catch(_ => {
      return false;
    });
};
