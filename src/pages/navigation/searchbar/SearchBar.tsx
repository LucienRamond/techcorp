import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ContentContext } from "@/providers/settings/SettingsContext";
import { SearchIcon } from "lucide-react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

export default function SearchBar() {
  const { editContent } = useContext(ContentContext);
  const location = useLocation();

  return (
    <InputGroup
      className={`${location.pathname == "/tools" ? "w-full" : ""} bg-secondary mt-4 sm:mt-0`}
    >
      <InputGroupInput
        placeholder={`${location.pathname == "/tools" ? "Search in tools catalog..." : "Search tools..."}`}
        onChange={(e) => editContent(e.target.value)}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
