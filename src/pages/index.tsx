import React from "react";
import { Top } from "../components/Top";
import { Layout } from "../components/Layout";
import { Profile } from "../components/Profile";
import { Slide } from "../components/Slide";
import { Goto } from "../components/Goto";

export const Index = Layout(() => (
  <div className="index">
    <Top />
    <Profile />
    <div className="gallery--slide">
      <h2>Works</h2>
      <Slide />
      <div className="link">
        <Goto label="Go to Gallery" slug="gallery" />
      </div>
    </div>
  </div>
));
