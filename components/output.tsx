"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { outputAtom } from "@/atoms";

export default function Output() {
  const output = useAtomValue(outputAtom);
  const setOutput = useSetAtom(outputAtom);

  return (
    <div className="p-4 border border-border bg-card text-card-foreground flex flex-col gap-2 mx-4">
      <div className="flex items-center justify-between">
        <div className="font-bold">Output</div>
        <div className="flex gap-2">
          <button
            className="text-sm text-muted-foreground"
            onClick={() => navigator.clipboard.writeText(output || "")}
          >
            Copy
          </button>
          <button
            className="text-sm text-muted-foreground"
            onClick={() => setOutput("")}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="whitespace-pre-wrap font-mono text-sm">
        {output ? output : <span className="text-muted-foreground">The output of the code will be displayed here</span>}
      </div>
    </div>
  );
}
