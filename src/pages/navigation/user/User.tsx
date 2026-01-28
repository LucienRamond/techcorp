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
        <DropdownMenuContent className="px-4 -translate-x-2 translate-y-2">
          <DropdownMenuGroup>
            <DropdownMenuLabel className=" text-muted-foreground text-xl sm:text-lg xl:text-sm">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuItem className=" text-xl sm:text-lg xl:text-sm">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className=" text-xl sm:text-lg xl:text-sm">
              Settings
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
