import React from "react";
import { FaEdit, FaEllipsisH, FaVideo } from "react-icons/fa";
import "./ChatHeads.css";
import { Avatar } from "@material-ui/core";
export default function ChatHeads({ items, setReceiver }) {
  console.log(items);
  return (
    <div>
      <div className="conv-header-container">
        <p className="conversations-header">Conversations</p>
      </div>

      <div className="chat-heads-container">
        {items.map((obj, i) => (
          <div
            key={i}
            className="chat-head-item"
            onClick={() => setReceiver(obj)}
          >
            <div class="d-flex flex-row">
              <div className="  ">
                <Avatar
                  src={obj.photo}
                  style={{ height: "50px", width: "50px" }}
                />
              </div>

              <div className="username">{obj.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
