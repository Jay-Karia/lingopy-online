"use client";

import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useSetAtom } from "jotai";
import { codeAtom } from "@/atoms";

export default function EditorComponet() {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);
  const setCode = useSetAtom(codeAtom);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Start typing...",
        modules: {
          toolbar: null,
        },
      });

      quillRef.current.on("text-change", () => {
        const content = quillRef.current?.root.innerHTML || "";
        setCode(content);
      });
    }
  }, []);

  return (
    <div className="p-4 flex flex-col h-[50vh] sm:h-[70vh] overflow-hidden">
      <div className="*:mb-2 font-bold text-lg">
        Code Editor
      </div>
      <div ref={editorRef} className="flex-1 bg-white" />
    </div>
  );
}
