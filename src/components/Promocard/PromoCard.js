import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const PromoCard = ({ name, link, image, imgAlt, children }) => {
  return (
    <div className="py-3">
      <div
        className="w-full bg-gray-100 border "
        style={{
          backgroundColor: "#f8f8f8",
          borderColor: "rgba(243, 244, 246)",
        }}
      >
        {/* Padded card */}
        <div className="h-full p-5 md:flex">
          {/* Image block */}
          <div className="w-60 flex-shrink-0">
            <Link to={link}>
              <Img
                className="border"
                style={{
                  borderColor: "rgb(203, 203, 203)",
                }}
                alt={imgAlt}
                fluid={image ? image.childImageSharp.fluid : ""}
              />
            </Link>
          </div>
          <div className="pl-5 inline  ">
            <h4 className="text-xl font-bold leading-7	">
              <Link to={link}>{name}</Link>
            </h4>
            {/* Copy */}
            <div className="leading-5	pt-3">{children}</div>
            <div className=" pt-4">
              <p className="leading-7" style={{ color: "#a04400" }}>
                <Link to={link}>Learn more ›</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
