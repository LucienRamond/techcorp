import type { ToolsType } from "@/utils/types/tools";
import type { ColumnDef } from "@tanstack/react-table";
import {
  BriefcaseBusinessIcon,
  DramaIcon,
  EyeIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  NotebookPenIcon,
  PaletteIcon,
  PencilLineIcon,
  Trash2Icon,
  ZapIcon,
  ArrowUpDownIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns: ColumnDef<ToolsType>[] = [
  {
    accessorKey: "name",
    header: "Tool",
    cell: ({ row }) => {
      const name: string = row.getValue("name");
      const department = row.getValue("owner_department");
      const icon = () => {
        switch (department) {
          case "Communication":
            return <MessageCircleIcon />;
          case "Design":
            return <PaletteIcon />;
          case "Engineering":
            return <ZapIcon />;
          case "Operations":
            return <NotebookPenIcon />;
          case "Marketing":
            return <DramaIcon />;
          case "Sales":
            return <BriefcaseBusinessIcon />;
        }
      };
      return (
        <div className=" flex gap-4">
          <div>{icon()}</div>
          <div className=" text-foreground">{name}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "owner_department",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Department
          <ArrowUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "active_users_count",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Users
          <ArrowUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "monthly_cost",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Monthly Cost
          <ArrowUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const cost: string = row.getValue("monthly_cost");
      const formatted_cost = parseInt(cost).toLocaleString("en", {
        currency: "EUR",
      });
      return <div>{formatted_cost != "NaN" ? `€${formatted_cost}` : ""}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status: string = row.getValue("status");
      return (
        <div className=" flex">
          <div
            className={`${status == "active" && "bg-green-gradient"} 
                        ${status == "expiring" && "bg-orange-gradient"} 
                        ${status == "unused" && "bg-red-600"} 
                        rounded-xl w-fit px-2 text-white capitalize`}
          >
            {status}
          </div>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className=" p-2 cursor-pointer">
              <EyeIcon />
              View
            </DropdownMenuItem>
            <DropdownMenuItem className=" p-2 cursor-pointer">
              <PencilLineIcon />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className=" p-2 cursor-pointer">
              <Trash2Icon />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
