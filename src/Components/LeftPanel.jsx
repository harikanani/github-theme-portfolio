import React from 'react';
import "./LeftPanel.css";
import profile from "../profile.svg";
// import { useEffect, useState } from "react";
// import axios from 'axios';
// import GroupIcon from '@material-ui/icons/Group';
// import StarOutlineIcon from '@material-ui/icons/StarOutline';


const LeftPanel = () => {
    // const grayIcons = {
    //     color: "#ADBAC7",
    //     alignItem: "center"
    // }
    // const followersCount = 43
    // const followingCount = 307
    // const starCount = 158

    // const FOLLOWERS_API = "https://api.github.com/users/harikanani/followers?per_page=100";
    // const FOLLOWING_API = "https://api.github.com/users/harikanani/following?per_page=100";
    // const [followersCount, setFollowersCount] = useState(0)
    // useEffect(async () => {
    //     await axios.get(FOLLOWERS_API).then((response) => {
    //         const followersCount = response.data.length;
    //         setFollowersCount(followersCount);
    //     })
    // }, [followersCount])

    return (
        <div className="leftPanel">
            <div className="profile">
                <img src={profile} alt="Profile" />
            </div>
            <div className="profileText">
                <h3>HARIKRUSHN KANANI</h3>
                <h5>harikanani</h5>
            </div>
            <div className="center-text">
                <p>What if the universe is just code?🍕</p>
            </div>
            {/* <button className="github-button" type="submit">
                GitHub
            </button>
            <div className="socials">
                <GroupIcon style={grayIcons}/>
                {followersCount} Followers · {followingCount} Following · <StarOutlineIcon /> {starCount}
            </div> */}
        </div>
    )
}

export default LeftPanel;
