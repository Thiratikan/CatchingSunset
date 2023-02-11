import React from "react";
import videoBG from "../video/background.mov";
import { Main, Content } from "../styles/HomeStyling";

function Home() {
  return (
    <Main>
      <video src={videoBG} autoPlay loop muted />
      <Content>
        <div className="font">
          <h1>WELCOME</h1>
          <h3>TO</h3>
          <h3>FLYING RABBIT</h3>
          <h4>Start &#10141;</h4>
        </div>
      </Content>
    </Main>
  );
}

export default Home;
