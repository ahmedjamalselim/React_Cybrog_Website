import { Component } from "react";
import "./MostPop.css";
import MostPopImages from "../../../Data/MostPopImages/MostPopImages";
import { MainHeading, CardItem, SectionWrapper } from "../../index";

class MostPop extends Component {
  constructor() {
    super();
    this.state = {
      image: MostPopImages,
    };
  }

  mapping(array) {
    const finalImage = array.map((img) => {
      return (
        <CardItem
          src={img.src}
          key={img.id}
          name={img.name}
          owner={img.owner}
          ratings={img.ratings}
          downloads={img.downloads}
        />
      );
    });
    return finalImage;
  }

  render() {
    return (
      <SectionWrapper>
        <MainHeading title="Most Popular" colored="Right Now" />
        <div className="card-container">{this.mapping(this.state.image)} </div>
      </SectionWrapper>
    );
  }
}

export default MostPop;
