import React from "react";
import { Panel } from "./panel";
import { Image } from "@nextui-org/image";

export const ProfilePanel: React.FC = () => {
    return (
        <Panel className="items-center overflow-visible">
            <div className="flex justify-center w-full items-center overflow-hidden rounded-md aspect-square">
                <Image
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: 'cover'
                    }}
                    isZoomed
                    isBlurred
                    removeWrapper={true}
                    alt="NextUI Fruit Image with Zoom"
                    src="https://as1.ftcdn.net/v2/jpg/06/01/11/10/1000_F_601111085_wmJaDhTkq5MNwWPX9c9eCzo6k9fgHrI9.jpg"
                />
            </div>
        </Panel>
    )
}