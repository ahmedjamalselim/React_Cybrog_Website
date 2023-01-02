import { Component } from "react";
import {SectionTitle} from '../../Components/index'
import { Gaming, MostPop } from "../../Components/Sections";
import './Streams.css'


class Streams extends Component {
    render() {
        return (
           <>
            <SectionTitle>Streams</SectionTitle>
            <Gaming />
            <MostPop />
           </>
        )
    }
}

export default Streams