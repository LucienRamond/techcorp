import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function StatusFilter({
  setStatusFilter,
}: {
  setStatusFilter: (arg0: string) => void;
}) {
  return (
    <div className=" grid gap-2">
      <div>Status</div>
      <ToggleGroup
        variant="outline"
        type="single"
        onValueChange={(e) =>
          e ? setStatusFilter(`&status=${e}`) : setStatusFilter("")
        }
      >
        <ToggleGroupItem value="active" aria-label="Toggle status active">
          Active
        </ToggleGroupItem>
        <ToggleGroupItem value="unused" aria-label="Toggle status unused">
          Unused
        </ToggleGroupItem>
        <ToggleGroupItem value="expiring" aria-label="Toggle status expiring">
          Expiring
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
