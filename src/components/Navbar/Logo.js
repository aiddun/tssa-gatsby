import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";

export default function Logo() {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       file(relativePath: { eq: "/img/tutorials.png" }) {
  //         childImageSharp {
  //           fixed(width: 125, height: 125) {
  //             ...GatsbyImageSharpFixed
  //           }
  //         }
  //       }
  //     }
  //   `);
  //   return <Img fixed={data.file.childImageSharp.fixed} />;
  return (
    <Link to="/">
      <img className="w-64 md:w-96" src="/img/tslogo.png"></img>
    </Link>
  );
}
