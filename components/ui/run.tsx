"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { Button } from "./button";
import { codeAtom, languageAtom, outputAtom } from "@/atoms";
import { runCode } from "@/actions/run";
import { useState } from "react";

export default function Run() {
  const code = useAtomValue(codeAtom);
  const language = useAtomValue(languageAtom);
  const setOutput = useSetAtom(outputAtom);
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    if (!language) {
      setOutput("Please select a language first");
      return;
    }

    setIsRunning(true);
    setOutput("Running...");
    
    try {
      const result = await runCode(code, language);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <Button onClick={handleRun} disabled={isRunning}>
      {isRunning ? "Running..." : "Run"}
    </Button>
  );
}
