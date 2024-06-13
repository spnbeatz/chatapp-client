import React from "react";
import { Badge } from "@nextui-org/badge";
import { Avatar } from "@nextui-org/avatar";
import { LastMessageUser } from "./Conversation/interface";

export const AvatarBadge: React.FC<LastMessageUser> = ({id, username, avatar, size}) => {
    return (
        <Badge 
            content="" 
            color="success" 
            shape="circle" 
            placement="bottom-right" 
            
            key={id}
        >
            <Avatar 
                isBordered
                src={avatar} 
                className="cursor-pointer"
                style={{
                    height: size ? `${size}px` : "",
                    width: size ? `${size}px` : ""
                }}
            />
        </Badge>
    )
}