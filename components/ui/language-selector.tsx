import { getLangauges } from "@/actions/language";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LanguageList } from "@/types";

export default async function LanguageSelector() {
  const res: LanguageList | null = await getLangauges();
  const languages = res ? res.languages : [];

  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent defaultValue={"en"}>
          {languages.length > 0 ? (
            languages.map((lang) => (
              <SelectItem key={lang} value={lang}>
                {lang}
              </SelectItem>
            ))
          ) : (
            <SelectItem value="none" disabled>
              No languages available
            </SelectItem>
          )}
        </SelectContent>
      </Select>
    </div>
  );
}
