
export interface StatusProps {
    label: string,
    color: string
}

export interface Status {
    status: StatusProps
}

export const status: StatusProps[] = [
    {
        label: "navbar.status.online",
        color: "success"
    },
    {
        label: "navbar.status.brb",
        color: "warning"
    },
    {
        label: "navbar.status.disturb",
        color: "danger"
    },
    {
        label: "navbar.status.offline",
        color: "default"
    }
]