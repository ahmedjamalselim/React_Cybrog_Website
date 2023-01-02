import { Component } from "react";
import "./Container.css";

class Container extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div className="container main-container">{this.props.children}</div>;
  }
}

export default Container;
