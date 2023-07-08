import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";

function HeaderOption({ avatar, Icon, title }) {
  //using direct icon,title instead of props.
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {/* which makes just {title} here instead of {props.title} */}
      {avatar && <Avatar className='headerOption__icon' src={avatar}/>}
      <h3 className="headerOption__title">{title}</h3>  
    </div>
  );
}

export default HeaderOption;
