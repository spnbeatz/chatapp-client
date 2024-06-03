import React, { useState, useEffect } from "react";
import DefaultLayout from "@/layouts/default";
import "./style.css";
import "@/styles/globals.css";
import {Input} from "@nextui-org/input";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import {Button, ButtonGroup} from "@nextui-org/button";
import { Background } from "@/components/Background";
import { Link } from "@nextui-org/link";
import { ThemeSwitch } from "@/components/theme-switch";
import {Checkbox} from "@nextui-org/checkbox";
import { Register } from "./Register";
import { Login } from "./Login";



export const AuthScreen:React.FC = () => {

    const [loginScreen, setLoginScreen] = useState<boolean>(true);

    const switchScreen = () => {
        setLoginScreen(!loginScreen);
    }

    return (
            <div className="relative flex sm:flex-row flex-col justify-center w-screen h-screen bg-slate-200 dark:bg-neutral-950">
                <ThemeSwitch className="absolute right-4 top-2" />
                {loginScreen ? 
                <Login switchScreen={switchScreen}/>       
                :
                <Register switchScreen={switchScreen}/>
                }
            </div>

    )
}


