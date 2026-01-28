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
  EyeIcon,
  MoreHorizontalIcon,
  PencilLineIcon,
  Trash2Icon,
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

export default function ToolCard({ tool }: { tool: ToolsType }) {
  return (
    <Card>
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
              <Button variant="ghost" className="h-8 w-8 p-0">
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
        <ul>
          <li>{tool.monthly_cost}</li>
          <li>{tool.owner_department}</li>
          <li>{tool.active_users_count}</li>
        </ul>
      </CardContent>
      <CardFooter>
        <p>{tool.updated_at}</p>
      </CardFooter>
    </Card>
  );
}
