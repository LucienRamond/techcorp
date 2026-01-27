import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WrenchIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ActiveTools({ kpi }: { kpi: string }) {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [activeTools, SetActiveTools] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/tools?status=active`)
      .then((response) => response.json())
      .then((data) => SetActiveTools(data));
  }, [BASE_URL]);

  return (
    <Card>
      <CardHeader className=" flex justify-between">
        <CardTitle className=" text-muted-foreground">Active Tools</CardTitle>
        <WrenchIcon
          color="white"
          size={"2rem"}
          className=" bg-purple-gradient p-1.5 rounded-md"
        />
      </CardHeader>
      <CardContent className=" grid gap-2">
        <div className=" font-bold flex text-2xl ">
          <div>{activeTools.length}</div>
        </div>
        <div className=" rounded-xl bg-purple-gradient w-fit px-2 text-white">
          {kpi}
        </div>
      </CardContent>
    </Card>
  );
}
