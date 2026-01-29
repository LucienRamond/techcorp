import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function DepartmentFilter({
  setDepartmentFilter,
}: {
  setDepartmentFilter: (arg0: string) => void;
}) {
  return (
    <div className=" grid gap-2">
      <div>Department</div>
      <ToggleGroup
        variant="outline"
        type="single"
        onValueChange={(e) =>
          e
            ? setDepartmentFilter(`&owner_department=${e}`)
            : setDepartmentFilter("")
        }
      >
        <ToggleGroupItem
          value="Engineering"
          aria-label="Toggle department engineering"
        >
          Engineering
        </ToggleGroupItem>
        <ToggleGroupItem value="Design" aria-label="Toggle department design">
          Design
        </ToggleGroupItem>
        <ToggleGroupItem
          value="Marketing"
          aria-label="Toggle department marketing"
        >
          Marketing
        </ToggleGroupItem>
        <ToggleGroupItem
          value="Operations"
          aria-label="Toggle department operations"
        >
          Operations
        </ToggleGroupItem>
        <ToggleGroupItem
          value="Communication"
          aria-label="Toggle department communication"
        >
          Communication
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
