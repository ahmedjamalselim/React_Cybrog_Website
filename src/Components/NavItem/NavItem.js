import "./NavItem.css";
import { Component } from "react";

class NavItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <li className="nav-item">{this.props.children}</li>;
  }
}

class NavItemDropDown extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <li className="nav-item dropdown">{this.props.children}</li>;
  }
}

export default NavItem;
export { NavItemDropDown };
