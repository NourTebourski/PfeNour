import React from "react";
import { useState } from "react";
import ChatScreen from "../ChatScreen/ChatScreen";
import "./Widgets.css";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Widgets({ setUser, user }) {
  const [messenger, setmessanger] = useState(false);
  return (
    <>
      <div className="container-absolute">
        {messenger ? (
          <div className="widgets">
            <div className="closeButton">
              <IconButton onClick={(e) => setmessanger(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <ChatScreen user={user} setUser={setUser} />
          </div>
        ) : (
          <button
            type="button"
            class="btn btn-primary"
            onClick={(e) => setmessanger(true)}
          >
            Open Messages
          </button>
        )}
      </div>
    </>
  );
}

export default Widgets;
