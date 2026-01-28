import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ContentContext } from "@/providers/settings/SettingsContext";
import { SearchIcon } from "lucide-react";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

export default function SearchBar() {
  const { editContent } = useContext(ContentContext);
  const [search, setSearch] = useState("");
  const location = useLocation();

  return (
    <InputGroup
      className={`${location.pathname == "/tools" ? "" : ""} bg-secondary mt-4 sm:mt-0`}
    >
      <InputGroupInput
        placeholder={`${location.pathname == "/tools" ? "Search in tools catalog..." : "Search tools..."}`}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          return e.key == "Enter" && editContent(search);
        }}
      />
      <InputGroupAddon>
        <SearchIcon
          className={` ${location.pathname == "/tools" && "animate-bounce"}`}
        />
      </InputGroupAddon>
    </InputGroup>
  );
}
