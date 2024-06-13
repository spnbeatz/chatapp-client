export interface NotifyData {
    avatarUrl: string,
    notifyType: string,
    sourceUser: string,
    prop: string
}

export interface NotifyProps {
    notifyProps: NotifyData
}