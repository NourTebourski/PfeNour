import React, { useEffect } from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import { useStateValue } from "./utils/StateProvider";
import Widgets from "./components/Widgets/Widgets";
import OneSignal from "react-onesignal";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    OneSignal.init({
      appId: "aee2db32-157d-4adf-97df-3c3b4fb0ab2e",
    });
  }, []);
  return (
    // Bem
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
