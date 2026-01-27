import { useContext, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "@/providers/theme/ThemeContext";
import { Button } from "../ui/button";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu-trigger-style";

export default function ToggleTheme() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkTheme ? "dark" : "light",
    );
  }, [darkTheme]);

  return (
    <Button
      className={`${navigationMenuTriggerStyle()} cursor-pointer rounded`}
      onClick={toggleTheme}
    >
      {darkTheme ? (
        <Sun color="yellow" />
      ) : (
        <Moon color="var(--muted-foreground)" />
      )}
    </Button>
  );
}
