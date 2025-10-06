"use client";

import { useState, useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default function EditorComponet() {
  const [text, setText] = useState("");
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

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
        setText(content);
      });
    }
  }, []);

  return (
    <div className="p-4 flex flex-col h-[50vh] sm:h-[70vh] overflow-hidden">
      <div ref={editorRef} className="flex-1 bg-white" />
    </div>
  );
}
