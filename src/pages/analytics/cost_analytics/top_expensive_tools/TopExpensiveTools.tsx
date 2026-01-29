import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import type { ToolsType } from "@/utils/types/tools";
import { WrenchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

const chartConfig = {} satisfies ChartConfig;

export default function TopExpensiveTools() {
  const [tools, setTools] = useState<ToolsType[]>([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(`${BASE_URL}/tools?_sort=monthly_cost&_order=desc&_limit=6`)
      .then((response) => response.json())
      .then((data) => {
        setTools(data);
      });
  }, [BASE_URL]);

  return (
    <Card className=" sm:w-130">
      <CardHeader>
        <CardTitle className=" flex justify-between">
          <div>Top expensive tools</div>
          <WrenchIcon
            className="mr-2 bg-purple-gradient rounded p-1"
            size={"1.8rem"}
          />
        </CardTitle>
        <CardDescription>Currency EUR | €</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={tools.filter((e) => e.monthly_cost)}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="monthly_cost" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="monthly_cost"
              layout="vertical"
              fill="var( --chart-3)"
              radius={4}
            >
              <LabelList
                dataKey="name"
                position="insideLeft"
                offset={8}
                className="fill-(--color-label)"
                fontSize={12}
              />
              <LabelList
                dataKey="monthly_cost"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex gap-2 text-sm flex-wrap justify-around">
        {tools
          .filter((e) => e.monthly_cost)
          .map((tool) => {
            const average = Math.round(
              ((tool.monthly_cost - tool.previous_month_cost) /
                tool.previous_month_cost) *
                100,
            );
            return (
              <div className=" flex gap-2">
                <div>{tool.name}</div>
                <div
                  className={`${Math.sign(average) >= 0 ? "bg-green-gradient" : "bg-orange-gradient"} rounded-xl  w-fit px-2 text-white`}
                >
                  {Math.sign(average) >= 0 && "+"}
                  {average}%
                </div>
              </div>
            );
          })}
      </CardFooter>
    </Card>
  );
}
