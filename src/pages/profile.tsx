import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";

import Skeleton from "@material-ui/lab/Skeleton";

export const Profile = Layout(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [bio, setBio] = useState("");

  useEffect(() => {
    fetch("/api/getProfile.ts").then(res => {
      res.json().then(json => {
        setBio(json.fields.bio);
        setIsLoading(false);
      });
    });
  }, []);

  return (
    <div className="page--profile">
      <div className="bio">
        {isLoading ? (
          <Skeleton animation="wave" variant="rect" width={210} height={118} />
        ) : (
          bio
        )}
      </div>
    </div>
  );
});
