import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./NavigationGroup.css";

export default class NavigationGroup extends Component {
  static propTypes = {
    data: PropTypes.object,
    title: PropTypes.string,
    category: PropTypes.string
  };

  render() {
    const { title, category, data } = this.props;

    console.log(data);

    return (
      <nav className="NavigationGroup">
        <h1 className="NavigationGroup__title">{title}</h1>
        <ul className="NavigationGroup__list">
          {data.allContentfulPage.edges
            .filter(edge => edge.node.category === category)
            .map(edge => (
              <li key={edge.node.slug}>
                <Link
                  to={edge.node.slug}
                  className="NavigationGroup__list-item-link"
                >
                  {edge.node.title}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    );
  }
}
