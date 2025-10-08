import LanguageSelector from "./ui/language-selector";
import Commands from "./ui/commands";
import Run from "./ui/run";
import { ModeToggle } from "./ui/theme-toggle";

export default function AppBar() {
  return (
    <div className="p-4 border-b border-border bg-card text-card-foreground flex items-center justify-between">
      <div>
        <LanguageSelector />
      </div>

      <div className="flex items-center gap-4">
        <ModeToggle />
        <Commands />
        <Run />
      </div>
    </div>
  );
}
