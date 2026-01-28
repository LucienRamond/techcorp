import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

export default function SearchBar() {
  return (
    <InputGroup className=" bg-secondary mt-4 sm:mt-0">
      <InputGroupInput placeholder="Search tools..." />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
