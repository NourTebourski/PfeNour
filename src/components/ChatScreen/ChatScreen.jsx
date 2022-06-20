import React, { useState } from "react";

import Conversation from "../Conversation/Conversation";

import "./Chat.css";
import ChatHeads from "../ChatHeads/ChatHeads";
import { db } from "../../utils/firebase";

export default function ChatScreen({ setUser, user }) {
  const [chatHeads, setChatHeads] = useState([]);
  const [receiver, setReceiver] = useState(null);

  React.useEffect(() => {
    // get from localstorage
    const user = JSON.parse(localStorage.getItem("user"));

    // if no user -> redirect
    if (user) setUser(user);
  }, [setUser]);

  React.useEffect(() => {
    if (!user) return;
    db.collection("users").onSnapshot((snapShot) => {
      setChatHeads(
        snapShot.docs
          .map((doc) => doc.data())
          .filter((obj) => obj.uid != user.uid)
      );
    });
  }, [user]);

  return (
    <div className="chat-screen">
      <div className="half-screen chat-heads">
        <ChatHeads items={chatHeads} setReceiver={setReceiver} />
      </div>

      <div className="half-screen">
        <Conversation receiver={receiver} user={user} />
      </div>
    </div>
  );
}
