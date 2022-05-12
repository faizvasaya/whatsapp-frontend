import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

export const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  );
};
