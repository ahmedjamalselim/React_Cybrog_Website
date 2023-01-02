import { Component } from "react";
import "./GameItem.css";

class CardItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="game-holder">
        <div className="game-image-holder">
          <div className="image">
            <img src={this.props.src} alt="game" />
          </div>
          <div className="game-image-info">
            <span>{this.props.name}</span>
            <span>{this.props.owner}</span>
          </div>
        </div>

        <div className="game-customer-info">
          <span>Date Added</span>
          <span>{this.props.date}</span>
        </div>

        <div className="game-customer-info">
          <span>Hours Played</span>
          <span>{this.props.hours}</span>
        </div>

        <div className="game-customer-info">
          <span>Currently</span>
          <span>{this.props.status}</span>
        </div>

        <div className="download-but ">
          <button className="download-button btn btn-primary">download</button>
        </div>
      </div>
    );
  }
}

export default CardItem;
