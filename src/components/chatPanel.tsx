import React, {useEffect, useState} from "react";
import { AvatarBadge } from "./avatarBadge";
import { Call, Videocam, Settings, Mic, Images, Gift, Heart, CloseCircle } from "react-ionicons";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Tooltip } from "@nextui-org/tooltip";
import { useTranslation } from "react-i18next";
import { iconStylesInMessagesForm } from "@/styles/iconStyles";
import { ImageInputButton } from "./imageInput";
import {Image} from "@nextui-org/image";


export const ChatPanel = ({message}: {message: string}) => {

    const { t } = useTranslation();

    const [ selectedImage, setSelectedImage ] = useState<File | null>(null);
    const [ imagePreview, setImagePreview ] = useState<string | null>(null);

    const getFile = (file: File | null) => {
        setSelectedImage(file);
    }

    const messageInput = (
        <Input
          aria-label="Search"
          classNames={{
            inputWrapper: "flex items-center bg-slate-100 h-12 rounded-full data-[hover=true]:bg-slate-200",
            input: "text-sm",
            base: "",
          }}
          
          labelPlacement="outside"
          placeholder={t('messages.chatPanel.inputPlaceholder')}

/*           startContent={
            <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
          } */
          type="text"
        />
    );

    useEffect(() => {
        if (selectedImage) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const dataURL = event.target?.result as string;
                    setImagePreview(dataURL);
                };
                reader.readAsDataURL(selectedImage);
            } else {
                setImagePreview(null);
            }
    }, [selectedImage]);

    const cleanImagePreview = () => {
        setImagePreview(null);
        setSelectedImage(null);
    }

    const exampleUser = {id: "1", avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d", username: "patryk"}

    return (
        <div className="w-full rounded-md overflow-hidden shadow-medium flex flex-col h-full">
            <div className="flex flex-row w-full justify-between px-5 items-center bg-slate-800 py-4">
                <div className="flex flex-row justify-center items-center gap-4">
                    <AvatarBadge {...exampleUser} size={20}/>
                    <p className="text-white text-sm font-normal cursor-pointer hover:underline">
                        {exampleUser.username}
                    </p>
                </div>
                <div className="flex flex-row justify-center items-center gap-4">
                    <div className="hover:scale-125 duration-250">
                        <Call width={"20px"} height={"20px"} color="white"/>
                    </div>
                    <div className="hover:scale-125 duration-250">
                        <Videocam width={"20px"} height={"20px"} color="white"/>
                    </div>
                    <div className="hover:scale-125 duration-250">
                        <Settings width={"20px"} height={"20px"} color="white"/>
                    </div>

                    
                    
                </div>
            </div>
            <div 
                className="flex flex-col justify-between items-center h-full relative"
                
            >
                <div className="flex flex-col-reverse justify-start items-center h-full w-full overflow-y-scroll">

                </div>
                {imagePreview && (
                    <div className="flex flex-row justify-start items-center w-full px-4 absolute bottom-20">
                        <div className="rounded-md shadow-md overflow-hidden relative">
                            <div 
                                className="absolute top-1 right-1 p-1 hover:scale-125 duration-250"
                                style={{
                                    zIndex: 100
                                }}
                                onClick={() => cleanImagePreview()}
                            >
                                <CloseCircle width={"18px"} height={"18px"} color="red"/>
                            </div>
                            <Image
                                width={250}
                                height={250}
                                alt="NextUI hero Image with delay"
                                src={imagePreview}
                            />

                        </div>

                    </div>

                    )
                }
                <form className="flex flex-row justify-between w-full px-4 gap-3 items-center py-2">
                    <div className="flex flex-row justify-center items-center gap-3">
                        <Tooltip content={t('messages.chatPanel.recordMessageTooltip')}>
                            <button className="bg-transparent hover:scale-125 duration-250" type="button">      
                                    <Mic {...iconStylesInMessagesForm}/>
                            </button>
                        </Tooltip>
                        <ImageInputButton onFileChange={getFile}/>
                        <Tooltip content={t('messages.chatPanel.sendGiftTooltip')}>
                            <button className="bg-transparent hover:scale-125 duration-250" type="button">
                                    <Gift {...iconStylesInMessagesForm} />
                            </button>
                        </Tooltip>
                    </div>
                    {messageInput}
                    <Tooltip content={t('messages.chatPanel.likeTooltip')}>
                        <button className="bg-transparent hover:scale-125 duration-250" type="button">         
                                <Heart width="25px" height="25px" color={"red"} />
                        </button>
                    </Tooltip>

                </form>

            </div>
        </div>
    )
}