import React from "react";
import Link from "gatsby-link";

const SubNavbarElement = ({ name, link }) => {
  return (
    <li className="">
      <Link to={`/${link}`} className="">
        {name}
      </Link>
    </li>
  );
};

const NavBarElement = ({ element, subelements = [] }) => {
  const { name, link } = element;

  return (
    <li>
      <Link className="lg:p-4 py-3 px-0 block uppercase text-sm font-semibold text-gray-900" to={link}>
        {name}
      </Link>
    </li>
  );
};

const NavbarLinkBar = ({ menuPages }) => {
  return (
    <div className="flex">
      <div className="lg:flex-grow"></div>
      <div className="lg:w-full max-w-screen-xl mx-auto lg:flex-shrink" id="menu">
        <ul className="lg:flex items-center justify-between">
          {menuPages.map((e) => (
            <NavBarElement key={e.name} element={e} />
          ))}
        </ul>
      </div>
      <div className="lg:flex-grow"></div>
    </div>
  );
};

export default NavbarLinkBar;
