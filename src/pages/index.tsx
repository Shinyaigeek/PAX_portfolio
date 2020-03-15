import React from "react";
import { Top } from "../components/Top";
import { Layout } from "../components/Layout";
import { Profile } from "../components/Profile";

export const Index = Layout(() => (
  <div className="index">
    <Top />
    <Profile />
  </div>
));
