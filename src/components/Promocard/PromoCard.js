import React from "react";
import "./promocard.css";

const PromoCard = ({ name, link, copy, imgUrl, imgAlt }) => {
  return (
    <div className="utexas-promo-field utexas-promo-unit  utexas_promo_unit_landscape_image">
      <a href={link} className="promo-utexas-image-link">
        <img
          className="promo-image"
          typeof="foaf:Image"
          src={imgUrl}
          alt={imgAlt}
        />
      </a>
      <h3 className="promo-headline">
        <a href={link} className="headline-link">
          {name}
        </a>
      </h3>
      <div className="promo-copy">
        <p></p>
        <p>{copy}</p>
        <p></p>
      </div>
      <div className="cta-wrapper">
        <a href={link} className="cta-link">
          <span>Learn More</span>
        </a>
      </div>
    </div>
  );
};

export default PromoCard;
