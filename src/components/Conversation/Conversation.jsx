import React, { useRef, useState } from "react";

import { db } from "../../utils/firebase";
import "./conversation.css";
import { Avatar } from "@material-ui/core";

import {
  FaCommentAlt,
  FaComments,
  FaImage,
  FaInfoCircle,
  FaPhone,
  FaPlusCircle,
  FaStickyNote,
  FaThumbsUp,
  FaVideo,
} from "react-icons/fa";

export default function Conversation({ receiver, user }) {
  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([]);

  const currentMessage = useRef(null);
  const chatBodyRef = useRef(null);

  // handle sending the messages
  const sendMessage = async () => {
    if (!currentMessage.current.value) return;
    const myMessage = {
      message: currentMessage.current.value,
      uid: user.uid,
    };

    // add and save message to firestore
    const conversationRef = db.collection("conversation").doc(conversationId);
    const docSnap = await conversationRef.get();

    // append message to existing conversation
    if (docSnap.exists) {
      const docData = docSnap.data();
      console.log(docData);
      await conversationRef.set({
        messages: [...docData.messages, myMessage],
      });
    } else {
      // create a new conversation
      await conversationRef.set({
        messages: [myMessage],
      });
    }

    currentMessage.current.value = "";
  };

  // set conversationId
  React.useEffect(() => {
    if (!receiver || !user) return;

    let myConvId;

    if (receiver.uid > user.uid) myConvId = receiver.uid + user.uid;
    else myConvId = user.uid + receiver.uid;

    setConversationId(myConvId);
  }, [receiver, user]);

  // get converastion from firestore
  React.useEffect(() => {
    if (!conversationId) return;

    const unsub = db
      .collection("conversation")
      .doc(conversationId)
      .onSnapshot((doc) => {
        console.log(doc);
        const currentData = doc.data();
        if (currentData?.messages.length > 0) setMessages(currentData.messages);
        else setMessages([]);
      });

    //   .onSnapshot((doc) => {
    //     console.log(doc.data());
    //     const currentData = doc.data();

    //
    //   });

    return unsub;
  }, [conversationId]);

  // send message with enter
  const handleEnterKeyPressDown = (e) => {
    if ((e.code === "Enter" || e.key === "Enter") && !e.shiftKey) {
      sendMessage();
    }
  };

  const scollToBottomOfChat = () => {
    if (!chatBodyRef.current) return;
    chatBodyRef.current.style.scrollBehavior = "smooth";
    chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
  };

  // top scroll after new message
  React.useEffect(() => {
    scollToBottomOfChat();
  }, [messages, chatBodyRef]);

  return (
    <div>
      {receiver ? (
        <div>
          <div className="user-conversation-header">
            <div className="user-conv-header-container">
              <div className="user-profile-pic-container">
                <Avatar src={receiver.photo} />
              </div>
              <div className="username">{receiver.name} </div>
            </div>
          </div>

          {/* Conversation messages */}
          <div className="conversation-messages" ref={chatBodyRef}>
            {messages.length > 0 ? (
              messages.map((obj, i) => (
                <div
                  key={i}
                  className="message-container"
                  style={{ justifyContent: obj.uid === user.uid && "flex-end" }}
                >
                  <div className="message-bubble">{obj.message}</div>
                </div>
              ))
            ) : (
              <div className="no-conversation">
                <div>
                  <FaComments />
                </div>
                <p>Start a conversation with {receiver.email}</p>
              </div>
            )}
          </div>

          {/* Input bar */}
          <div className="input-container">
            <div className="input-message">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="write your message here  "
                  ref={currentMessage}
                  onKeyPress={handleEnterKeyPressDown}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={sendMessage}
              class="btn btn-outline-primary"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <div className="no-conversation">
          <div>
            <FaCommentAlt />
          </div>
          <p>Click on the Collegue that you want to talk with</p>
        </div>
      )}
    </div>
  );
}
