"use client";

import { useSetAtom, useAtomValue } from "jotai";
import { languageAtom } from "@/atoms";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  languages: string[];
};

export default function LanguageSelectClient({ languages }: Props) {
  const setLanguage = useSetAtom(languageAtom);
  const current = useAtomValue(languageAtom);

  return (
    <div>
      <Select value={current} onValueChange={(val) => setLanguage(val)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent defaultValue={current || "en"}>
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
