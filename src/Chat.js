import React, { useState } from "react";
import "./Chat.css";
import AttachFile from "@material-ui/icons/AttachFile";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import MoreVert from "@material-ui/icons/MoreVert";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import Mic from "@material-ui/icons/Mic";
import { Avatar, IconButton } from "@material-ui/core";
import axios from "./axios";

export const Chat = ({ messages }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    await axios.post("/api/v1/messages/new", {
      message: input,
      name: "Faizal Vasaya",
      timestamp: new Date(),
      received: false,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="" />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => {
          return (
            <p
              className={`chat__message ${
                message.received && "chat__receiver"
              }`}
            >
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">{message.timestamp}</span>
            </p>
          );
        })}
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <IconButton>
          <Mic></Mic>
        </IconButton>
      </div>
    </div>
  );
};
