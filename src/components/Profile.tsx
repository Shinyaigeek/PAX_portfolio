import React from "react";

export const Profile = () => {
  return (
    <div className="profile">
      <h2>About me</h2>
      <div className="img">
        <img src="/static/icon.jpg" className="icon" />
      </div>
      <div className="profile">
        <div className="name">Chie Shiraishi</div>
        <div className="bio"></div>
      </div>
    </div>
  );
};
