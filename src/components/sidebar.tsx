import React from "react";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Badge } from "@nextui-org/badge";
import {Tooltip} from "@nextui-org/tooltip";
import { useTranslation } from "react-i18next";
import { LogoWebComponent } from "react-ionicons";
import { SidebarProfile } from "./sidebarProfile";

export const SideBar: React.FC = () => {

    const { t } = useTranslation();

    const avatars = [
        "https://i.pravatar.cc/150?u=a04258a2462d826712d",
        "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        "https://i.pravatar.cc/150?u=a04258114e29026302d",
        "https://i.pravatar.cc/150?u=a04258114e29026708c",
        "https://i.pravatar.cc/150?u=a04258114e29026702d",
        "https://i.pravatar.cc/300?u=a042581f4f29026707d"
    ]

    return (
        <div className="overflow-hidden items-center w-20 pt-5 pb-5 h-full flex flex-col gap-4 bg-black shadow-medium justify-between">
            <LogoWebComponent width={"40px"} height={"40px"} color={"white"}/>
            <AvatarGroup 
                
                max={6} 
                className="flex ml-2 mt-3 w-full flex-col h-4/5 justify-start items-center gap-6 pb-8 pt-8 overflow-y-scroll overflow-x-hidden scrollbar-hide"
                
                >
                
                {avatars.map((item, index) => {
                    return (
                        <Badge content="" color="success" size="sm" shape="circle" placement="bottom-left" key={index}>
                            <Tooltip 
                                showArrow content="username" 
                                className="text-xs text-slate-600 bg-white" 
                                size="sm" 
                                placement="top-start"
                                offset={12}
                                shadow="lg"
                                closeDelay={0}
                            >
                                <Avatar 
                                    src={item} 
                                    className="cursor-pointer"
                                    classNames={{
                                        base: "data-[hover=true]:translate-x-0 data-[hover=true]:scale-110",
                                        
                                    }}
                                />
                            </Tooltip>

                        </Badge>
                    )
                })}

                
            </AvatarGroup>
            <SidebarProfile/>
        </div>
    )
}