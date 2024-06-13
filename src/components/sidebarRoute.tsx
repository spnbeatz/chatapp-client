import React, {useState, useEffect} from "react";
import { People } from 'react-ionicons'
import { Ban } from 'react-ionicons'
import { ChatboxEllipses } from 'react-ionicons'
import ActiveRouteImage from '@/assets/active-route-fixed.png';
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setRoutePosition } from "@/redux/routePositionReducer";
import {Settings} from "react-ionicons";

interface RouteProps {
    label: string,
    url: string,
    id: number,
}

export const SidebarRoute: React.FC<RouteProps> = ({label, url, id}) => {

    const dispatch: AppDispatch = useDispatch();

    const [ routeActive, setRouteActive ] = useState<boolean>(false);

    const countActivePosition = () => {

        const position = id * 51;
        dispatch(setRoutePosition({position: position}))
        

    }

    useEffect(()=>{
        const path = location.pathname;
        setRouteActive(path == url ? true : false);
        if(path == url) countActivePosition();
    },[location]);

    const routeIcon = (route: string, color: string) => {
        switch(route){
            case "Messages":
                return (
                    <ChatboxEllipses
                        color={color} 
                        height="24px"
                        width="24px"
                    />
                )
            case "Friends":
                return (
                    <People
                        color={color} 
                        height="24px"
                        width="24px"
                    /> 
                )
            case "Settings":
                return (
                    <Settings
                        color={color} 
                        height="24px"
                        width="24px"
                    />
                )
            default:
                return (
                    <Ban
                        color={color} 
                        height="24px"
                        width="24px"
                    /> 
                )
        }
    }

    return (
        <div>
            <a 
                href={url}
                className="flex items-center relative">
                <div className={`flex flex-row items-center rounded-full p-2 relative z-10`} >
                    {routeIcon(label, routeActive ? "rgb(30, 41, 59)" : "white")}
                </div>
                
    {/*             {routeActive && (
                    <>
                        <span className="absolute duration-200 curved-corner-bottomright bottom-10 left-5 before:duration-500"></span>
                        <span className="absolute duration-200 curved-corner-topright top-10 left-5 before:duration-500"></span>
                        <span className="absolute duration-200 w-14 h-10 left-4 bg-white before:duration-500"></span>
                    </>
                    <>
                    <img src={ActiveRouteImage} className="active-route"/>
                    </>


                )} */}
            </a>
        </div>

    )
}