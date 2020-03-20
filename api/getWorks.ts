import fetch from "node-fetch";
import { NowRequest, NowResponse } from "@now/node";

export interface Work {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    name: string;
    description: string;
    work: {
      sys: {
        id: string;
      };
    };
  };
}

const getAsset = (assets: any[], target: string) => {
  for (let asset of assets) {
    if (asset.sys.id === target) {
      return asset.fields.file.url;
    }
  }

  throw new Error("there is no file in assets");
};

export default (req: NowRequest, res: NowResponse) => {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;
  if (!CONTENTFUL_ACCESS_TOKEN || !CONTENTFUL_SPACE_ID) {
    throw new Error("Please check env variable");
  }

  return fetch(
    `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=works`
  )
    .then(item => {
      return item
        .json()
        .then(entries => {
          const urls = entries.items.map((item: Work) => {
            return {
              name: item.fields.name,
              description: item.fields.description,
              src: getAsset(entries.includes.Asset, item.fields.work.sys.id)
            };
          });

          res.json(urls);
        })
        .catch(err => {
          console.log(err);
          return false as false;
        });
    })
    .catch(err => {
      console.log(err);
      return false as false;
    });
};
