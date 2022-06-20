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

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [user2, setUser] = useState();
  return (
    // Bem
    <div className="app">
      {!user ? (
        <Login user={user2} setUser={setUser} />
      ) : (
        <>
          <Header />

          <div className="app__body">
            {/* <Sidebar />
            <Feed />
            <Widgets /> */}
            <ChatScreen user={user2} setUser={setUser} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
