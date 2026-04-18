import React from "react";
import Links from "./Navbar components/Links";
import Logo from "./Navbar components/Logo";

const NavBar = () => {
  return (
    <div className="navBar">
      <Logo />
      <Links />
    </div>
  );
};

export default NavBar;
