"use client";

import { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import Story from "./Story";

export default function Stories() {
    const [storyUsers, setStoryUsers] = useState([]);

    useEffect(() => {
        const storyUsers = minifaker.array(20, (i) => ({
            id: i,
            username: minifaker.username({ locale: "en" }),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
        }));

        setStoryUsers(storyUsers);
        console.log(storyUsers);
    }, []);

    return (
        <div className="flex space-x-4 p-4 bg-white mt-8 border border-gray-200 overflow-x-auto rounded-sm scrollbar-none">
            {storyUsers.map((user) => (
                <Story
                    key={user.id}
                    username={user.username}
                    img={user.img}
                />
            ))}
        </div>
    );
}