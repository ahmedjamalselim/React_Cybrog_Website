import { Component } from "react";
import "./SectionWrapper.css";

class SectionWrapper extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div className="section-wrapper">{this.props.children}</div>;
  }
}

export default SectionWrapper;
