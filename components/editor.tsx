"use client";

import { useSetAtom, useAtomValue } from "jotai";
import { codeAtom } from "@/atoms";

export default function EditorComponet() {
  const setCode = useSetAtom(codeAtom);
  const code = useAtomValue(codeAtom);

  return (
    <div className="p-4 flex flex-col h-[50vh] sm:h-[70vh] overflow-hidden">
      <div className="mb-2 font-bold text-lg">
        Code Editor
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="flex-1 bg-white border border-gray-300 rounded p-3 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your code here..."
        spellCheck={false}
      />
    </div>
  );
}
