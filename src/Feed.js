import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import "./Feed.css";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);
  //   e-->EVENT
  const sendPost = (e) => {
    e.preventDefault();

    setPosts()
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#FD7F20" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#BABABA" />
          <InputOption
            Icon={ViewDayIcon}
            title="Write Article"
            color="#007500"
          />
        </div>
      </div>

      {/*Posts */}
      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="Rahul"
        description="this is a test"
        message="wow this worked"
      />
    </div>
  );
}

export default Feed;
