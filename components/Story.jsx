import React from "react";

export default function Story({ username, img }) {
    return (
        <div className="flex flex-col items-center flex-shrink-0 cursor-pointer group">
            <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 transition-transform duration-200 group-hover:scale-110">
                <div className="p-[2px] bg-white rounded-full">
                    <img
                        className="h-16 w-16 rounded-full object-cover border border-gray-200"
                        src={img}
                        alt={username}
                    />
                </div>
            </div>

            <p className="text-xs text-gray-700 w-16 truncate text-center mt-1">
                {username}
            </p>
        </div>
    );
}