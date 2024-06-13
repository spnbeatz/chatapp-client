import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import {User} from "@nextui-org/user";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";
import { LogoWebComponent, Notifications } from "react-ionicons";
import {NotificationIcon} from "./notificationIcon";
import { useTranslation } from "react-i18next";

export const Navbar = () => {

  const { t } = useTranslation();

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100 rounded-full",
        input: "text-sm",
        base: "w-full"
      }}
      
      labelPlacement="outside"
      placeholder={t('navbar.searchInputPlaceholder')}
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );


  return (
    <NextUINavbar maxWidth="full" position="sticky" className="bg-slate-800 h-24">
      <NavbarContent
        className="w-screen"
        justify="center"
        
      >
        <NavbarItem className="absolute left-8 flex flex-row items-center gap-1">
          <LogoWebComponent width="30px" height="30px" color="white"/>
          <p className="text-white text-2xl font-bold">CHAT .</p>
        </NavbarItem>
        <NavbarItem className="hidden flex flex-row items-center gap-4 absolute right-5">
          <NotificationIcon />
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex w-2/5">{searchInput}</NavbarItem>
      </NavbarContent>


      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        
        <ThemeSwitch />
        <NavbarMenuToggle />
        
      </NavbarContent>
      
      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        
      </NavbarMenu>
      
    </NextUINavbar>
  );
};
