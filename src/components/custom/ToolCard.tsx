import type { ToolsType } from "@/utils/types/tools";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import {
  EyeIcon,
  MoreHorizontalIcon,
  PencilLineIcon,
  Trash2Icon,
} from "lucide-react";
import Status from "./Status";
import Icon from "./icon/Icon";
import placeholder from "./icon/placeholder.jpg";

export default function ToolCard({ tool }: { tool: ToolsType }) {
  const img_extension_regex: RegExp = /(?:\.([^.]+))?$/;

  const displayIcon = (icon_url: string, department: string) => {
    const extension = img_extension_regex.exec(icon_url);

    const img = (
      <img
        src={`${icon_url}`}
        className=" h-10 max-w-10 rounded-full border"
        alt={`Company logo`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = `${placeholder}`;
        }}
      />
    );

    if (extension) {
      switch (extension[1]) {
        case "png":
        case "ico":
        case "svg":
          return img;
        default:
          return <Icon department={department} />;
      }
    }
  };

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
