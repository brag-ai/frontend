"use client";
import { useRef } from "react";
const ChatInputBox = (props) => {
    const inputRef = useRef(null);
    const handleChatSubmit = (event) => {
        event.preventDefault();
        props.handleChatSubmit(inputRef.current.value);
    };

    return <div className="w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2">
        <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
            <div className="relative flex flex-col h-full flex-1 items-stretch md:flex-col">
                <div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
                    <textarea
                        tabIndex={0}
                        data-id="root"
                        style={{ height: 24, maxHeight: 200, overflowY: "hidden" }}
                        placeholder="Send a message..."
                        className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent pl-2 md:pl-0"
                        defaultValue={""}
                        ref={inputRef}
                    />
                    <button
                        type="button"
                        className="absolute p-1 rounded-md bottom-1.5 md:bottom-2.5 bg-transparent disabled:bg-gray-500 right-1 md:right-2 disabled:opacity-40 hover:bg-[#ADD8E6]"
                        onClick={handleChatSubmit}
                    >
                        {/* <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 mr-1 text-white "
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1={22} y1={2} x2={11} y2={13} />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg> */}
                        Submit
                    </button>
                </div>
            </div>
        </form>
        <div className="px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
            <span>
                ChatGPT Clone may produce inaccurate information about people,
                places, or facts.
            </span>
        </div>
    </div>;
};

export default ChatInputBox;