import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import type { ToolsType } from "@/utils/types/tools";
import { useEffect, useState } from "react";

export default function CostRangeFilter({
  setCostRangeFilter,
  costRangeFilter,
}: {
  setCostRangeFilter: (arg0: number[]) => void;
  costRangeFilter: number[];
}) {
  const [maxCostTool, setMaxCostTool] = useState<number>(100);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(
      `${BASE_URL}/tools?_sort=monthly_cost&_order=desc&status=active&_limit=1`,
    )
      .then((response) => response.json())
      .then((data: ToolsType[]) => {
        setCostRangeFilter([0, data[0].monthly_cost]);
        setMaxCostTool(data[0].monthly_cost);
      });
  }, [BASE_URL, setCostRangeFilter]);

  return (
    <div className="grid w-75 h-fit gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="cost-range-filter">Monthly Cost</Label>
        <span className="text-muted-foreground text-sm">
          €{costRangeFilter.join(" / €")}
        </span>
      </div>
      <Slider
        id="cost-range-filter"
        value={costRangeFilter}
        onValueChange={setCostRangeFilter}
        min={0}
        max={maxCostTool}
        step={10}
      />
    </div>
  );
}
