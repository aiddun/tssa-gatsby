import React from "react";
import NavbarLinkBar from "./NavbarLinkBar";
import "./navbar-top.css";

const menuPages = [
  { name: "Home", link: "#" },
  { name: "Why Turing", link: "#" },
  { name: "Visit Us", link: "#" },
  { name: "Academics", link: "#" },
  { name: "Student Life", link: "#" },
  { name: "Outcomes", link: "#" },
  { name: "FAQ", link: "#" },
];

const TopBar = () => {
  return (
    <div className="topnav knockout_logo">
      <div className="parent-banner-links">
        <div className="UT-knockout-logo">
          <a href="http://www.utexas.edu" className="logo-link">
            <span className="hiddenText">University of Texas at Austin Home</span>
          </a>
        </div>
      </div>
      <div className="hide-for-large-up">
        <div className="parent-links" id="parents">
          <a href="http://www.utexas.edu">The University of Texas at Austin</a>
        </div>
        <a href="/" className="current-directory" id="show-parents">
          <span className="name">Turing Scholars</span>
          <span className="toggle"></span>
        </a>
      </div>
      <div className="nav-item-search show-for-large-up"></div>
      <ul className="topnav-links hide-for-large-up">
        <li className="nav-item nav-item-search"></li> 
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <TopBar />
      <NavbarLinkBar menuPages={menuPages} />
    </>
  );
};

export default Navbar;
