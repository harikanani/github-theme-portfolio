import React from 'react';
import "./RightPanel.css";
// import greet from "../greet.png";
import { NavLink } from 'react-router-dom';
import Content from "./Content";
import InfoIcon from '@material-ui/icons/Info';

const RightPanel = () => {
    return (
        <>
        <div className="rightPanel">
            <div className="miniHeader">
                <ul>
                    <li>
                        <NavLink to="/" className="navLink">
                            <InfoIcon className="icon" />
                            Overview
                        </NavLink>
                    </li>
                    <li>
                        <a href="https://github.com/harikanani" target="_blank" className="navLink">
                            <InfoIcon className="icon" />
                            Project 
                        </a>
                    </li>
                </ul>
            </div>
            {/* <hr className="line" /> */}
            <Content />
        </div>
        </>
    )
}

export default RightPanel;
