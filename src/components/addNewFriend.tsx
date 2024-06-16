import React, { useState, useRef, useEffect } from "react";
import { PersonAdd } from "react-ionicons";
import { useTranslation } from "react-i18next";

export const AddNewFriend: React.FC = () => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const inputContainerRef = useRef<HTMLInputElement | null>(null);
  const { t } = useTranslation();

  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      inputContainerRef.current &&
      !inputContainerRef.current.contains(event.target as Node)
    ) {
      setOpenForm(false);
    }
  };

  useEffect(() => {
    if (openForm) {
      document.addEventListener("click", handleClickOutside, true);
    } else {
      document.removeEventListener("click", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [openForm]);

  return (
    <div
      ref={inputContainerRef}
      className={`${
        openForm ? "w-40 duration-300" : "w-4 duration-0"
      } flex flex-row items-center rounded-md overflow-hidden`}
    >
      <input
        type="text"
        ref={inputContainerRef}
        className={`w-full delay-300 duration-250 focus:outline-none h-full px-3 bg-transparent text-gray-300 text-xs focus:border-black placeholder:text-xs ${
          openForm ? "opacity-100" : "opacity-0 hidden"
        }`}
        placeholder={t('messages.friendsPanel.addFriendPlaceholder')}
      />
      <button onClick={handleOpenForm}>
        <PersonAdd width={"15px"} height={"15px"} color={"rgb(200,200,200)"} />
      </button>
    </div>
  );
};

export default AddNewFriend;
