"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/shared/components/ui";

interface Props {
  className?: string;
}

export const ModeToggle: React.FC<Props> = ({ className }) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      className={className}
      size="icon"
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      <Sun className="rotate-0 scale-100 dark:scale-0" />
      <Moon className="absolute scale-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};