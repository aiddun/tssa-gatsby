import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container container-footer footer-theme2">
      <div className="row">
        <div className="column small-12 medium-4">
          <div className="footer-primary">
            <div className="footer-logo">
              <a href="/" className="main-logo">
                <span className="hiddenText">Turing Scholars</span>
                <img
                  src="//ts.dunlap.ai/sites/default/files/ts.png"
                  alt="main_logo"
                />
              </a>
            </div>
            <div className="connect">
              <div
                id="block-utexas-social-accounts-social-accounts-block"
                className="block block-utexas-social-accounts"
              >
                <div className="content">
                  <ul className="connect-links"></ul>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column small-12 medium-4">
          <div className="footer-secondary">
            <ul className="helpful-links " role="menu">
              {[
                { name: "Why Turing", link: "#" },
                { name: "Academics", link: "#" },
                { name: "Student Life", link: "#" },
                { name: "FAQ", link: "#" },
              ].map(({ name, link }) => (
                <li key={name} className="helpful-link-item" role="menuitem">
                  <a href={`/${link}`} title="" className="helpful-link">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="column small-12 medium-4">
          <div className="footer-tertiary">
            <ul className="helpful-links small-block-grid-2">
              {[
                { name: "UT Austin Home", link: "//www.utexas.edu" },
                { name: "UT Computer Science", link: "//www.cs.utexas.edu" },
                {
                  name: "Emergency Information",
                  link: "//www.utexas.edu/emergency",
                },
                {
                  name: "Site Policies",
                  link: "//www.utexas.edu/site-policies",
                },
                { name: "Web Accessibility Policy", link: "//www.utexas.edu" },
                { name: "Web Privacy Policy", link: "//www.utexas.edu" },
              ].map(({ name, link }) => (
                <li key={name} className="helpful-link-item">
                  <a href={link} className="helpful-link">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <br />
        <div className="copyright">
          © The University of Texas at Austin 2020
        </div>
      </div>
    </div>
  );
};

export default Footer;
