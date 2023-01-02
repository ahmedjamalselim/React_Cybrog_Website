import { Component } from "react";
import './ProfileInfo.css'


class ProfileInfo extends Component {
    render(){
        return(
            <div className="profile-wrapper">
                <div className="image"><img src="images/profile.jpg" alt="profile pic" /></div>
                <div className="profile-info">
                    <button className="account-status btn btn-primary rounded-pill">Offline</button>
                    <p className="profile-name">Ahmed Jamal Selim</p>
                    <p className="client-live-status">You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                    <button className="profile-start-stream btn btn-primary rounded-pill">Start Live Stream</button>
                </div>
                <div className="profile-contributions">
                    <ul>
                        <li>
                            <p>Games Downloaded</p>
                            <span>3</span>
                        </li>
                        <li>
                            <p>Friends Offline</p>
                            <span>12</span>
                        </li>
                        <li>
                            <p>Live Streams</p>
                            <span>None</span>
                        </li>
                        <li>
                            <p>Clips Watched</p>
                            <span>32</span>
                        </li>
                    </ul>
                </div>
            </div>
            
        )
    }
}

export default ProfileInfo