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

export default function DepartmentFilter({
  setDepartmentFilter,
}: {
  setDepartmentFilter: (arg0: string) => void;
}) {
  return (
    <div className=" grid gap-2">
      <Label htmlFor="select-department">Department</Label>
      <Select
        onValueChange={(e) =>
          e != "All"
            ? setDepartmentFilter(`&owner_department=${e}`)
            : setDepartmentFilter("")
        }
      >
        <SelectTrigger
          id="select-department"
          className="w-full max-w-48 min-w-50 bg-background"
        >
          <SelectValue placeholder="Select department" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Departments</SelectLabel>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Engineering">Engineering</SelectItem>
            <SelectItem value="Design">Design</SelectItem>
            <SelectItem value="Marketing">Marketing</SelectItem>
            <SelectItem value="Operations">Operations</SelectItem>
            <SelectItem value="Communication">Communication</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
