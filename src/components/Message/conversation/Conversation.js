import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './conversation.css'
import noAvatar from '../../../images/noAvatar.png'
import CustomLink from '../../shared/CustomLink';

const Conversation = ({ conversation, currentUser }) => {
    const [users, setUsers] = useState({});

    useEffect(() => {
        // console.log(conversation);

        if (conversation.type === "personal") {
            const friendId = conversation.nameId.find((m) => m !== currentUser._id);
            // console.log(friendId);
            const getUser = async () => {
                try {
                    const res = await axios.get(`http://13.126.5.141:5000/users/${friendId}`);
                    // console.log(res.data);
                    setUsers(res.data);
                } catch (err) {
                    console.log(err);
                }
            };
            getUser();
        } else {
            const workspaceId = conversation.nameId.find((m) => m !== currentUser._id);
            // console.log(workspaceId);
            const getWorkspace = async () => {
                try {
                    const res = await axios.get(`http://13.126.5.141:5000/sworkspace/api/${workspaceId}`);
                    // console.log(res.data);
                    setUsers(res.data)
                } catch (err) {
                    console.log(err);
                }
            }
            getWorkspace();
        }
    }, [currentUser, conversation]);

    // console.log(users);

    return (
        <CustomLink to={`/chat/${conversation?._id}`} className="conversation">
            {users?.photoURL ? <img
                className="conversationImg"
                src={users?.photoURL}
                alt={users?.displayName}
            /> :
                <div style={{ borderRadius: "50%", backgroundColor: users.profileBg }} className={`conversationImg bg-[${users?.profileBg}] flex justify-center items-center text-white`}>
                    {users?.displayName?.charAt(0)?.toUpperCase() || users?.title?.charAt(0)?.toUpperCase()}
                </div>}
            <span className="conversationName ">
                {users?.displayName || users?.title}
            </span>
        </CustomLink>
    );
};

export default Conversation;