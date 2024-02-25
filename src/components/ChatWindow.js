"use client";

import { useEffect, useState } from "react";
import Message from "./Message";


const ChatWindow = (props) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.log("props.messages: ", props.messages);
        setMessages(props.messages);
    }, [props.messages]);

    useEffect(() => {
        console.log("messages in chat window: ", messages);
    }, [messages]);
    return <div className="react-scroll-to-bottom--css-ikyem-79elbk h-full dark:bg-gray-800 w-full" id="chatWindow" >
        <div className="react-scroll-to-bottom--css-ikyem-1n7m0yu">
            <div className="py-10 relative w-full flex flex-col h-full" key={props.messages.length}>
                {/* <h1 className="text-2xl sm:text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 flex gap-2 items-center justify-center h-screen">
                        Brag AI Chatbot
                    </h1> */}
                {
                    messages && messages.map((ell, index) =>
                        <Message
                            message={ell}
                        />
                    )
                }

            </div>
            <div className="flex flex-col items-center text-sm dark:bg-gray-800" />
        </div>
    </div >
        ;

};

export default ChatWindow;
