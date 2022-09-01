import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import "./Message.css";
import Conversation from './conversation/Conversation'
import Message from './message/Message'
import ChatOnline from "./chatOnline/ChatOnline";



const socket = io.connect("https://pro-man-socket.onrender.com/");

const Chat = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const user = useSelector(state => state.user)
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io("https://pro-man-socket.onrender.com/");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      // console.log(users);
      // setOnlineUsers(
      //   user?.filter((f) => users.some((u) => u.userId === f))
      // );
      setOnlineUsers(
        users
      );
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("https://morning-coast-54182.herokuapp.com/api/conversations/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("https://morning-coast-54182.herokuapp.com/api/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  // console.log(conversations, user._id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("https://morning-coast-54182.herokuapp.com/api/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (<main className='messenger w-full mt-1'>
    <div className='chatMenu'>
      <div className="chatMenuWrapper bg-white shadow">
        <input placeholder="Search for friends" className="chatMenuInput" />
        {conversations.map((c, i) => (
          <div key={i} onClick={() => setCurrentChat(c)}>
            <Conversation conversation={c} currentUser={user} />
          </div>
        ))}
      </div>
    </div>
    <div className='chat-window'>
      <div className='chatBoxWrapper'>
        {currentChat ? (
          <> <div className="chatBoxTop">
            {messages.map((m, i) => (
              <div key={i} ref={scrollRef}>
                <Message message={m} own={m.sender === user._id} />
              </div>
            ))}
          </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="write something..."
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
              ></textarea>
              <button className="chatSubmitButton" onClick={handleSubmit}>
                Send
              </button>
            </div>
          </>) : (
          <span className="noConversationText">
            Open a conversation to start a chat.
          </span>
        )}
      </div>
    </div>
    <div className='chatOnline'>
      <div className="chatOnlineWrapper  bg-white shadow">
        <ChatOnline
          onlineUsers={onlineUsers}
          currentId={user._id}
          setCurrentChat={setCurrentChat}
        />
      </div>
    </div>
  </main>
  );
};


export default Chat;
