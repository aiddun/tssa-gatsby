import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
// import "./navbar-top.module.css";
import NavbarLinkBar from "./NavbarLinkBar/NavbarLinkBar";
import Logo from "./Logo";
import CenterLayout from "../CenterLayout";

// import navbarTopStyles from "./navbar-top.module.css";

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
    <div className="h-8" style={{ backgroundColor: "#bf5700" }}>
      <CenterLayout className="h-full">
        <img className="h-5/6	float-right align-middle pt-1"src="/img/knockout_university_informal_horizontal_padded.svg"></img>
      </CenterLayout>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav
      className="block navbar border-b border-gray-200"
      role="navigation"
      aria-label="main-navigation"
    >
      <TopBar />
      <div className="pt-9">
        <CenterLayout>
          <Logo />
          <NavbarLinkBar menuPages={menuPages} />
        </CenterLayout>
      </div>
    </nav>
  );
};
export default Navbar;
