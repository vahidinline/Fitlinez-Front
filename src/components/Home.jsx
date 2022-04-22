import React, { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import cert from "../assets/cert.png";
import Team from "./team";
import HomeTop from "./homeTop";
import { useAuth } from "./userFlow/authContent";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <div className="container-fluid">
      <meta charSet="utf-8" />

      <HomeTop />
      <Team />
    </div>
  );
};

export default Home;
