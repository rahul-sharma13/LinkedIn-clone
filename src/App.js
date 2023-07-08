import React from "react";
import Header from "./Header";
import "./App.css";
import Siderbar from "./Siderbar";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      <Header />

      {/*App Body*/}
      <div className="app__body">
        <Siderbar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
