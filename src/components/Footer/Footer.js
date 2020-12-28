import React from "react";
import { Link } from "gatsby";
import FooterLogo from "./FooterLogo";
import CenterLayout from "../CenterLayout";

const Footer = () => {
  return (
    <div className="bg-gray-50 py-9">
      <CenterLayout>
        <div className="grid grid-rows:3 md:grid-cols-3 gap-5">
          <div className="border-b md:border-b-0 md:border-r border-gray-300 pb-3">
            <FooterLogo />
          </div>
          <div className="md:px-8 border-b md:border-b-0 md:border-r pb-5 border-gray-300">
            {[
              { name: "Why Turing", url: "/" },
              { name: "Academics", url: "/" },
              { name: "Student Life", url: "/" },
              { name: "FAQ", url: "/" },
            ].map(({ name, url }) => (
              <Link
                key={name}
                to={url}
                className="block text-sm font-semibold leading-8	uppercase  text-black"
              >
                {name}
              </Link>
            ))}
          </div>
          {/* TODO: Change to CS color */}
          <div className="md:px-8 grid grid-cols-2 gap-y-0">
            {[
              { name: "UT Austin Home", url: "https://utexas.edu" },
              { name: "UTCS Home", url: "https://cs.utexas.edu" },
              { name: "Emergency Information", url: "https://www.utexas.edu/emergency" },
              { name: "Site Policies", url: "https://www.utexas.edu/site-policies" },
              { name: "Web Accessibility Policy", url: "https://www.utexas.edu/web-accessibility-policy" },
              { name: "Web Privacy Policy", url: "https://www.utexas.edu/web-privacy-policy" },
            ].map(({ name, url }) => (
              <a
                key={name}
                href={url}
                className="text md:text-sm text-gray-800 leading-6 md:leading-3"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </CenterLayout>
    </div>
  );
};

export default Footer;
