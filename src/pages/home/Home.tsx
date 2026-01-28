import Page from "@/components/custom/Page";
import Metrics from "./metrics/Metrics";
import RecentTools from "./recent_tools/RecentTools";

export default function Home() {
  return (
    <Page>
      <div className=" grid gap-2">
        <div className=" text-foreground text-2xl sm:text-4xl font-bold">
          Internal Tools Dashboard
        </div>
        <div className=" text-muted-foreground">
          Monitor and manage your organization's tools and expenses
        </div>
      </div>
      <Metrics />
      <RecentTools />
    </Page>
  );
}
