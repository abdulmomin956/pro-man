import React from "react";
import { useState } from "react";
import io from "socket.io-client";
import Chatbody from "./Chatbody";
import "./Message.css";
const socket = io.connect("https://morning-coast-54182.herokuapp.com/");

const Chat = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false)
  const joinRoom = (data) => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room)
      console.log(`User with id: ${socket.id} joined roon:${data}`)
      setShowChat(true);
    }
  };
  return (<div className="chatapp">
    {
      !showChat ? (
        <div className="joinChatContainer" >
          <h3>Join a chat</h3>
          <input
            type="text"
            placeholder="mobarok"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room id"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          ></input>

          <button onClick={joinRoom} >join room </button>
        </div>
      )
        :
        <Chatbody socket={socket} username={username} room={room}></Chatbody>
    }
  </div>
  );
};

export default Chat;
