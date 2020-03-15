import React from "react";
import { Top } from "../components/Top";
import { Layout } from "../components/Layout";
import { Profile } from "../components/Profile";
import { Slide } from "../components/Slide";

export const Index = Layout(() => (
  <div className="index">
    <Top />
    <Profile />
    <Slide />
  </div>
));
