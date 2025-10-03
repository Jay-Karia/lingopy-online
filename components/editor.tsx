"use client";

import { useState } from "react";
import { Editor } from "primereact/editor";

export default function EditorComponet() {
  const [text, setText] = useState("");
  return (
    <div className="p-4 flex flex-col h-[50vh] sm:h-[70vh] overflow-scroll">
      <Editor
        value={text}
        onTextChange={(e) => setText(e.htmlValue || "")}
        className="flex-1 min-h-0"
        style={{ height: '100%' }}
      />
    </div>
  );
}
