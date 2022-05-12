import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLarge from "@material-ui/icons/DonutLarge";
import MoreVert from "@material-ui/icons/MoreVert";
import "./Sidebar.css";
import { SearchOutlined } from "@material-ui/icons";
import { SidebarChat } from "./SidebarChat";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://avatars.githubusercontent.com/u/29179470?s=40&v=4" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};
