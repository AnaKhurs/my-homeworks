import React from 'react'
import classes from './Message.module.css';

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessageType) {
    return (
        <div className={classes.message}>
            <div className={classes.avatar_body}>
                <div className={classes.box}>
                    <div className={classes.box1}>
                        <img src={props.avatar}/>
                    </div>
                </div>
            </div>
            <div className={classes.message_body}>
                <div className={classes.name_user}>{props.name}</div>
                <div className={classes.text_time}>
                    <div className={classes.message_text}>{props.message}</div>
                    <div className={classes.time}>
                        <span>{props.time}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;
