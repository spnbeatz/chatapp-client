import React, { useState } from "react";
import { Panel } from "./panel";
import { useTranslation } from "react-i18next";
import { Bookmark, Eye, EyeOff } from "react-ionicons";
import { Tooltip } from "@nextui-org/tooltip";
import { LastMessage } from "./Conversation/interface";
import { MessageItem } from "./messageItem";
import { Button } from "@nextui-org/button";

export const SavedMessagesPanel: React.FC = () => {
    const { t } = useTranslation();
    const [messagesVisible, setMessagesVisible] = useState<boolean>(true);

    const savedMessages: LastMessage[] = [
        {id: '1', message: "Hello dfsfsf sf sf sf sfsdf sdfsdf sdfsdffs fsdfs fsfsdfsfsfsfs fs", user: {id: "1", avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d", username: "patryk"}},
        {id: '2', message: "How are you mane", user: {id: "2", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", username: "zenek"}},
        {id: '3', message: "Miss it dsfsonsdonf onsnsn sonnfosn solfnonfons olsnfnsolnf sfnsnfsn ns nsfnsnf sn nfnsn sfn lnsf nsn slnfsn nsnfls lsn nfs ns nfsn", user: {id: "3", avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d", username: "ola"}},
        {id: '4', message: "Lorem ipsum", user: { id: "4", avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c", username: 'grzybu'}},
        {id: '5', message: "How many fingers horses have?", user: {id: "5", avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d", username: "dupa"}},
        {id: '6', message: "goood", user: {id: "6", avatar: "https://i.pravatar.cc/300?u=a042581f4f29026707d", username: 'hihi'}}
    ]

    const visibilityIcon = (
        <Tooltip 
            content={
                `${messagesVisible ? 
                    t("messages.savedMessagesPanel.messagesVisibilityTrue") 
                    : 
                    t("messages.savedMessagesPanel.messagesVisibilityFalse")}`}
            placement="top"
            size="sm"
            color="foreground"
            closeDelay={0}
        >
        <button onClick={() => setMessagesVisible(!messagesVisible)}>
            {messagesVisible ? (
                <Eye width={"15px"} height={"15px"} color={"rgb(200,200,200)"}/>
            ) : (
                <EyeOff width={"15px"} height={"15px"} color={"rgb(200,200,200)"}/>
            )}               
                
        </button>
        </Tooltip>
    )
    return (
        <Panel
            title={t('messages.savedMessagesPanelTitle')}
            titleIcon={<Bookmark width="15px" height="15px" color="rgb(200,200,200)"/>}
            endContent={visibilityIcon}
        >
            <div className="w-full px-1 overflow-y-scroll scrollbar-hide h-60">
                {savedMessages.map((item: LastMessage ) => {
                    return (
                        <Button 
                            className={`items-center justify-between mt-1 flex flex-row w-full gap-2 duration-300 h-auto px-4 py-1 rounded-md cursor-pointer bg-black/20  ${messagesVisible ? "hover:bg-white/10" : "blur-sm"}`}
                            key={item.id}
                            disabled={!messagesVisible}
                        >
                            <MessageItem {...item} showAvatar={false}/>
                        </Button>
                    )
                })}
            </div>
        </Panel>
    )

}