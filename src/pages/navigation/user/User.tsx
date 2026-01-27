import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AvatarImage } from "@radix-ui/react-avatar";
import { ChevronDownIcon } from "lucide-react";

export default function User() {
  return (
    <div className=" flex gap-2 items-center">
      <Avatar className=" ml-2">
        <AvatarImage src="" alt="User avatar" className="grayscale" />
        <AvatarFallback>TC</AvatarFallback>
      </Avatar>
      <DropdownMenu>
        <DropdownMenuTrigger className=" bg-none" asChild>
          <ChevronDownIcon size={"1rem"} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
