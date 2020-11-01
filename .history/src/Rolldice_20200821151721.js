import React, { Component } from "react";
import Die from "./Die";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="RollDice">
        <Die />
        <Die />
      </div>
    );
  }
}

export default RollDice;
