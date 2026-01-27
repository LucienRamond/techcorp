import type { MetricsType } from "@/utils/types/metrics";
import { useEffect, useState } from "react";
import MonthlyBudget from "./monthly_budget/MonthlyBudget";
import ActiveTools from "./active_tools/ActiveTools";
import Departments from "./departments/Departments";
import CostUser from "./cost_user/CostUser";

export default function Metrics() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [metrics, setMetrics] = useState<MetricsType | undefined>();

  useEffect(() => {
    fetch(`${BASE_URL}/analytics`)
      .then((response) => response.json())
      .then((data) => setMetrics(data));
  }, [BASE_URL]);

  return (
    <div className=" grid grid-cols-4 gap-4">
      {metrics && (
        <>
          <MonthlyBudget
            monthly_budget={metrics.budget_overview}
            kpi={metrics.kpi_trends.budget_change}
          />
          <ActiveTools kpi={metrics.kpi_trends.tools_change} />
          <Departments kpi={metrics.kpi_trends.departments_change} />
          <CostUser
            cost_analytics={metrics.cost_analytics}
            kpi={metrics.kpi_trends.cost_per_user_change}
          />
        </>
      )}
    </div>
  );
}
