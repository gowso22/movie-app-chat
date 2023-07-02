import React from 'react';

import useChat from '../custom-hooks/useChat';
import styles from '../css/chat.module.css';


function Chat(){

  
    const {username, handleUsername, messages, inputValue, handleContent, handleMessageSubmit} = useChat();
    
    return(
        <div className = {styles.chatWrap}>
           
            <h1>채팅</h1>
            <div className={styles.messageWrap}>
                {messages.map((message, index) => (
                    <p className={styles.messageContent} key={index}>
                        <span>{message.username}</span> : 
                        <span>{message.content}</span> - 
                        <span>{message.time}</span>
                    </p>
                ))}
            </div>
            <div className={styles.inputWrap}>
                <input
                    className={styles.inputUsername} 
                    type = "text" 
                    value={username} 
                    onChange={handleUsername} 
                    placeholder='사용자 이름'/>    
                <input
                className={styles.inputChatContent} 
                type = "text" 
                value = {inputValue}
                onChange={handleContent}
                placeholder='채팅 내용을 입력하세요'/>
                <button 
                className={styles.messageBtn}
                onClick={handleMessageSubmit}>전송</button>
            </div>
        </div>
    )
}

export default Chat;