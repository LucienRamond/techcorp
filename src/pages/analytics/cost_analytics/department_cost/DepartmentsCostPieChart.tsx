import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import type { ToolsType } from "@/utils/types/tools";
import { EuroIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Pie, PieChart } from "recharts";

export const description = "A pie chart with a label";

const chartConfig = {
  Communication: {
    label: "Communication",
  },
  Engineering: {
    label: "Engineering",
  },
  Marketing: {
    label: "Marketing",
  },
  Operations: {
    label: "Operations",
  },
  Design: {
    label: "Design",
  },
} satisfies ChartConfig;

export function DepartmentsCostPieChart() {
  const [tools, setTools] = useState([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const departmentsData = [
    { name: "Communication", monthly_cost: 0, fill: "rgb(255, 106, 0)" },
    { name: "Engineering", monthly_cost: 0, fill: "rgb(0, 194, 110)" },
    { name: "Marketing", monthly_cost: 0, fill: "rgb(122, 101, 255)" },
    { name: "Operations", monthly_cost: 0, fill: "rgb(130, 83, 59)" },
    { name: "Design", monthly_cost: 0, fill: "rgb(255, 0, 98)" },
  ];

  useEffect(() => {
    fetch(`${BASE_URL}/tools?_sort=owner_department`)
      .then((response) => response.json())
      .then((data) => {
        setTools(data);
      });
  }, [BASE_URL, setTools]);

  const sort = () => {
    tools.map((tool: ToolsType) => {
      switch (tool.owner_department) {
        case "Communication":
          return (departmentsData[0].monthly_cost =
            departmentsData[0].monthly_cost + tool.monthly_cost);
        case "Engineering":
          return (departmentsData[1].monthly_cost =
            departmentsData[1].monthly_cost + tool.monthly_cost);
        case "Marketing":
          return (departmentsData[2].monthly_cost =
            departmentsData[2].monthly_cost + tool.monthly_cost);
        case "Operations":
          return (departmentsData[3].monthly_cost =
            departmentsData[3].monthly_cost + tool.monthly_cost);
        case "Design":
          if (tool.monthly_cost) {
            return (departmentsData[4].monthly_cost =
              departmentsData[4].monthly_cost + tool.monthly_cost);
          }
      }
    });
  };

  sort();

  return (
    <Card className="flex flex-col sm:w-130 w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle className=" flex justify-between">
          <div>Cost per department / month</div>
          <EuroIcon
            className="mr-2 bg-orange-gradient rounded p-1"
            size={"1.8rem"}
          />
        </CardTitle>
        <CardDescription>Currency EUR | €</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-80 pb-0"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent className=" flex " />}
            />
            <Pie
              data={departmentsData}
              dataKey="monthly_cost"
              label
              nameKey="name"
              className=" font-bold "
            />
            <ChartLegend
              content={
                <ChartLegendContent
                  nameKey="name"
                  className=" flex flex-wrap text-sm font-semibold"
                />
              }
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
