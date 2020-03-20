import fetch from "node-fetch";
import { NowRequest, NowResponse } from "@now/node";

const g = (a: any[], t: string) => {
  for (let d of a) {
    if (d.sys.id === t) {
      return d.fields.file.url;
    }
  }

  throw new Error("");
};

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
          const u = e.items.map((q: any) => {
            return {
              name: q.fields.name,
              description: q.fields.description,
              src: g(e.includes.Asset, q.fields.work.sys.id)
            };
          });

          s.json(u);
        })
        .catch(_ => {
          return false;
        });
    })
    .catch(_ => {
      return false;
    });
};
