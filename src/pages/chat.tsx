import DefaultLayout from "@/layouts/default";
import React, { useState } from "react";
import { GroupsPanel } from "@/components/groupsPanel";
import { MessagesPanel } from "@/components/messagesPanel";
import { ChatPanel } from "@/components/chatPanel";
import { ProfilePanel } from "@/components/profilePanel";
import { SavedMessagesPanel } from "@/components/savedMessagesPanel";

export const ChatPage: React.FC = () => {

    const [ pickedMessage, setPickedMessage] = useState<string>("");

    return (
        <DefaultLayout>

            <div className="w-full flex flex-row justify-between h-full gap-4 overflow-hidden">
                <div className="flex flex-col justify-start items-center w-1/4">
                    <MessagesPanel setPickedMessage={setPickedMessage}/>
                    <GroupsPanel/>
                </div>

                <ChatPanel message={pickedMessage} />
                <div className="flex flex-col -mt-4 justify-start items-center w-1/4 h-full py-4 overflow-y-scroll scrollbar-hide">
                    <ProfilePanel />
                    <SavedMessagesPanel />
                </div>
            </div>

        </DefaultLayout>
    )
}