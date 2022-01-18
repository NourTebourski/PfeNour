import React, { useState } from "react";
import "../MessageSender/MessageSender.css";
import { useStateValue } from "../../utils/StateProvider";
import { Avatar } from "@material-ui/core";
import db from "../../utils/firebase";
import { firebase } from "../../utils/firebase";

export default function AddComment({ id }) {
  console.log("__________", id);
  const [{ user }, dispatch] = useStateValue();
  const [inpu, setInpu] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").doc(id).collection("comments").add({
      comment: inpu,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
    });
    setInpu("");
  };
  return (
    <div className="messageSender" style={{ margin: "0" }}>
      <div class="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={inpu}
            onChange={(e) => setInpu(e.target.value)}
            placeholder={`Add Comment, ${user.displayName}?`}
            style={{ width: "100%" }}
          />

          <button
            type="submit"
            className="btn btn-outline-primary"
            onClick={handleSubmit}
          >
            comment
          </button>
        </form>
      </div>
    </div>
  );
}
