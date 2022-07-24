import React, { useEffect, useState } from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import { useStateValue } from "./utils/StateProvider";
import Widgets from "./components/Widgets/Widgets";
import OneSignal from "react-onesignal";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import { Route, Switch } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [user2, setUser] = useState();
  return !user ? (
    <Login user={user2} setUser={setUser} />
  ) : (
    <>
      <>
        <Header />
        <div className="app__body">
          <>
            <Sidebar />
            <Feed />
          </>

          <Widgets user={user2} setUser={setUser} />
        </div>
      </>
    </>
  );
}

export default App;
