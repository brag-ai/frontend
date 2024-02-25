"use client";
import Image from "next/image";
import ChatInputBox from "./ChatInputBox";
import ChatWindow from "./ChatWindow";
import { useEffect, useState } from "react";

const MainContent = () => {
    const [chatMessages, setChatMessages] = useState(["hey hoiws it going", "its going pretty well"]);
    useEffect(() => {
        console.log("messages: ", chatMessages);
    }, [chatMessages]);

    const handleChatInput = (message) => {
        setChatMessages(chatMessages => [...chatMessages, message]);
        //call to make to the api with the message
        const response = "some response to " + message;
        setChatMessages(chatMessages => [...chatMessages, response]);
    };

    return <div className="flex max-w-full flex-1 flex-col">
        <div className="sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden">
            <button
                type="button"
                className="-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={0}
                    viewBox="0 0 15 15"
                    className="h-6 w-6 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                        fill="currentColor"
                    />
                </svg>
            </button>
            <h1 className="flex-1 text-center text-base font-normal">New chat</h1>
            <button type="button" className="px-3">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    className="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                    />
                </svg>
            </button>
        </div>
        <div className="flex h-full w-full transition-width flex flex-col overflow-hidden flex-1 items-center justify-center" id="" >
            <div className="overflow-hidden flex items-center h-full w-1/2" id="chatWindowContainer">
                {<ChatWindow
                    messages={chatMessages}
                />}
            </div>
            {<ChatInputBox
                handleChatSubmit={(message) => handleChatInput(message)}
            />}
        </div>
    </div>;
};

export default MainContent;