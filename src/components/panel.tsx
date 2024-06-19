import React from "react";

interface PanelProps {
    children: React.ReactNode;
    endContent?: React.ReactNode;
    titleIcon?: React.ReactNode;
    title?: string | React.ReactNode,
    className?: string,
    height?: string
}

export const Panel: React.FC<PanelProps> = ({children, endContent, titleIcon, title, className, height}) => {
    return (
        <div 
            className={`overflow-hidden shadow-medium flex flex-col blurred-black mt-4 rounded-md gap-2 w-full ${className}`}
            style={{height}}
            >
            {title && <div className="flex flex-row justify-between items-center w-full h-8 px-4">
                <div className="flex flex-row justify-center items-center gap-2">
                    {titleIcon}
                    <p className="text-gray-300 text-smfont-semibold pink-gradient">
                        {title}
                    </p>
                </div>
                <div className="flex flex-row justify-center items center gap-3 h-full py-2">
                    {endContent}
                </div>

            </div>}
            {children}
        </div>
    )
}