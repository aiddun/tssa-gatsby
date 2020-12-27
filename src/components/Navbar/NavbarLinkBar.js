import React from "react";
import Link from "gatsby-link";
import "./navbar-links.css";

const SubNavbarElement = ({ name, link }) => {
  return (
    <li className="first odd sf-item-1 sf-depth-2 sf-no-children">
      <Link to={`/${link}`} className="sf-depth-2">
        {name}
      </Link>
    </li>
  );
};

const NavBarElement = ({ element, subelements = [] }) => {
  const { name, link } = element;

  return (
    <li className="first odd sf-item-1 sf-depth-1 sf-total-children-4 sf-parent-children-0 sf-single-children-4 menuparent">
      <a
        href={`/${link}`}
        title=""
        className="sf-depth-1 menuparent sf-with-ul"
      >
        {name}
        <span className="sf-sub-indicator"> »</span>
      </a>
      {/* {subelements.length && (
        <ul className="sf-hidden">
          {subelements.map(({ subpageName, subpageLink }) => {
            const keyPageName = name.replace(" ", "").toLowerCase();
            const key = `menu-${pageName}-${subpageName}`;
            return (
              <SubNavbarElement
                key={key}
                name={subpageName}
                link={subpageLink}
              />
            );
          })}
        </ul>
      )} */}
    </li>
  );
};

const NavbarLinkBar = ({ menuPages }) => {
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div
        id="block-superfish-1"
        className="block block-superfish first last odd "
      >
        <ul
          id="superfish-1"
          className="menu sf-menu sf-main-menu sf-horizontal sf-style-white sf-total-items-8 sf-parent-items-8 sf-single-items-0 superfish-processed sf-js-enabled"
        >
          {menuPages.map((e) => (
            <NavBarElement element={e} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarLinkBar;
