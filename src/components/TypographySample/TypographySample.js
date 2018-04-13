import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TypographySample.css";

export default class TypographySample extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string
  };

  render() {
    const { name, value } = this.props;

    return (
      <div className="TypographySample" style={{ fontSize: value }}>
        {name} <span style={{ fontSize: "0.9rem" }}>({value})</span>
      </div>
    );
  }
}
