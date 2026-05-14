import React from "react";
import logo from "../images/logo.png";

const About = ({ about }) => {
  return (
    <aside>
      <img
        src={logo}
        alt="blog logo"
      />

      <h2>About This Blog</h2>

      <p>{about}</p>
    </aside>
  );
};

export default About;