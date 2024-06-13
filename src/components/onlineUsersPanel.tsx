import React from "react";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Badge } from "@nextui-org/badge";
import {Tooltip} from "@nextui-org/tooltip";
import { useTranslation } from "react-i18next";

export const OnlineUsersPanel: React.FC = () => {

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
        <div className="w-full rounded-md overflow-hidden shadow-medium flex flex-col gap-4">
            <p className="text-white text-sm font-semibold px-6 py-4 bg-slate-800">
                {t('messages.onlinePanelTitle')}
            </p>
            <AvatarGroup isBordered max={6} className="flex w-full flex-row justify-start gap-6 pb-8 px-5 pt-8 overflow-x-scroll overflow-y-hidden">
                {avatars.map((item, index) => {
                    return (
                        <Badge content="" color="success" shape="circle" placement="bottom-left" key={index}>
                            <Tooltip 
                                showArrow content="username" 
                                className="text-xs text-slate-600 bg-white" 
                                size="sm" 
                                placement="top-start"
                                offset={12}
                                shadow="lg"
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
        </div>
    )
}