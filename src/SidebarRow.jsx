import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow" style={{ marginTop: "20px" }}>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
