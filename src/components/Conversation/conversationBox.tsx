import React from "react"

export const ConversationBox = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex flex-column h-full w-14 hover:w-52 overflow-hidden duration-300 items-left justify-start">
            {children}
        </div>
    )
}