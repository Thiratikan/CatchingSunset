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
          <li>
            <a href="#trip">Trip</a>
          </li>
          <li>
            <a href="#planner">Planner</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
        </ul>
      </div>
    </Main>
  );
}

export default Navbar;
