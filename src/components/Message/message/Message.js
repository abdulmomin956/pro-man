import React from 'react';
import { format } from "timeago.js";
import './message.css'
import noAvatar from '../../../images/noAvatar.png'

const Message = ({ message, own }) => {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src={noAvatar}
                    alt=""
                />
                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    );
};

export default Message;