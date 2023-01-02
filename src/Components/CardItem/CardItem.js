import { Component } from "react";
import "./CardItem.css";
import { FaStar, FaDownload } from "react-icons/fa";

class CardItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="card-holder">
        <div className="image">
          <img src={this.props.src} alt="game" />
        </div>

        <div className="info">
          <div className="name">
            <p>{this.props.name}</p>
            <p>{this.props.owner}</p>
          </div>
          <ul className="ratings">
            <li className="ele">
              <span style={{ color: "yellow" }}>
                <FaStar />
              </span>
              <p>{this.props.ratings}</p>
            </li>
            <li className="ele">
              <span style={{ color: "var(--color-primary)" }}>
                <FaDownload />
              </span>
              <p>{this.props.downloads}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CardItem;
