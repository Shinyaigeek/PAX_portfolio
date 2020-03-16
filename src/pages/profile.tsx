import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";

export const Profile = Layout(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {}, []);

  return <div className="page--profile"></div>;
});
