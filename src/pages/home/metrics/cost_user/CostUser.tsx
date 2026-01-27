import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { CostAnalyticsType } from "@/utils/types/metrics";
import { UsersIcon } from "lucide-react";

export default function CostUser({
  cost_analytics,
  kpi,
}: {
  cost_analytics: CostAnalyticsType;
  kpi: string;
}) {
  return (
    <Card>
      <CardHeader className=" flex justify-between">
        <CardTitle className=" text-muted-foreground">Cost/User</CardTitle>
        <UsersIcon
          color="white"
          size={"2rem"}
          className=" bg-pink-gradient p-1.5 rounded-md"
        />
      </CardHeader>
      <CardContent className=" grid gap-2">
        <div className=" font-bold flex text-2xl ">
          <div>
            €
            {cost_analytics.cost_per_user.toLocaleString("en", {
              currency: "EUR",
            })}
          </div>
        </div>
        <div className="text-white rounded-xl bg-pink-gradient w-fit px-2">
          {kpi}
        </div>
      </CardContent>
    </Card>
  );
}
