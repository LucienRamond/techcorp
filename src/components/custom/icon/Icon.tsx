import type { ToolsType } from "@/utils/types/tools";
import {
  BriefcaseBusinessIcon,
  CogIcon,
  DramaIcon,
  MessageCircleMoreIcon,
  NotebookPenIcon,
  PaletteIcon,
} from "lucide-react";

export default function Icon({
  department,
}: {
  department: ToolsType["owner_department"];
  size?: string;
}) {
  const icon = () => {
    switch (department) {
      case "Communication":
        return (
          <MessageCircleMoreIcon
            color="white"
            className=" p-1 bg-pink-gradient rounded"
            size={"1.9rem"}
          />
        );
      case "Design":
        return (
          <PaletteIcon
            color="white"
            className=" p-1 bg-orange-gradient rounded"
            size={"1.9rem"}
          />
        );
      case "Engineering":
        return (
          <CogIcon
            color="white"
            className=" p-1 bg-green-gradient rounded"
            size={"1.9rem"}
          />
        );
      case "Operations":
        return (
          <NotebookPenIcon
            color="white"
            className=" p-1 bg-brown-gradient rounded"
            size={"1.9rem"}
          />
        );
      case "Marketing":
        return (
          <DramaIcon
            color="white"
            className=" p-1 bg-purple-gradient rounded"
            size={"1.9rem"}
          />
        );
      case "Sales":
        return (
          <BriefcaseBusinessIcon
            color="white"
            className=" p-1 bg-blue-gradient rounded"
            size={"1.9rem"}
          />
        );
    }
  };
  return <div>{icon()}</div>;
}
