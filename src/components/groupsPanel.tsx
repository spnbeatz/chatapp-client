import React, {useState} from "react";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "./icons";
import { Chatbubbles,MailUnread, Mail } from "react-ionicons";
import { Tooltip } from "@nextui-org/tooltip";
import { AddNewFriend } from "./addNewFriend";
import { useTranslation } from "react-i18next";
import { Panel } from "./panel";
import {People} from "react-ionicons";
import { SearchInput } from "./searchInput";

export const GroupsPanel:React.FC = () => {

    const { t } = useTranslation();

    return (
      <Panel
        className="h-1/3 pb-2"
        titleIcon={<People width="15px" height="15px" color="rgb(200,200,200)"/>}
        title={t('messages.groupsPanelTitle')}
      >
        <>
          <div className="flex flex-row items-center justify-between px-2">
            <SearchInput />
          </div>
          <div className="w-full px-1 overflow-y-scroll scrollbar-hide">

          </div>
        </>
      </Panel>

    )
}