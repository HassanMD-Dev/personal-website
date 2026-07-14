import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Button
      className={"cursor-pointer"}
      variant="ghost"
      onClick={toggleTheme}
      size="icon"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeToggle;
