import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";

const ChatEngine = dynamic(() =>
    import("react-chat-engine").then((module) => module.ChatEngine)
)

const MessageFormSocial = dynamic(() =>
    import("react-chat-engine").then((module) => module.MessageFormSocial)
)

export default function Chats() {
    const [showChat, setShowChat] = useState(false)
    const router = useRouter()
    const { data: session } = useSession()

    useEffect(() => {
        if (typeof document !== null) {
            setShowChat(true)
        }
    })
    if (!showChat) return <div />;
    return (
        <div><div>
            <ChatEngine
                projectID="f8f901ff-8b72-4139-84b6-fc28980a5d48"
                renderNewMessageForm={() => <MessageFormSocial />}
            />
        </div></div>
    )
}


