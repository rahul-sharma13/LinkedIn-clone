import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Siderbar() {
  const user = useSelector(selectUser);
  const firstLetter = user.email[0];
  const capital = firstLetter.toUpperCase();

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1614851099362-9adf73ccebe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3JmdWwlMjBsaWdodGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt=""
        />
        <Avatar src={user.photoURL} className="sidebar__avatar"> {capital} </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="siderbar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("ReactJS")}
        {recentItem("Programming")}
        {recentItem("SoftwareDevelopment")}
        {recentItem("NodeJS")}
        {recentItem("Design")}
      </div>
    </div>
  );
}

export default Siderbar;
