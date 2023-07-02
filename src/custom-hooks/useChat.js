import { useEffect, useState } from "react";

import io from 'socket.io-client'; // 3000 포트

const socket = io("http://localhost:3001");

const useChat = () => {

    const [username, setUsername] = useState("");
    const [inputValue, setInputValue] = useState("");

    const [messages, setMessages] = useState([
        {username : '123', content : "123", time : 1120}
    ]);


    useEffect(()=>{
        socket.on("message", handleMessage)
        return () => {
            socket.off("message", handleMessage)
        }
    },[]);


    const handleMessage = (message) => {
        setMessages((prevMsg) => [...prevMsg, message])
    }

    const handleMessageSubmit = () => {
        if(inputValue.trim() !== ""){
            const curTime = new Date().toLocaleDateString();

            socket.emit("message", {
                username,
                content : inputValue,
                time : curTime,
            });
            setInputValue("");
        }
    }



    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleContent = (e) => {
        setInputValue(e.target.value);
    }

    return{username, handleUsername, messages, inputValue, handleContent, handleMessageSubmit}

}

export default useChat;