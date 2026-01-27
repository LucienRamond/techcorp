import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "../../components/ui/navigation-menu-trigger-style";
import { ZapIcon } from "lucide-react";
import ToggleTheme from "@/components/custom/ToggleTheme";
import SearchBar from "./searchbar/SearchBar";
import Notifications from "./notifications/Notifications";
import User from "./user/User";

export default function Navbar() {
  return (
    <NavigationMenu className=" min-w-full *:w-full">
      <NavigationMenuList className=" flex border-b p-4 items-stretch text-gray-500">
        <NavigationMenuItem className=" px-4">
          <div className=" flex items-center gap-3">
            <ZapIcon
              size={"2rem"}
              color="white"
              className=" bg-purple-gradient p-1 rounded-md"
            />
            <div className=" text-xl text-foreground font-semibold">
              TechCorp
            </div>
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()}`}
          >
            <Link to={"/"}>Dashboard</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()}`}
          >
            <Link to={"/tools"}>Tools</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()}`}
          >
            <Link to={"/analytics"}>Analytics</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()}`}
          >
            <Link to={"/settings"}>Settings</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <div className=" ml-auto flex gap-1 items-center">
          <SearchBar />
          <ToggleTheme />
          <Notifications />
          <User />
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
