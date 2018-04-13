import React from "react";
import PropTypes from "prop-types";

import ColorSwatch from "../components/ColorSwatch";
import TypographySample from "../components/TypographySample";
import Card from "../components/Card";

class Page extends React.Component {
  render() {
    const {
      title,
      description,
      category,
      principles,
      designTokens,
      components
    } = this.props.data.contentfulPage;

    console.log(this.props.data.contentfulPage);

    return (
      <div>
        <h1>{title}</h1>
        <p>{description.description}</p>
        {principles &&
          principles.map(principle => (
            <Card title={principle.title} key={principle.title}>
              {principle.description.description}
            </Card>
          ))}

        {designTokens &&
          designTokens
            .filter(designToken => designToken.category === "color")
            .map(designToken => (
              <ColorSwatch
                key={designToken.title}
                name={designToken.title}
                hex={designToken.value}
              />
            ))}

        {designTokens &&
          designTokens
            .filter(designToken => designToken.category === "font-size")
            .map(designToken => (
              <TypographySample
                key={designToken.title}
                name={designToken.title}
                value={designToken.value}
              />
            ))}

        {components &&
          components.map(component => (
            <article key={component.title}>
              <h1>{component.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: component.codePenEmbed.codePenEmbed
                }}
              />
            </article>
          ))}
      </div>
    );
  }
}

Page.propTypes = {
  data: PropTypes.object.isRequired
};

export default Page;

export const pageQuery = graphql`
  query pageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      category
      description {
        description
      }
      principles {
        title
        description {
          description
        }
      }
      designTokens {
        title
        category
        value
      }
      components {
        title
        codePenEmbed {
          codePenEmbed
        }
      }
    }
  }
`;
