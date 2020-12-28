import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import Img from "gatsby-image";
// import "./blogroll.module.css"

const BlogThumb = ({ post }) => {
  const { frontmatter } = post;
  const { title, featuredimage, date } = frontmatter;
  const slug = post.fields.slug;
  return (
    <div class="flex pb-3">
      <div>
        <Link to={slug}>
          {featuredimage ? (
            <Img fixed={featuredimage.childImageSharp.fixed} />
          ) : (
            <div style={{ width: "100px", height: "100px" }}></div>
          )}
        </Link>
      </div>
      <div className="pl-3">
        <Link to={slug}>
          <p className="italic text-sm text-gray-900">{date}</p>
          <h3 style={{ color: "#a04400" }}>{title + " ›"}</h3>
        </Link>
      </div>
    </div>
  );
};

const BlogRoll = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <>
      <div className="pb-3 border-b-2" style={{ borderColor: "#3c87a3" }}>
        <p className="text-xl font-semibold text-gray-800">Recent News</p>
      </div>
      <div className="pt-4">
        {posts
          // limit to 4 posts on home page
          .slice(0, 4)
          .map(({ node: post }) => (
            <BlogThumb key={post.frontmatter.title} post={post} />
          ))}
      </div>
    </>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fixed(width: 100, height: 100) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
