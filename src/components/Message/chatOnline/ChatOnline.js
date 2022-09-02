import axios from 'axios';
import React, { useEffect, useState } from 'react';
import noAvatar from '../../../images/noAvatar.png'
import './chatOnline.css'

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
    const [friends, setFriends] = useState([]);
    // const [onlineFriends, setOnlineFriends] = useState([]);

    useEffect(() => {

        const friendsArrayId = onlineUsers?.find((f) => f.userId !== currentId)
        if (friendsArrayId?.userId) {
            const getUser = async () => {
                try {
                    const res = await axios.get(`https://morning-coast-54182.herokuapp.com/users/${friendsArrayId?.userId}`);
                    // console.log(res.data);
                    setFriends(res.data);
                } catch (err) {
                    console.log(err);
                }
            };
            getUser();
        }


    }, [currentId, onlineUsers]);

    // console.log(friends);
    // useEffect(() => {
    //     setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
    // }, [friends, onlineUsers]);

    const handleClick = async (user) => {
        try {
            const res = await axios.get(
                `https://morning-coast-54182.herokuapp.com/api/conversations/find/${currentId}/${user._id}`
            );
            setCurrentChat(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="chatOnline">
            {/* {friends?.map((o) => ( */}
            <div className="chatOnlineFriend" onClick={() => handleClick(friends)}>
                <div className="chatOnlineImgContainer">
                    <img
                        className="chatOnlineImg"
                        src={
                            noAvatar
                        }
                        alt=""
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">{friends?.displayName}</span>
            </div>
            {/* ))} */}
        </div>
    );
};

export default ChatOnline;