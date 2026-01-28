import type { ToolsType } from "@/utils/types/tools";

export default function Status({
  status,
  style,
}: {
  status: ToolsType["status"];
  style?: string;
}) {
  return (
    <div
      className={`${status == "active" && "bg-green-gradient"} 
                        ${status == "expiring" && "bg-orange-gradient"} 
                        ${status == "unused" && "bg-red-600 "} 
                        rounded-xl w-fit py-1 px-2 text-white capitalize ${style} `}
    >
      {status}
    </div>
  );
}
