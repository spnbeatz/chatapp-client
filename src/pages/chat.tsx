import DefaultLayout from "@/layouts/default";
import React, { useState } from "react";
import { OnlineUsersPanel } from "@/components/onlineUsersPanel";
import { MessagesPanel } from "@/components/messagesPanel";
import { ChatPanel } from "@/components/chatPanel";

export const ChatPage: React.FC = () => {

    const [ pickedMessage, setPickedMessage] = useState<string>("");

    return (
        <DefaultLayout>

            <div className="w-full flex flex-row justify-between h-full gap-4">
                <OnlineUsersPanel />
                <MessagesPanel setPickedMessage={setPickedMessage}/>
                <ChatPanel message={pickedMessage} />

            </div>

        </DefaultLayout>
    )
}