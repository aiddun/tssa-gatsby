import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll/BlogRoll";
import Img from "gatsby-image";
import PromoCard from "../components/Promocard/PromoCard";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    <div className="md:col-span-2">
      <Img fluid={image ? image.childImageSharp.fluid : ""} />

      <h2 className="font-semibold text-2xl lg:text-4xl py-4">{mainpitch.title}</h2>
      {/* <br /> */}
      {mainpitch.description.split("\n").map((line) => (
        <p key={line} className="text-md md:text-lg pb-1">
          {line}
        </p>
      ))}
      {intro.blurbs.map(({ headline, image, imagealt, link, text }) => (
        <PromoCard
          key={headline}
          name={headline}
          link={link}
          image={image}
          imgAlt={imagealt}
        >
          {text.split("\n").map((line) => (
            <p key={line}>{line}</p>
          ))}
        </PromoCard>
      ))}
    </div>
    <div>
      <BlogRoll />
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            headline
            imagealt
            link
            text
          }
          heading
          description
        }
      }
    }
  }
`;
