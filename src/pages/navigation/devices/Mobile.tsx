import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../components/ui/navigation-menu";
import { MenuIcon, ZapIcon } from "lucide-react";
import ToggleTheme from "@/components/custom/ToggleTheme";
import SearchBar from "../searchbar/SearchBar";
import Notifications from "../notifications/Notifications";
import User from "../user/User";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Mobile() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="w-full border-b">
      <div className=" flex gap-4 justify-between w-full p-2">
        <Button variant={"outline"} onClick={() => setOpen(!open)}>
          <span className="sr-only">Open menu</span>
          <MenuIcon color="var(--foreground)" />
        </Button>
        <div className=" flex items-center gap-3">
          <ZapIcon
            size={"2rem"}
            color="white"
            className=" bg-purple-gradient p-1 rounded-md"
          />
          <div className=" text-xl text-foreground font-semibold">TechCorp</div>
        </div>
        <div className="  flex gap-1 items-center">
          <ToggleTheme />
          <Notifications />
          <User />
        </div>
      </div>

      {open && (
        <NavigationMenu className=" absolute bg-background *:w-screen">
          <NavigationMenuList className="  grid justify-stretch  p-2 text-gray-500 w-full border-y">
            <SearchBar />
            <NavigationMenuItem className=" mt-4">
              <NavigationMenuLink asChild>
                <Link
                  to={"/"}
                  className=" text-center text-xl!"
                  onClick={() => setOpen(!open)}
                >
                  Dashboard
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to={"/tools"}
                  className=" text-center text-xl!"
                  onClick={() => setOpen(!open)}
                >
                  Tools
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to={"/analytics"}
                  className=" text-center text-xl!"
                  onClick={() => setOpen(!open)}
                >
                  Analytics
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className=" mb-4">
              <NavigationMenuLink asChild>
                <Link
                  to={"/settings"}
                  className=" text-center text-xl!"
                  onClick={() => setOpen(!open)}
                >
                  Settings
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </div>
  );
}
