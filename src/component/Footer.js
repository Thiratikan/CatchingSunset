import React from "react";
import { Style } from "../styles/FooterStyling";

function Footer() {
  return (
    <Style>
      <div id="about">
        <a href="https://www.linkedin.com/in/thiratikan">
          <img src="/img/linkedin.png" alt="" />
        </a>
        <a href="https://github.com/Thiratikan">
          <img src="/img/github-mark-white.png" alt="" />
        </a>
        <a href="https://thiratikan.com">
          <img src="/img/tk.png" alt="" />
        </a>
      </div>
    </Style>
  );
}

export default Footer;
