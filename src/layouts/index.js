import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "./index.css";

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header data={data} />
    <main style={{ marginLeft: "320px", padding: "32px" }}>{children()}</main>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query pagesQuery {
    allContentfulPage(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          title
          slug
          category
        }
      }
    }
  }
`;
