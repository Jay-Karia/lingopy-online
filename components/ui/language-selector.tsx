import { getLangauges } from "@/actions/language";
import { LanguageList } from "@/types";
import LanguageSelectClient from "./language-select-client";

export default async function LanguageSelector() {
  const res: LanguageList | null = await getLangauges();
  const languages = res ? res.languages : [];

  return <LanguageSelectClient languages={languages} />;
}
