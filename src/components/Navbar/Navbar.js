import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
// import "./navbar-top.module.css";
import NavbarLinkBar from "./NavbarLinkBar/NavbarLinkBar";
import Logo from "./Logo";
import CenterLayout from "../CenterLayout";
import "./hamburgers.scss";

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
        <img
          className="h-5/6	float-right align-middle pt-1"
          src="/img/knockout_university_informal_horizontal_padded.svg"
        ></img>
      </CenterLayout>
    </div>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav
      className="block navbar border-b border-gray-200"
      role="navigation"
      aria-label="main-navigation"
    >
      <TopBar />
      <div className="pt-3 md:pt-9">
        <CenterLayout>
          <div className="flex justify-between">
            <Logo />
            <div className="md:hidden">
              <button
                className={`hamburger hamburger--slider ${
                  mobileMenuOpen ? "is-active" : ""
                }`}
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
          <NavbarLinkBar
            menuPages={menuPages}
            mobileMenuOpen={mobileMenuOpen}
          />
        </CenterLayout>
      </div>
    </nav>
  );
};
export default Navbar;
