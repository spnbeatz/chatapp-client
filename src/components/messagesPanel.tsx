import React, {useState} from "react";
import { ConversationListItem } from "./Conversation/conversationListItem";
import { LastMessage } from "./Conversation/interface";
import { Button } from "@nextui-org/button";
import { useTranslation } from "react-i18next";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "./icons";
import { PersonAdd, Chatbubbles,MailUnread, Mail } from "react-ionicons";
import { Tooltip } from "@nextui-org/tooltip";
import { AddNewFriend } from "./addNewFriend";

export const MessagesPanel = ({setPickedMessage}: {setPickedMessage: React.Dispatch<React.SetStateAction<string>>}) => {

    const { t } = useTranslation();
    
    const messages: LastMessage[] = [
        {id: '1', message: "Hello dfsfsf sf sf sf sfsdf sdfsdf sdfsdffs fsdfs fsfsdfsfsfsfs fs", user: {id: "1", avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d", username: "patryk"}},
        {id: '2', message: "How are you mane", user: {id: "2", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", username: "zenek"}},
        {id: '3', message: "Miss it dsfsonsdonf onsnsn sonnfosn solfnonfons olsnfnsolnf sfnsnfsn ns nsfnsnf sn nfnsn sfn lnsf nsn slnfsn nsnfls lsn nfs ns nfsn", user: {id: "3", avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d", username: "ola"}},
        {id: '4', message: "Lorem ipsum", user: { id: "4", avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c", username: 'grzybu'}},
        {id: '5', message: "How many fingers horses have?", user: {id: "5", avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d", username: "dupa"}},
        {id: '6', message: "goood", user: {id: "6", avatar: "https://i.pravatar.cc/300?u=a042581f4f29026707d", username: 'hihi'}}
    ]

    const [ allMailsRead, setMailsRead ] = useState<boolean>(false);


    const searchInput = (
        <Input
          aria-label="Search"
          classNames={{
            inputWrapper: "blurred-black-darker rounded-md hover:blurred-black-lighter dark:hover:blurred-black-lighters",
            input: "text-sm ",
            base: "w-full"
          }}
          
          labelPlacement="outside"
          placeholder={t('navbar.searchInputPlaceholder')}
          startContent={
            <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
          }

          type="search"
        />
      );

    return (
        <div className="w-1/5 overflow-hidden shadow-medium flex flex-col pb-4 blurred-black h-1/2 mt-4 rounded-md gap-2">
            <div className="flex flex-row justify-between items-center w-full h-10 px-4 bg-black">
                <div className="flex flex-row justify-center items-center gap-2">
                    <Chatbubbles width={"15px"} height={"15px"} color={"rgb(200,200,200)"}/>
                    <p className="text-gray-300 text-smfont-semibold pink-gradient">
                        {t('messages.messagesPanelTitle')}
                    </p>
                </div>
                <div className="flex flex-row justify-center items center gap-3 h-full py-2">
                    <AddNewFriend />
                    <Tooltip 
                        content={
                            `${allMailsRead ? 
                                t("messages.messagesPanel.messagesReadTrueTooltip") 
                                : 
                                t("messages.messagesPanel.messagesReadFalseTooltip")}`}
                        placement="right"
                        size="sm"
                        color="foreground"
                        closeDelay={0}
                    >
                    <button onClick={() => setMailsRead(!allMailsRead)}>
                        {allMailsRead ? (
                            <Mail width={"15px"} height={"15px"} color={"rgb(200,200,200)"}/>
                        ) : (
                            <MailUnread width={"15px"} height={"15px"} color={"rgb(200,200,200)"}/>
                        )}               
                            
                    </button>
                    </Tooltip>
                </div>

            </div>

            <div className="flex flex-row items-center justify-between px-2">
                {searchInput}
            </div>
            <div className="w-full px-1 overflow-y-scroll scrollbar-hide">
                {messages.map((item: LastMessage) => {
                    return (
                        <Button 
                            className="items-center justify-between flex flex-row w-full gap-2 duration-300 bg-transparent h-auto p-2 rounded-md cursor-pointer conv-list-item"
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