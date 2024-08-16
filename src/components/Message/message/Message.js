import React, { useEffect, useRef, useState } from 'react';
import { format } from "timeago.js";
import './message.css'
import noAvatar from '../../../images/noAvatar.png'
import ChatOnline from '../chatOnline/ChatOnline';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useOutletContext, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentChatId } from '../../../global-state/actions/reduxActions';
import { RESTAPI } from '../../../api';

const Message = () => {
    const { currentChatId } = useParams();
    const [socket, arrivalMessage] = useOutletContext();
    const chats = useSelector(state => state.chats);
    const currentChat = chats.find(c => c._id === currentChatId);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const user = useSelector(state => state.user);
    const [uniqueUsers, setUniqueUsers] = useState([])
    const [friend, setFriend] = useState([]);
    const scrollRef = useRef();
    const dispatch = useDispatch();
    const [sendable, setSendable] = useState();
    const [activeConversations, setActiveConversations] = useState([])

    // console.log(arrivalMessage, activeConversations);

    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        dispatch(setCurrentChatId(currentChatId))
    }, [currentChatId, dispatch])

    // console.log(socket, currentChatId);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get(RESTAPI + "api/messages/" + currentChatId);
                setMessages(res.data);
                // console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
    }, [currentChatId]);

    const handleSubmit = async (e) => {
        // e.preventDefault();
        setSendable(false)
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id,
        };
        const receiverId = currentChat.members.filter(
            (member) => member !== user._id
        );

        socket?.current?.emit("sendMessage", {
            senderId: user._id,
            text: newMessage,
            conversationId: currentChat._id,
        });

        try {
            const res = await axios.post(RESTAPI + "api/messages", message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // console.log(messages);
    useEffect(() => {
        function onlyUnique(value, index, self) {
            return self.findIndex(v => v.sender === value.sender) === index;
        }
        const friendMsg = messages.filter(m => m.sender !== user?._id);
        const unique = friendMsg.filter(onlyUnique);
        // console.log(unique);
        setUniqueUsers(unique)
    }, [messages, user?._id])

    // console.log(uniqueUsers);

    useEffect(() => {
        if (uniqueUsers.length > 0) {
            const getUser = async () => {
                try {
                    const res = await axios.post(`${RESTAPI}users/chat`, uniqueUsers);
                    // console.log(res.data);
                    setFriend(res.data);
                } catch (err) {
                    console.log(err);
                }
            };
            getUser();
        }
    }, [uniqueUsers])

    // console.log(friend);
    return (<>
        <div className='chat-window'>
            <div className='chatBoxWrapper'>
                {currentChatId ? (<> <div className="chatBoxTop">
                    {messages.map((m, i) => (
                        <div key={i} ref={scrollRef}>
                            <div className={m.sender === user._id ? "message own" : "message"}>
                                <div className="messageTop">
                                    {m.sender === user._id ?
                                        user?.photoURL ?
                                            <img
                                                className="messageImg"
                                                src={user?.photoURL}
                                                alt=""
                                            /> :
                                            <div style={{ borderRadius: "50%", backgroundColor: user.profileBg }} className={`messageImg bg-[${user?.profileBg}] flex justify-center items-center text-white`}>
                                                {user?.displayName?.charAt(0)?.toUpperCase() || user?.title?.charAt(0)?.toUpperCase()}
                                            </div> : friend.filter(f => f._id === m.sender).map(f => (f?.photoURL ? <img
                                                key={f?._id}
                                                title={f?.displayName}
                                                className="messageImg"
                                                src={f?.photoURL}
                                                alt=""
                                            /> : <div key={f?._id} title={f?.displayName} style={{ borderRadius: "50%", backgroundColor: f.profileBg }} className={`messageImg bg-[${f?.profileBg}] flex justify-center items-center text-white`}>
                                                {f?.displayName?.charAt(0)?.toUpperCase()}
                                            </div>))


                                    }
                                    <p className="messageText">{m?.text}</p>
                                </div>
                                <div className="messageBottom">{format(m?.createdAt)}</div>
                            </div>
                        </div>
                    ))}
                </div>
                    <div className="chatBoxBottom">
                        <input
                            className="chatMessageInput"
                            placeholder="write something..."
                            onChange={(e) => { setNewMessage(e.target.value); setSendable(true) }}
                            value={newMessage}
                            onKeyPress={(event) => {
                                event.key === "Enter" && newMessage && sendable && handleSubmit();
                            }}
                        ></input>
                        <button className="chatSubmitButton" onClick={handleSubmit}>
                            Send
                        </button>
                    </div>
                </>) : (
                    <span className="noConversationText">
                        Create a workspace to start a chat.
                    </span>
                )}
            </div>
        </div>
        <div className='chatOnline'>
            <div className="chatOnlineWrapper  bg-white shadow">
                <ChatOnline
                // onlineUsers={onlineUsers}
                // currentId={user._id}
                // setCurrentChat={setCurrentChat}
                />
            </div>
        </div>

    </>
    );
};

export default Message;