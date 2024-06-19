import React from "react";
import { SearchIcon } from "./icons";
import { Input } from "@nextui-org/input";
import { useTranslation } from "react-i18next";

export const SearchInput: React.FC = () => {

    const { t } = useTranslation();
    return (
        <Input
            aria-label="Search"
            classNames={{
            inputWrapper: "bg-black/35 rounded-md hover:blurred-black-lighter dark:hover:blurred-black-lighters",
            input: "text-sm ",
            base: "w-full"
            }}
            
            labelPlacement="outside"
            placeholder={t('navbar.searchInputPlaceholder')}
            startContent={
            <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }

            type="search"
      />
    )
}