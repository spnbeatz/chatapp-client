import React, { useState } from "react";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import {Badge} from "@nextui-org/badge";
import { Avatar } from "@nextui-org/avatar";
import { StatusProps, status } from "@/config/status";
import {Divider} from "@nextui-org/divider";
import { useTranslation } from "react-i18next";

export const SidebarProfile: React.FC = () => {

    const {t} = useTranslation();
    const [ statusValue, setStatus ] = useState<string>("success");

    const changeStatus = (value: React.Key) => {
        console.log("status")
        setStatus(value.toString());
    }

    return (
        <Dropdown placement="right-start" className="ml-2">
            <Badge content="" className={`bg-${statusValue}`} shape="circle" placement="bottom-right">
                <DropdownTrigger>
                    
                        <Avatar radius="full" name="spnbeatz" isBordered className="cursor-pointer"/>
                    
                </DropdownTrigger>
            </Badge>
            <DropdownMenu 
                aria-label="Profile Actions" 
                variant="flat" onAction={(key) => changeStatus(key)}
                topContent={(
                    <div className="w-full px-2">
                        <div className="text-slate-700 text-base">{t('navbar.status.title')}</div>
                        <Divider className="mt-2"/>
                    </div>
                    )}
                >
                {status.map((item: StatusProps) => {
                    return (
                        <DropdownItem 
                            className="cursor-pointer"
                            textValue={t('cześć')}
                            key={item.color} 
                            startContent={<div className={`w-3 h-3 rounded-full bg-${item.color}`}/>}

                        >
                            {t(item.label)}
                        </DropdownItem>
                    )
                })}

            </DropdownMenu>
        </Dropdown>
    )
}