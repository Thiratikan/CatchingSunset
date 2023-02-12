import React from "react";
import videoBG from "../video/background.mov";
import { Main } from "../styles/HomeStyling";
import Navbar from "./Navbar";
import Planner from "./Planner";
import Trip from "./Trip";
import Footer from "./Footer";

function Home() {
  return (
    <Main>
      <video src={videoBG} autoPlay loop muted />
      <Navbar />
      <Trip />
      <Planner />
      <Footer />
    </Main>
  );
}

export default Home;
