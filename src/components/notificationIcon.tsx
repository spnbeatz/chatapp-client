import React from "react";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import { Notifications } from "react-ionicons";
import { notifyExampleData } from "@/config/notifyData";
import { NotificationItem } from "./notificationItem";
import { NotifyData } from "./notifyInterface";

export const NotificationIcon: React.FC = () => {
    return (
        <div className="flex items-center gap-4">
            <Dropdown placement="bottom" className="w-96">
                <DropdownTrigger>
                    <div className="cursor-pointer">
                        <Notifications width="22px" height="22px" color="white"/>
                    </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    {notifyExampleData.map((item: NotifyData, index: number) => {
                        return (
                            <DropdownItem key={index} className="gap-2 py-2 px-4">
                                <NotificationItem notifyProps={item} />
                            </DropdownItem>
                        )
                    })}


                </DropdownMenu>
            </Dropdown>
        </div>

    )
}