import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";
import { ConversationItem, LastMessage } from "./Conversation/interface";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import { formatDate } from "@/helpers/formatDate";
import { Button } from "@nextui-org/button";
import { AvatarBadge } from "./avatarBadge";



export const MessageItem:React.FC<LastMessage> = ({id, message, user, showAvatar = true}) => {

    return (

        <div>

            <div className="flex flex-row items-start justify-start gap-4 py-2">
                {showAvatar && <AvatarBadge {...user} />}
                <div className="flex flex-col items-start justify-start">
                    <p className="dark:text-gray-300 text-gray-300 text-sm font-semibold">{user.username}</p>
                    <p className="text-gray-300 dark:text-gray-200 text-xs break-words whitespace-break-spaces text-start">{message}</p>
                    <p className="text-xs text-gray-300">{formatDate("2024-06-14T12:34:56", "chat")}</p>
                </div>
            </div>
            <p className="text-gray-500 text-tiny"></p>

        </div>

    )
}