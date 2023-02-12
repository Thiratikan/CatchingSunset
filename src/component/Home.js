import React from "react";
import videoBG from "../video/background.mov";
import { Main } from "../styles/HomeStyling";
import Navbar from "./Navbar";
import Planner from "./Planner";

function Home() {
  return (
    <Main>
      <video src={videoBG} autoPlay loop muted />
      <Navbar />
      <Planner />
    </Main>
  );
}

export default Home;
