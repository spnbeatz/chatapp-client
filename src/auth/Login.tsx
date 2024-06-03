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
import { AuthProps } from "./interface";

export const Login: React.FC<AuthProps> = ({switchScreen}) => {
    return (
        <div className="flex flex-col justify-center align-middle lg:w-1/3 md:w-1/2 sm:w-full h-full">
            <form className="flex flex-col justify-center self-center sm:w-full w-full gap-4 p-16 bg-white dark:bg-neutral-900 rounded-md shadow-lg">
                <div className="flex flex-col items-baseline">
                    <h2 className="text-3xl dark:text-white">Log In.</h2>
                    <p className="text-xs dark:text-white">And enjoy chat with your friends!</p>
                </div>
                <Input 
                    type="email"
                    label="E-mail"
                    color="default"
                    variant="flat"
                    size="sm"
                    className="shadow-md"
                    /* classNames={styles.input} */    
                />
                <Input 
                    type="password"
                    label="Password"
                    color="default"
                    variant="flat"
                    size="sm"
                    className="shadow-md"
                    /* classNames={styles.input} */    
                />
                <Button color="default" variant="solid" className="text-white/70 shadow-md font-medium dark:bg-neutral-950 bg-neutral-600 text-sm py-7" size="lg">Log In</Button>
                <div className="text-xs flex flex-row gap-1 dark:text-white">
                    <p>Dont't have an account?</p>
                    <Link onClick={switchScreen}>
                        <p className="text-xs cursor-pointer">Register!</p>
                    </Link>
                </div>
            </form>

        </div>
    )
}