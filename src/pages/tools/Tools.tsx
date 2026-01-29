import Page from "@/components/custom/Page";
import ToolCard from "@/components/custom/ToolCard";
import { ContentContext } from "@/providers/settings/SettingsContext";
import type { ToolsType } from "@/utils/types/tools";
import { CalendarIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import CategoryFilter from "./filters/CategoryFilter";
import CostRangeFilter from "./filters/CostRangeFilter";
import DepartmentFilter from "./filters/DepartmentFilter";
import StatusFilter from "./filters/StatusFilter";

export default function Tools() {
  const [tools, setTools] = useState<ToolsType[]>([]);
  const { content } = useContext(ContentContext);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [statusFilter, setStatusFilter] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [costRangeFilter, setCostRangeFilter] = useState<number[]>([0.3, 100]);

  useEffect(() => {
    fetch(
      `${BASE_URL}/tools?${statusFilter}${departmentFilter}${categoryFilter}${content.search && `&name_like=${content.search}`}`,
    )
      .then((response) => response.json())
      .then((data) => setTools(data));
  }, [BASE_URL, content, statusFilter, departmentFilter, categoryFilter]);

  return (
    <Page>
      <div className=" flex justify-between">
        <div className=" grid gap-2">
          <div className=" text-foreground text-2xl sm:text-4xl font-bold">
            Tools
          </div>
          <div className=" text-muted-foreground">View and manage tools </div>
        </div>

        <div className=" flex gap-2 justify-items-center items-center">
          <CalendarIcon color="var(--muted-foreground)" size={"1rem"} />
          <div className=" text-muted-foreground">
            {content.search ? `Results for ${content.search}` : "All tools"}
          </div>
        </div>
      </div>

      <StatusFilter setStatusFilter={setStatusFilter} />
      <DepartmentFilter setDepartmentFilter={setDepartmentFilter} />
      <CategoryFilter setCategoryFilter={setCategoryFilter} />
      <CostRangeFilter
        setCostRangeFilter={setCostRangeFilter}
        costRangeFilter={costRangeFilter}
      />

      <div className=" grid xl:grid-cols-3 sm:grid-cols-2 gap-4">
        {tools.map((tool) => {
          if (
            tool.monthly_cost > costRangeFilter[0] &&
            tool.monthly_cost < costRangeFilter[1]
          )
            return <ToolCard key={tool.id} tool={tool} />;
        })}
      </div>
      {tools.length == 0 && <div>No results</div>}
    </Page>
  );
}
