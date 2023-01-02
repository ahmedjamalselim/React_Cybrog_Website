import Gaming from "../../../Data/Gaming/Gaming";
import { Component } from "react";
import { MainHeading, SectionWrapper, GameItem } from "../../index";
import "./Gaming.css";

class GamingSection extends Component {
  constructor() {
    super();
    this.state = {
      gaming: Gaming,
    };
  }

  mapping(arr) {
    const gamingItem = this.state.gaming.map((game) => {
      return (
        <GameItem
          name={game.name}
          owner={game.owner}
          hours={game.hours}
          status={game.status}
          src={game.src}
          key={game.id}
          date = {game.date}
        />
      );
    });
    return gamingItem;
  }

  render() {
    return (
      <SectionWrapper>
        <MainHeading title="Your Gaming" colored="Library" />
        <div className="gaming-container">
          {this.mapping(this.state.gaming)}{" "}
        </div>
      </SectionWrapper>
    );
  }
}

export default GamingSection;
