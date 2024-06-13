import React, { useRef } from "react";
import { Tooltip } from "@nextui-org/tooltip";
import { Input } from "@nextui-org/input";
import { Images } from "react-ionicons";
import { iconStylesInMessagesForm } from "@/styles/iconStyles";
import { useTranslation } from "react-i18next";

interface FileInputButtonProps {
    onFileChange: (file: File | null) => void;
}


export const ImageInputButton: React.FC<FileInputButtonProps> = ({onFileChange}) => {

    const { t } = useTranslation();

    const inputFileRef = useRef<HTMLInputElement>(null);

    const openFiles = () => {
        inputFileRef.current?.click();
    }

    const chooseFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
          const file = files[0];
          onFileChange(file);
        } else {
          onFileChange(null);
        }
    }

    return (
        <>
        <Tooltip content={t('messages.chatPanel.sendImageTooltip')}>
            <button className="bg-transparent hover:scale-125 duration-250" type="button" onClick={() => openFiles()}>     
                <Images {...iconStylesInMessagesForm} />      
            </button>
            
            
        </Tooltip>
        <Input type="file" accept="image/*" ref={inputFileRef} className="hidden" onChange={chooseFile}/>
        </>

    )
}