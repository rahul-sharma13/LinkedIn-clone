import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search"; // imported after installing Material UI
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountSharpIcon from '@mui/icons-material/SupervisorAccountSharp';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className="header">
      {/* header left gives the icon and the search bar */}
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
          alt="linkedIn-logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountSharpIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterSharpIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
        avatar={true} 
        title="me" 
        onClick={logoutOfApp}  
        />
      </div>
    </div>
  );
}

export default Header;
