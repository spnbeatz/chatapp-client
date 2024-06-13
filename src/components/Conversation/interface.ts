interface LastMessageProps {
    username: string,
    message: string,
    timescamp: string
}

export interface ConversationItem {
    lastMessageProps: LastMessageProps
}

export interface LastMessageUser {
    id: string,
    avatar: string,
    username: string,
    size?: number
}

export interface LastMessage {
    id: string,
    message: string,
    user: LastMessageUser
}