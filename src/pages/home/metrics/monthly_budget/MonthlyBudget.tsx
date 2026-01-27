import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BudgetOverviewType } from "@/utils/types/metrics";
import { TrendingUpIcon } from "lucide-react";

export default function MonthlyBudget({
  monthly_budget,
  kpi,
}: {
  monthly_budget: BudgetOverviewType;
  kpi: string;
}) {
  return (
    <Card>
      <CardHeader className=" flex justify-between">
        <CardTitle className=" text-muted-foreground">Monthly Budget</CardTitle>
        <TrendingUpIcon
          color="white"
          size={"2rem"}
          className=" bg-green-gradient p-1.5 rounded-md"
        />
      </CardHeader>
      <CardContent className=" grid gap-2">
        <div className=" font-bold flex text-2xl ">
          <div>
            €
            {monthly_budget.current_month_total.toLocaleString("en", {
              currency: "EUR",
            })}
          </div>
          <div className=" text-muted-foreground">
            /
            {monthly_budget.monthly_limit.toLocaleString("en", {
              notation: "compact",
              currency: "EUR",
              style: "currency",
            })}
          </div>
        </div>
        <div className="text-white rounded-xl bg-green-gradient w-fit px-2">
          {kpi}
        </div>
      </CardContent>
    </Card>
  );
}
