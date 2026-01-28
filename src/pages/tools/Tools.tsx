import Page from "@/components/custom/Page";
import { columns } from "@/components/custom/tools_table/ToolsColumns";
import { DataTable } from "@/components/custom/tools_table/ToolsDataTable";
import type { ToolsType } from "@/utils/types/tools";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Tools() {
  const [tools, setTools] = useState<ToolsType[]>([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(`${BASE_URL}/tools`)
      .then((response) => response.json())
      .then((data) => setTools(data));
  }, [BASE_URL]);

  return (
    <Page>
      <div className=" grid gap-2">
        <div className=" text-foreground text-2xl sm:text-4xl font-bold">
          Tools
        </div>
        <div className=" text-muted-foreground">View and manage tools </div>
        <div className=" border rounded-xl bg-card grid gap-4 p-4">
          <div className=" flex justify-between">
            <div className=" sm:text-2xl font-semibold">Tools</div>
            <div className=" flex gap-2 justify-items-center items-center">
              <CalendarIcon color="var(--muted-foreground)" size={"1rem"} />
              <div className=" text-muted-foreground">All tools</div>
            </div>
          </div>
          <DataTable columns={columns} data={tools} />
        </div>
      </div>
    </Page>
  );
}
