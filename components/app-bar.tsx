import Help from "./ui/help";
import LanguageSelector from "./ui/language-selector";
import Run from "./ui/run";

export default function AppBar() {
  return (
    <div className="p-4 border-b border-border bg-card text-card-foreground flex items-center justify-between">
      <div>
        <LanguageSelector />
      </div>

      <div className="flex items-center gap-4">
        <Run />
        <Help />
      </div>
    </div>
  );
}
