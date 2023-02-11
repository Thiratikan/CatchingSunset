import React from "react";
import { Main } from "../styles/HomeStyling";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  return (
    <Main>
      <div className="nav">
        <section
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="/img/sunsetlogo.png" alt="" />
          <p>HOME</p>
        </section>

        <ul>
          <li
            onClick={() => {
              navigate("/planner");
            }}
          >
            Planner
          </li>
          <li>About</li>
        </ul>
      </div>
    </Main>
  );
}

export default Navbar;
