import { Component } from "react";
import "./MainHeading.css";

class MainHeading extends Component {
  render() {
    return (
      <div className="main-heading">
        <h2>
          <span>{this.props.title}</span> <span>{this.props.colored}</span>
        </h2>
      </div>
    );
  }
}

export default MainHeading;
