import { Component } from "react";
import {SectionTitle} from '../../Components/index'
import {ProfileInfo, Gaming} from '../../Components/Sections/index'
import './Profile.css'


class Profile extends Component {
    render() {
        return (
            <>
                <SectionTitle>Profile</SectionTitle>
                <ProfileInfo />
                <Gaming />
            </>
        )
    }
}

export default Profile