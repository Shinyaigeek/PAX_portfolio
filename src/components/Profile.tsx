import React from "react";
import { Goto } from "./Goto";

export const Profile = () => {
  return (
    <div className="profile">
      <h2>About me</h2>
      <div className="img">
        <img src="/static/icon.jpg" className="icon" />
      </div>
      <div className="profile">
        <div className="name">Chie Shiraishi</div>
        <div className="bio">イラストレーター志望の学生です</div>
      </div>
      <div className="link">
        <Goto slug="profile" label="Read MORE" />
      </div>
    </div>
  );
};
