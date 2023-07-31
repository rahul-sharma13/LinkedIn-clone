import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
  //using direct icon,title instead of props.
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {/* which makes just {title} here instead of {props.title} */}
      {avatar && <Avatar className='headerOption__icon' > {user?.email[0]} </Avatar>}    {/*  optional chaining (?.) checks for nullish value on its reference(lhs) */}
      <h3 className="headerOption__title">{title}</h3>  
    </div>
  );
}

export default HeaderOption;
