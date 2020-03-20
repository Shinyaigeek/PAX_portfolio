import fetch from "node-fetch";
import { NowRequest, NowResponse } from "@now/node";

interface Profile {
  bio: string;
}

export default (req: NowRequest, res: NowResponse) => {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;
  if (!CONTENTFUL_ACCESS_TOKEN || !CONTENTFUL_SPACE_ID) {
    throw new Error("Please check env variable");
  }

  return fetch(
    `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=profile`
  )
    .then(item => {
      return item
        .json()
        .then(entries => {
          res.json(entries.items[0]);
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
