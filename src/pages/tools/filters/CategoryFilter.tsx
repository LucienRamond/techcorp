import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CategoryFilter({
  setCategoryFilter,
}: {
  setCategoryFilter: (arg0: string) => void;
}) {
  return (
    <div className=" grid gap-2">
      <Label htmlFor="select-category">Category</Label>
      <Select
        onValueChange={(e) =>
          e != "All"
            ? setCategoryFilter(`&category=${e}`)
            : setCategoryFilter("")
        }
      >
        <SelectTrigger
          id="select-category"
          className="w-full max-w-48 min-w-50 bg-background"
        >
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Communication">Communication</SelectItem>
            <SelectItem value="Design">Design</SelectItem>
            <SelectItem value="Development">Development</SelectItem>
            <SelectItem value="Productivity">Productivity</SelectItem>
            <SelectItem value="Project Management">
              Project Management
            </SelectItem>
            <SelectItem value="Analytics">Analytics</SelectItem>
            <SelectItem value="Security">Security</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
            <SelectItem value="HR">HR</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
