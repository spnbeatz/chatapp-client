import React from "react";
import { Close } from "react-ionicons";
import { Avatar } from "@nextui-org/avatar";
import { NotifyProps } from "./notifyInterface";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";

export const NotificationItem: React.FC<NotifyProps> = ({notifyProps}) => {

    const getNotifyTextType = (type: string) => {
        switch(type){
            case "message":
                return (
                    <span className="word-break whitespace-normal">
                        <span>User </span>
                        <span className="font-semibold">{notifyProps.sourceUser} </span>
                        <span>sent you a message.</span>
                    </span>
                )
            case "groupInvite":
                return (
                    <span className="word-break whitespace-normal">
                        <span>User </span>
                        <span className="font-semibold">{notifyProps.sourceUser} </span>
                        <span>invites you to group </span>
                        <span className="font-semibold">{notifyProps.prop}.</span>
                    </span>
                )
            case "changeGroupName":
                return (
                    <span className="word-break whitespace-normal">
                        <span>Group </span>
                        <span className="font-semibold">{notifyProps.sourceUser} </span>
                        <span>have new name now: </span>
                        <span className="font-semibold">{notifyProps.prop}.</span>
                    </span>
                )
            default:
                return (
                    <span>Nothing</span>
                )
        }
    }

    return (
        <div className="flex flex-row justify-between items-center gap-5">
            <div className="flex flex-row items-center justify-center gap-4">
                <div className="w-10">
                    <Avatar src={notifyProps.avatarUrl} />
                </div>

                {getNotifyTextType(notifyProps.notifyType)}

            </div>
            <div className="flex justify-center items-center w-10 h-10">
                <Close width="15px" height="15px" color="red"/>
            </div>
        </div>
    )
}