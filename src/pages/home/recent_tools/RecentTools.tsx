import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import type { ToolsType } from "@/utils/types/tools";
import {
  BriefcaseBusinessIcon,
  CalendarIcon,
  DramaIcon,
  EyeIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  NotebookPenIcon,
  PaletteIcon,
  PencilLineIcon,
  Trash2Icon,
  ZapIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { DataTable } from "../../../components/custom/tools_table/ToolsDataTable";
import { columns } from "../../../components/custom/tools_table/ToolsColumns";
import MediaQuery from "react-responsive";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Status from "@/components/custom/Status";

export default function RecentTools() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [tools, setTools] = useState<ToolsType[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/tools?_sort=updated_at&_order=desc&_limit=8`)
      .then((response) => response.json())
      .then((data) => setTools(data));
  }, [BASE_URL]);

  const icon = (department: string) => {
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
    <div className=" border rounded-xl bg-card grid gap-4 p-4">
      <div className=" flex justify-between">
        <div className=" sm:text-2xl font-semibold">Recent Tools</div>
        <div className=" flex gap-2 justify-items-center items-center">
          <CalendarIcon color="var(--muted-foreground)" size={"1rem"} />
          <div className=" text-muted-foreground">Last updated tools</div>
        </div>
      </div>
      <MediaQuery minWidth={1024}>
        <DataTable columns={columns} data={tools} />
      </MediaQuery>
      <MediaQuery maxWidth={1023}>
        <Accordion type="single">
          {tools.map((tool, index) => {
            return (
              <AccordionItem
                key={tool.id}
                value={tool.name}
                className={`${index % 2 != 0 && "bg-muted/10"} p-2 `}
              >
                <AccordionTrigger className=" sm:text-[16px]">
                  <div className=" grid grid-cols-[1fr_1fr_max-content] w-full">
                    <div className=" flex gap-2">
                      {icon(tool.owner_department)}
                      {tool.name}
                    </div>
                    <div>{tool.owner_department}</div>
                    <Status status={tool.status} />
                  </div>
                </AccordionTrigger>
                <AccordionContent className=" text-muted-foreground sm:text-[16px]">
                  <div className=" grid grid-cols-[1fr_1fr_max-content] items-center">
                    <div>Users : {tool.active_users_count}</div>
                    <div>
                      Monthly Cost : €
                      {tool.monthly_cost &&
                        tool.monthly_cost.toLocaleString("en", {
                          currency: "EUR",
                        })}
                    </div>
                    <MediaQuery minWidth={640}>
                      <div className=" flex gap-4">
                        <Button variant={"secondary"}>
                          <EyeIcon />
                        </Button>
                        <Button variant={"outline"}>
                          <PencilLineIcon />
                        </Button>
                        <Button variant={"destructive"}>
                          <Trash2Icon />
                        </Button>
                      </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={639}>
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
                    </MediaQuery>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </MediaQuery>
    </div>
  );
}
