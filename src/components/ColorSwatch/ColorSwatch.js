import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ColorSwatch.css";

export default class ColorSwatch extends Component {
  static propTypes = {
    name: PropTypes.string,
    hex: PropTypes.string
  };

  render() {
    const { name, hex } = this.props;

    return (
      <div className="ColorSwatch">
        <div className="ColorSwatch__swatch" style={{ backgroundColor: hex }} />
        <div className="ColorSwatch__label">{name}</div>
        <div className="ColorSwatch__label ColorSwatch__label--hex">{hex}</div>
      </div>
    );
  }
}
