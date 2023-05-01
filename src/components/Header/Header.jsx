import React from "react";
import "./Header.css";
import illustration from "../../images/illustration-intro.png";

const Header = () => {
  return (
    <header>
      <img src={illustration} alt="header-img" />
      <h1>All your files in one secure location, accessible anywhere</h1>
      <p>
        Fylo stores all your most important files in one secure location. <br />
        Access them whenever you need, share and collaborate with <br /> friends
        family, and co-workers.
      </p>
      <button>Get Started</button>
    </header>
  );
};

export default Header;
