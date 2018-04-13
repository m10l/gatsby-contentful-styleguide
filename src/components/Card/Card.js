import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Card.css";

export default class Card extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
  };

  render() {
    const { title, children } = this.props;

    return (
      <article className="Card">
        <h1 className="Card__title">{title}</h1>
        <div className="Card__body">{children}</div>
      </article>
    );
  }
}
