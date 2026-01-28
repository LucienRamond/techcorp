import Page from "@/components/custom/Page";
import ToolCard from "@/components/custom/ToolCard";
import { ContentContext } from "@/providers/settings/SettingsContext";
import type { ToolsType } from "@/utils/types/tools";
import { CalendarIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";

export default function Tools() {
  const [tools, setTools] = useState<ToolsType[]>([]);
  const { content } = useContext(ContentContext);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    if (content.search) {
      fetch(`${BASE_URL}/tools?name_like=${content.search}`)
        .then((response) => response.json())
        .then((data) => {
          setTools(data);
        });
    } else {
      fetch(`${BASE_URL}/tools`)
        .then((response) => response.json())
        .then((data) => setTools(data));
    }
  }, [BASE_URL, content]);

  return (
    <Page>
      <div className=" grid gap-2">
        <div className=" text-foreground text-2xl sm:text-4xl font-bold">
          Tools
        </div>
        <div className=" text-muted-foreground">View and manage tools </div>
        <div className=" border rounded-xl bg-card grid gap-4 p-4">
          <div className=" flex justify-between">
            <div className=" sm:text-2xl font-semibold">Tools</div>
            <div className=" flex gap-2 justify-items-center items-center">
              <CalendarIcon color="var(--muted-foreground)" size={"1rem"} />
              <div className=" text-muted-foreground">
                {content.search ? `Results for ${content.search}` : "All tools"}
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-3 gap-4">
            {tools.map((tool) => {
              return <ToolCard tool={tool} />;
            })}
          </div>
        </div>
      </div>
    </Page>
  );
}
