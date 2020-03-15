import { ncp } from "ncp";

ncp("./static/", "./public/static/", function(err) {
  if (err) {
    return console.error(err);
  }
  console.log("done!");
});

