import React from "react";
import "../MessageSender/MessageSender.css";
import { Avatar } from "@material-ui/core";
export default function Comments({
  comment,
  timestamp,
  profilePic,
  username,
  id,
}) {
  return (
    <>
      <div className="messageSender" style={{ margin: "0" }}>
        <div class="messageSender__top">
          <Avatar src={profilePic} />
          <form>
            <input value={comment} disabled={true} style={{ width: "100%" }} />
          </form>
        </div>
      </div>
    </>
  );
}
