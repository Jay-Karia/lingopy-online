"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { Button } from "./button";
import { codeAtom, languageAtom, outputAtom } from "@/atoms";
import { runCode } from "@/actions/run";

export default function Run() {
  const code = useAtomValue(codeAtom);
  const language = useAtomValue(languageAtom);
  const setOutput = useSetAtom(outputAtom);

  return (
    <Button
      onClick={async () => {
        const lang = language || "test";
        const res = await runCode(code, lang);
        setOutput(res);
      }}
    >
      Run
    </Button>
  );
}
