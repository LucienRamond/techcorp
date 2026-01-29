import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function CategoryFilter({
  setCategoryFilter,
}: {
  setCategoryFilter: (arg0: string) => void;
}) {
  return (
    <div className=" grid gap-2">
      <div>Department</div>
      <ToggleGroup
        variant="outline"
        type="single"
        onValueChange={(e) =>
          e ? setCategoryFilter(`&category=${e}`) : setCategoryFilter("")
        }
      >
        <ToggleGroupItem
          value="Communication"
          aria-label="Toggle category communication"
        >
          Communication
        </ToggleGroupItem>
        <ToggleGroupItem value="Design" aria-label="Toggle category design">
          Design
        </ToggleGroupItem>
        <ToggleGroupItem
          value="Development"
          aria-label="Toggle category development"
        >
          Development
        </ToggleGroupItem>
        <ToggleGroupItem
          value="Productivity"
          aria-label="Toggle category productivity"
        >
          Productivity
        </ToggleGroupItem>
        <ToggleGroupItem
          value="Project Management"
          aria-label="Toggle category Project Management"
        >
          Project Management
        </ToggleGroupItem>
        <ToggleGroupItem
          value="Sales & Marketing"
          aria-label="Toggle category Sales & Marketing"
        >
          Sales & Marketing
        </ToggleGroupItem>
        <ToggleGroupItem
          value="Analytics"
          aria-label="Toggle category Analytics"
        >
          Analytics
        </ToggleGroupItem>
        <ToggleGroupItem value="Security" aria-label="Toggle category Security">
          Security
        </ToggleGroupItem>
        <ToggleGroupItem value="Finance" aria-label="Toggle category Finance">
          Finance
        </ToggleGroupItem>
        <ToggleGroupItem value="HR" aria-label="Toggle category HR">
          HR
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
