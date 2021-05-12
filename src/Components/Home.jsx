import React from 'react';
import "./Home.css";
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const Home = () => {
    return (
        <div className="home">
            <LeftPanel className="child" />
            <RightPanel className="child" />
            {/* <div className="left">
                hari 
            </div>
            <div className="right">
                kanani
            </div> */}
        </div>
    )
}

export default Home;
