import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <p>Copyright &#169; 2036 Cyborg Gaming Company. All rights reserve. </p>
        <p>
          Design: <span>AhmedJamalSelim</span>
        </p>
      </div>
    );
  }
}

export default Footer;
