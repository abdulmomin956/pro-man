import React from 'react';


import {  NavLink } from "react-router-dom";

const ProfileNav = () => {
    return (
        <div>
            <div className="profileNav">
          <ul>
           
            <li><NavLink to="/profile/">profile & validaty</NavLink></li>
            <li><NavLink to="/profile/profileActive">Activity</NavLink></li>
            <li><NavLink to="/profile/profileCard">Cards</NavLink></li>
            <li><NavLink to="/profile/profileSettings">Settings</NavLink></li>

          </ul>
        </div>
        </div>
    );
};

export default ProfileNav;