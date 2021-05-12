import React from 'react';
import github from "../github.svg"
import {NavLink } from "react-router-dom"
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import AddIcon from '@material-ui/icons/Add';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <NavLink  exact className="navbar-brand" to="/">
                  <img src={github} style={{ height: "40px", marginLeft: "15px" }} alt="GitHub"/>
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <input className="form-control inp " type="search" placeholder="Search" aria-label="Search" />
                    </li>
                    <li className="nav-item">
                      <a activeClassName="menu_active" style={{ marginLeft: "20px" }}  exact
                        className="nav-link active navLink"
                        aria-current="page"
                        href="https://linkedin.com/in/harikrushn-kanani"
                      >
                        Linkedin
                      </a>
                    </li>
                    <li className="nav-item">
                      <a activeClassName="menu_active"  exact className="nav-link navLink" target="_blank" href="https://twitter.com/Harikrushn9">
                      Twitter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a activeClassName="menu_active"  exact className="nav-link navLink" target="_blank" href="https://github.com/harikanani">
                        GitHub
                      </a>
                    </li>
                    <li className="nav-item">
                      <a activeClassName="menu_active"  exact className="nav-link navLink" target="_blank" href="https://instagram.com/kanani_025">
                        Instagram
                      </a>
                    </li>
                    <li className="nav-item">
                      <a activeClassName="menu_active"  exact className="nav-link navLink" target="_blank" href="mailto:harikanani2003@gmail.com">
                        Contact
                      </a>
                    </li>
                  </ul>
                  {/* <form className="form-inline my-2 my-lg-0">
                    <NotificationsIcon style={{ color: "#cdd9e5 !important" }} />
                    <AddIcon style={{ color: "#cdd9e5 !important" }} />
                    <ArrowDropDownIcon style={{ color: "#cdd9e5 !important" }} />
                  </form> */}
                </div>
              </div>
            </nav>
    </>
    )
}

export default Header;
