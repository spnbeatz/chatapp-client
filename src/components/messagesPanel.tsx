import React from "react";
import { ConversationListItem } from "./Conversation/conversationListItem";
import { LastMessage } from "./Conversation/interface";
import { Button } from "@nextui-org/button";
import { useTranslation } from "react-i18next";

export const MessagesPanel = ({setPickedMessage}: {setPickedMessage: React.Dispatch<React.SetStateAction<string>>}) => {

    const { t } = useTranslation();
    
    const messages: LastMessage[] = [
        {id: '1', message: "Hello", user: {id: "1", avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d", username: "patryk"}},
        {id: '2', message: "How are you mane", user: {id: "2", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", username: "zenek"}},
        {id: '3', message: "Miss it", user: {id: "3", avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d", username: "ola"}},
        {id: '4', message: "Lorem ipsum", user: { id: "4", avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c", username: 'grzybu'}},
        {id: '5', message: "How many fingers horses have?", user: {id: "5", avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d", username: "dupa"}},
        {id: '6', message: "goood", user: {id: "6", avatar: "https://i.pravatar.cc/300?u=a042581f4f29026707d", username: 'hihi'}}
    ]

    return (
        <div className="w-full rounded-md overflow-hidden shadow-medium flex flex-col pb-4">
            <p className="text-white text-sm font-semibold px-6 py-4 bg-slate-800">
                {t('messages.messagesPanelTitle')}
            </p>
            <div className="w-full px-4 overflow-y-scroll h-96">
                {messages.map((item: LastMessage) => {
                    return (
                        <Button 
                            className="items-center justify-between flex flex-row w-full gap-2 duration-300 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 h-16 p-2 rounded-md hover:shadow-black cursor-pointer"
                            onClick={()=>setPickedMessage(item.id)}
                            key={item.id}
                        >
                            <ConversationListItem {...item}/>
                        </Button>

                    )
                })}
            </div>
        </div>
    )
}