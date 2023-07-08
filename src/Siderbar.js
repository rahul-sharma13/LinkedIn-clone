import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Siderbar() {
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
          src="https://th.bing.com/th/id/OIG.fajeewpxWRZgcoLrteRR?pid=ImgGn"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Rahul Sharma</h2>
        <h4>rahulharit13@gmail.com</h4>
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
