import { DepartmentsCostPieChart } from "./department_cost/DepartmentsCostPieChart";
import TopExpensiveTools from "./top_expensive_tools/TopExpensiveTools";

export default function CostAnalytics() {
  return (
    <div className=" text-2xl grid gap-2 font-semibold">
      <div>Cost Analystics</div>
      <div className=" flex gap-4 flex-wrap justify-center xl:justify-start">
        <DepartmentsCostPieChart />
        <TopExpensiveTools />
      </div>
    </div>
  );
}
