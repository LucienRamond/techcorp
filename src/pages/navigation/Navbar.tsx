import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "../../components/ui/navigation-menu-trigger-style";
import { MoonIcon, ZapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className=" border-b w-screen justify-start p-4 text-gray-500">
        <NavigationMenuItem className=" px-4">
          <div className=" flex items-center gap-3">
            <ZapIcon
              size={"2rem"}
              color="white"
              className=" bg-purple-gradient p-1 rounded-md"
            />
            <div className=" text-xl text-black font-semibold">TechCorp</div>
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
        <NavigationMenuItem className=" ml-auto">
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()}`}
          >
            <Button>
              <MoonIcon />
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
