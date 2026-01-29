import Page from "@/components/custom/Page";
import CostAnalytics from "./cost_analytics/CostAnalytics";

export default function Analytics() {
  return (
    <Page>
      <div className=" grid gap-4">
        <div className=" text-foreground text-2xl sm:text-4xl font-bold">
          Analytics
        </div>
        <div className=" text-muted-foreground">
          View the cost and usage analyses of tools
        </div>
      </div>
      <CostAnalytics />
    </Page>
  );
}
