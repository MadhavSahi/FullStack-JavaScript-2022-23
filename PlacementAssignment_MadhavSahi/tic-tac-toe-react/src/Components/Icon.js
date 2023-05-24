import React, { Component } from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

class Okay extends Component {
  render() {
    const { name } = this.props;

    switch (name) {
      case "circle":
        return <FaRegCircle className="icons" />;
      case "cross":
        return <FaTimes className="icons" />;
      default:
        return <FaPen className="icons" />;
    }
  }
}

export default Okay;
