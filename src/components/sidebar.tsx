import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { useTheme } from "@/hooks/use-theme";
import { Power } from 'react-ionicons'

import { Button } from "@nextui-org/button";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";
import { SidebarRoute } from "./sidebarRoute";
import ActiveRouteImage from '@/assets/active-route-fixed.png';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { SidebarProfile } from "./sidebarProfile";

export const SideBar: React.FC = () => {


    const activePosition = useSelector((state: RootState) => state.routePosition.position);

    return (
        <div className="h-full">
            <div 
                className={`h-5/6 w-24 flex flex-col justify-between items-center bg-slate-800 duration-300 py-8 px-2 overflow-hidden rounded-half-full`}

            >
                <img src={ActiveRouteImage} className={`active-route`} style={{transform: `translateY(${activePosition}%)`}}/>
                <section className="w-full items-center flex flex-col gap-2 relative">
                    {siteConfig.navItems.map((item, index) => {
                        return <SidebarRoute label={item.label} url={item.href} id={index} key={index}/>
                    })}
                </section>
                <section className={`w-full flex gap-10 flex-col items-center`}>
                    <SidebarProfile />
                    <Button className="bg-transparent h-14">
                        <Power
                            color={"white"}
                            width="20px"
                            height={"20px"}
                            
                        />
                    </Button>

                </section>
            </div>
        </div>

    )
}