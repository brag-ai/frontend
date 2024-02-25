"use client";

import { useEffect, useState } from "react";
//hello
const Message = (props) => {
    return <div className="flex flex-col gap-2 pb-2 text-gray-100 text-sm">
        <a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group">
            <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                {props.message}
            </div>
        </a>
    </div>;
};

export default Message;