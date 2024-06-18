import React, { useState } from "react";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import {Badge} from "@nextui-org/badge";
import { Avatar } from "@nextui-org/avatar";
import { StatusProps, status } from "@/config/status";
import {Divider} from "@nextui-org/divider";
import { useTranslation } from "react-i18next";
import { Person, LogOut } from "react-ionicons";

export const SidebarProfile: React.FC = () => {

    const {t} = useTranslation();
    const [ statusValue, setStatus ] = useState<string>("success");

    const changeStatus = (value: React.Key) => {
        console.log("status")
        setStatus(value.toString());
    }

    return (
        <Dropdown placement="right-start" className="ml-2 bg-gray-900" type="listbox">
            <Badge content="" className={`bg-${statusValue}`} shape="circle" placement="bottom-right">
                <DropdownTrigger>
                
                    <Avatar radius="full" name="spnbeatz" isBordered className="cursor-pointer"/>    
                </DropdownTrigger>
            </Badge>
            <DropdownMenu 
                
                aria-label="Profile Actions" 
                variant="flat" onAction={(key) => changeStatus(key)}
                >
                    <DropdownSection title="Change status" showDivider classNames={{heading: "text-gray-200"}}>
                        {status.map((item: StatusProps) => {
                        return (
                            <DropdownItem 
                                closeOnSelect={false}
                                className="cursor-pointer text-gray-200"
                                textValue={t('cześć')}
                                key={item.color} 
                                startContent={<div className={`w-3 h-3 rounded-full bg-${item.color}`}/>}

                            >
                                {t(item.label)}
                            </DropdownItem>
                            )
                        })}
                    </DropdownSection>
                    <DropdownSection title="Profile Actions" classNames={{heading: "text-gray-200"}}>
                        <DropdownItem 
                            className="cursor-pointer text-gray-200"
                            startContent={<Person width="15px" height="15px" color={"white"}/>}
                            >
                            Show Profile
                        </DropdownItem>
                        <DropdownItem 
                            className="cursor-pointer text-gray-200"
                            startContent={<LogOut width="15px" height="15px" color={"white"}/>}
                            >
                            Log Out
                        </DropdownItem>
                    </DropdownSection>

            </DropdownMenu>
        </Dropdown>

    )
}