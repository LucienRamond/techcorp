import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ToolsType } from "@/utils/types/tools";
import {
  EuroIcon,
  EyeIcon,
  MoreHorizontalIcon,
  PencilLineIcon,
  Trash2Icon,
  UsersIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Status from "./Status";
import { displayIcon } from "./icon/DisplayIcon";
import Icon from "./icon/Icon";

export default function ToolCard({ tool }: { tool: ToolsType }) {
  const last_update = new Date(tool.updated_at);
  return (
    <Card className=" bg-muted/15 shadow-xl hover:border-muted-foreground hover:bg-muted/50 duration-300 ease-in-out">
      <CardHeader>
        <CardTitle className=" flex gap-4 items-center">
          <div>{displayIcon(tool.icon_url, tool.owner_department)}</div>
          <div>{tool.name}</div>
          <Status status={tool.status} />
        </CardTitle>
        <CardDescription>{tool.description}</CardDescription>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 bg-muted cursor-pointer"
              >
                <span className="sr-only">Open menu</span>
                <MoreHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className=" p-2 cursor-pointer text-lg">
                <EyeIcon />
                View
              </DropdownMenuItem>
              <DropdownMenuItem className=" p-2 cursor-pointer text-lg">
                <PencilLineIcon />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className=" p-2 cursor-pointer text-lg">
                <Trash2Icon />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <CardContent className=" grid grid-cols-2 gap-2 items-center">
        <ul className="grid gap-1 font-bold text-2xl ">
          <li className=" flex">
            <EuroIcon
              className="mr-2 bg-orange-gradient rounded p-1"
              size={"1.8rem"}
            />
            <div>
              €
              {tool.monthly_cost
                ? tool.monthly_cost.toLocaleString("en", {
                    currency: "EUR",
                  })
                : 0}
            </div>
            <div className=" text-muted-foreground">/month</div>
          </li>
          <li className="flex gap-2 items-center">
            <UsersIcon
              className=" bg-blue-gradient rounded p-1"
              size={"1.8rem"}
            />
            <div>{tool.active_users_count ? tool.active_users_count : 0}</div>
            <div className=" text-muted-foreground">active users</div>
          </li>
          <li className=" flex gap-2">
            <Icon department={tool.owner_department} />
            <div>{tool.owner_department}</div>
            <div className=" text-muted-foreground">department</div>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <div className=" flex gap-2 italic">
          <p className=" text-muted-foreground">Updated on </p>
          <p>
            {last_update &&
              last_update.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
              })}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
