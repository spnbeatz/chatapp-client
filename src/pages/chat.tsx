import DefaultLayout from "@/layouts/default";
import React, { useState } from "react";
import { OnlineUsersPanel } from "@/components/onlineUsersPanel";
import { MessagesPanel } from "@/components/messagesPanel";
import { ChatPanel } from "@/components/chatPanel";

export const ChatPage: React.FC = () => {

    const [ pickedMessage, setPickedMessage] = useState<string>("");

    return (
        <DefaultLayout>

            <div className="w-full flex flex-row justify-between gap-8 h-full pb-14">
                <section className="w-2/5 gap-4 flex flex-col items-center h-full">
                    <OnlineUsersPanel />
                    <MessagesPanel setPickedMessage={setPickedMessage}/>
                </section>
                <section className="w-3/5 h-full">
                    <ChatPanel message={pickedMessage} />
                </section>

            </div>

        </DefaultLayout>
    )
}