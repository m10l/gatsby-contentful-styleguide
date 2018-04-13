import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import NavigationGroup from "../NavigationGroup";
import "./Header.css";

export default class Header extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  render() {
    const { data } = this.props;

    console.log({ data });

    return (
      <header className="Header">
        <h1 className="Header__brand">
          <Link className="Header__brand-link" to="/">
            Design System
          </Link>
        </h1>
        <NavigationGroup
          data={data}
          title="Documentation"
          category="documentation"
        />
        <NavigationGroup data={data} title="Tokens" category="tokens" />
        <NavigationGroup data={data} title="Components" category="components" />
      </header>
    );
  }
}
