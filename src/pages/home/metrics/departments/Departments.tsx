import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2Icon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Departments({ kpi }: { kpi: string }) {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/departments`)
      .then((response) => response.json())
      .then((data) => setDepartments(data));
  }, [BASE_URL]);

  return (
    <Card>
      <CardHeader className=" flex justify-between">
        <CardTitle className=" text-muted-foreground">Departments</CardTitle>
        <Building2Icon
          color="white"
          size={"2rem"}
          className=" bg-orange-gradient p-1.5 rounded-md"
        />
      </CardHeader>
      <CardContent className=" grid gap-2">
        <div className=" font-bold flex text-2xl ">
          <div>{departments.length}</div>
        </div>
        <div className=" rounded-xl bg-orange-gradient w-fit px-2 text-white">
          {kpi}
        </div>
      </CardContent>
    </Card>
  );
}
