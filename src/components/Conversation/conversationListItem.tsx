import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";
import { ConversationItem, LastMessage } from "./interface";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import { formatDate } from "@/helpers/formatDate";
import { Button } from "@nextui-org/button";
import { AvatarBadge } from "../avatarBadge";



export const ConversationListItem:React.FC<LastMessage> = ({id, message, user}) => {

    return (
/*         <div className="items-center justify-between flex flex-row w-full gap-2 duration-300 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 h-16 p-2 rounded-md hover:shadow-black cursor-pointer"> */
        <div>

            <div className="flex flex-row items-center justify-start gap-2">
                <AvatarBadge {...user} />
                <div className="flex flex-col items-start justify-center">
                    <p className="text-black dark:text-gray-400 text-sm font-semibold">{user.username}</p>
                    <p className="text-gray-700 dark:text-gray-200 text-xs">{message.length > 15 ? message.slice(0, 15) + "..." : message} {/* {formatDate(lastMessageProps.timescamp, "chat")} */}</p>
                </div>
            </div>
            <p className="text-gray-500 text-tiny"></p>

        </div>
/*         </div> */
    )
}