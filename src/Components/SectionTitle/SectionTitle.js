import { Component } from "react";
import './SectionTitle.css'

class SectionTitle extends Component {
    render() {
        return(
            <div className="section-title">
                <h1>{this.props.children}</h1>
            </div>
        )
    }
}

export default SectionTitle