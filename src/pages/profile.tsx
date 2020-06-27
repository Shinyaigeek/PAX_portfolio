import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";

import Skeleton from "@material-ui/lab/Skeleton";

const Profile = Layout(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [bio, setBio] = useState("");
  const [educationalBackground, setEducationalBackground] = useState([
    "",
    "",
    ""
  ] as string[]);

  useEffect(() => {
    fetch("/api/getProfile.ts").then(res => {
      res.json().then(json => {
        setBio(json.fields.bio);
        setEducationalBackground(json.fields.educationalBackground);
        setIsLoading(false);
      });
    });
  }, []);

  return (
    <div className="page--profile">
      <img src="/static/icon.jpg" className="icon" />
      <div className="name">
        <div className="en">Chie Shiraishi</div>
        <div className="ja">白石　知愛</div>
      </div>
      <div className="workAbility">Illustrator</div>
      <div className="bio">
        {isLoading ? (
          <Skeleton animation="wave" variant="rect" width="100%" height={300} />
        ) : (
          bio
        )}
      </div>
      <ul className="educationalBackground">
        {educationalBackground.map(background => {
          return (
            <li>
              {isLoading ? (
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="100%"
                  height="100%"
                />
              ) : (
                background
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Profile;
