import './Browse.css'
import {SectionTitle} from '../../Components/index'
import { Component } from 'react'
import {MostPop} from "../../Components/Sections/index";


class Browse extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render () {
        return (
            <>
            <SectionTitle>Browse</SectionTitle>
               <MostPop />
            </>
        )
    }

}

export default Browse