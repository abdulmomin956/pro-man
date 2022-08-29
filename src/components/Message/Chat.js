import React from "react";
import { useState } from "react";
import io from "socket.io-client";
import Chatbody from "./Chatbody";
import "./Message.css";
const socket = io.connect("http://localhost:5000");

const Chat = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false)
  const joinRoom = (data) => {
    if (username !== "" && room !== "") {
        socket.emit("Join_room", room)
        console.log(`User with id: ${socket.id} joined roon:${data}`)
    }
  };
  return (
    <div className="Chat-wreaper" >
      <h3>Join a chat</h3>
      <input
        type="text"
        pleaceholder="mobarok"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      ></input>
      <input
        type="text"
        pleaceholder="Room id"
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      ></input>

      <button onClick={joinRoom} className="bg-primary">join room </button>
      <Chatbody></Chatbody>
    </div>
  );
};

export default Chat;
