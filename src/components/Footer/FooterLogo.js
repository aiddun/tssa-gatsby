import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";

export default function FooterLogo() {
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
  
    return <img width="250px" src="https://ts.dunlap.ai/sites/default/files/ts.png"></img>;
  }
  