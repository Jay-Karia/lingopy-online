"use client";

import { useSetAtom, useAtomValue } from "jotai";
import { codeAtom } from "@/atoms";

export default function EditorComponet() {
  const setCode = useSetAtom(codeAtom);
  const code = useAtomValue(codeAtom);

  return (
    <div className="p-4 flex flex-col h-[50vh] sm:h-[70vh] overflow-hidden">
      <div className="mb-2 font-bold text-lg dark:text-white">Code Editor</div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded p-3 font-mono text-sm text-gray-900 dark:text-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        placeholder="Write your code here..."
        spellCheck={false}
      />
    </div>
  );
}
