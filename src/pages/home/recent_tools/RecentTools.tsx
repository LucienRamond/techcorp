import { useEffect, useState } from "react";
import { DataTable } from "./DataTable";
import { columns } from "./Columns";
import { CalendarIcon } from "lucide-react";

export default function RecentTools() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/tools`)
      .then((response) => response.json())
      .then((data) => setTools(data));
  }, [BASE_URL]);

  console.log(tools);

  return (
    <div className=" border rounded-xl bg-card grid gap-4 p-4">
      <div className=" flex justify-between">
        <div className=" text-2xl font-semibold">Recent Tools</div>
        <div className=" flex gap-2 justify-items-center items-center">
          <CalendarIcon color="var(--muted-foreground)" size={"1rem"} />
          <div className=" text-muted-foreground">Last 30 days</div>
        </div>
      </div>
      <DataTable columns={columns} data={tools} />
    </div>
  );
}
