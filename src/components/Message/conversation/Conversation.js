import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './conversation.css'
import noAvatar from '../../../images/noAvatar.png'

const Conversation = ({ conversation, currentUser }) => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);
        // console.log(friendId);

        const getUser = async () => {
            try {
                const res = await axios.get(`https://morning-coast-54182.herokuapp.com/users/${friendId}`);
                // console.log(res.data);
                setUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [currentUser, conversation]);

    return (
        <div className="conversation">
            <img
                className="conversationImg"
                src={
                    users?.profilePicture
                        ? users.profilePicture
                        : noAvatar
                }

                alt=""
            />
            <span className="conversationName">
                {users?.displayName}
            </span>
        </div>
    );
};

export default Conversation;