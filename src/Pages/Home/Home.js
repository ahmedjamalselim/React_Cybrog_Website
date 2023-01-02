import './Home.css'
import {SectionTitle} from '../../Components/index'
import { Component } from 'react'
import {Hero, MostPop, Gaming} from "../../Components/Sections/index";


class Home extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render () {
        return (
            <>
            <SectionTitle>Home</SectionTitle>
               <Hero />
               <MostPop />
               <Gaming />
            </>
        )
    }

}

export default Home