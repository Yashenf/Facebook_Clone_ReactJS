import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./navBar.css";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <span className="logo">Facebook</span>
      </div>

      <div className="nav-bar-center">
        <SearchIcon className="search-icon" />
        <input type="text" className="search-input" placeholder="search hear" />
      </div>

      <div className="nav-bar-right">

        <div className="nav-bar-links">
          <span className="nav-bar-link">Home</span>
          <span className="nav-bar-link">Profile</span>
        </div>

        <div className="nav-bar-icons">

          <div className="nav-bar-icon">
            <PersonIcon/>
            <div className="icon-tag-background">
               <span className="icon-tag">6</span>
            </div>
          </div>
          <div className="nav-bar-icon">
            <MessageIcon/>
            <div className="icon-tag-background">
               <span className="icon-tag">4</span>
            </div>
          </div>
          <div className="nav-bar-icon">
            <SettingsIcon/>
          </div>

        </div>

        <div className="nav-bar-profile-pic">
          <img src="https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-1024x1024.jpg" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
