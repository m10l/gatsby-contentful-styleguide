import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ComponentPreview.css";

export default class ComponentPreview extends Component {
  static propTypes = {
    name: PropTypes.string,
    hex: PropTypes.string
  };

  render() {
    const { title, usageNotes, exampleUrl } = this.props;

    return (
      <div className="ComponentPreview">
        <h1>{title}</h1>
      </div>
    );
  }
}
