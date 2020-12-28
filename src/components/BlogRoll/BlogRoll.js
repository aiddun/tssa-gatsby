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
{
  // class BlogRoll extends React.Component {
  //   render() {
  //     const { data } = this.props;
  //     const { edges: posts } = data.allMarkdownRemark;
  //     return (
  //       <div class="">
  //         <div class="px-5 region region-content-top-right">
  //           <div
  //             id="block-views-news-news-with-thumbnails"
  //             class="block block-views"
  //           >
  //             <h3 class="post-headline">Latest News</h3>
  //             <div class="content">
  //               <div class="view view-news view-id-news view-display-id-news_with_thumbnails row view-dom-id-b177f06c9526291299898cf342801137">
  //                 <div class="view-content">
  //                   {posts &&
  //                     posts.map(({ node: post }) => (
  //                       <div class="views-row views-row-2 views-row-even columns small-12 large-6 end">
  //                         <div class="">
  //                           <div class="views-field views-field-field-news-main-image">
  //                             <div class="field-content">
  //                               <Link to={post.fields.slug}>
  //                                 <PreviewCompatibleImage
  //                                   imageInfo={{
  //                                     image: post.frontmatter.featuredimage,
  //                                     alt: `featured image thumbnail for post ${post.frontmatter.title}`,
  //                                   }}
  //                                 />
  //                               </Link>
  //                             </div>
  //                           </div>
  //                           <div class="views-field views-field-field-news-publication-date utexas-news-date">
  //                             <div class="field-content">May 20, 2020</div>
  //                           </div>
  //                           <div class="views-field views-field-title">
  //                             <span class="field-content">
  //                               <Link to={post.fields.slug}>
  //                                 <span>{post.frontmatter.title}</span>
  //                               </Link>
  //                             </span>
  //                           </div>
  //                         </div>
  //                       </div>
  //                       // <div className="is-parent column is-6" key={post.id}>
  //                       //   <article
  //                       //     className={`blog-list-item tile is-child box notification ${
  //                       //       post.frontmatter.featuredpost ? 'is-featured' : ''
  //                       //     }`}
  //                       //   >
  //                       //     <header>
  //                       //       {post.frontmatter.featuredimage ? (
  //                       //         <div className="featured-thumbnail">
  //                       //           <PreviewCompatibleImage
  //                       //             imageInfo={{
  //                       //               image: post.frontmatter.featuredimage,
  //                       //               alt: `featured image thumbnail for post ${post.frontmatter.title}`,
  //                       //             }}
  //                       //           />
  //                       //         </div>
  //                       //       ) : null}
  //                       //       <p className="post-meta">
  //                       //         <Link
  //                       //           className="title has-text-primary is-size-4"
  //                       //           to={post.fields.slug}
  //                       //         >
  //                       //           {post.frontmatter.title}
  //                       //         </Link>
  //                       //         <span> &bull; </span>
  //                       //         <span className="subtitle is-size-5 is-block">
  //                       //           {post.frontmatter.date}
  //                       //         </span>
  //                       //       </p>
  //                       //     </header>
  //                       //     <p>
  //                       //       {post.excerpt}
  //                       //       <br />
  //                       //       <br />
  //                       //       <Link className="button" to={post.fields.slug}>
  //                       //         Keep Reading →
  //                       //       </Link>
  //                       //     </p>
  //                       //   </article>
  //                       // </div>
  //                     ))}
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           ;<div class="edit-links"></div>
  //           <div
  //             id="block-fieldblock-node-landing-page-default-field-wysiwyg-b"
  //             class="block block-fieldblock fieldblock_field_wysiwyg_b"
  //           >
  //             <div class="content">
  //               <div class="field field_wysiwyg_b">
  //                 <p>
  //                   <a href="/news">View More</a>
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  // }
}
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
