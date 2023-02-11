import React from "react";
import videoBG from "../video/background.mov";
import { Main, Content } from "../styles/HomeStyling";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <Main>
      <video src={videoBG} autoPlay loop muted />
      <Content>
        <div className="font">
          <div class="typewriter">
            <h1>WELCOME</h1>
            <h3>TO</h3>
            <h3>CATCHING SUNSET</h3>
            <h4
              onClick={() => {
                navigate("/home");
              }}
            >
              Start &#10141;
            </h4>
          </div>
        </div>
      </Content>
    </Main>
  );
}

export default Home;
