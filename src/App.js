import React, { useEffect } from "react";
import Header from "./Header";
import "./App.css";
import Siderbar from "./Siderbar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import Widgets from "./Widgets";

function App() {

  //pulling the user logged in.
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() =>{
      auth.onAuthStateChanged(userAuth => {
        if(userAuth){
          //user is logged in
          dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          }));
        } else{
          //user is logged out
          dispatch(logout());
        }
      })
  },[dispatch] )

  return (
    <div className="app">
      <Header />

      {!user ? (<Login  />
      ):(
        <div className="app__body">
        <Siderbar />
        <Feed />
        <Widgets />
      </div>
      )}
      
      
    </div>
  );
}

export default App;
