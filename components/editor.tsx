"use client";

import { useState } from "react";
import { Editor } from "primereact/editor";

export default function EditorComponet() {
  const [text, setText] = useState("");
  return (
    <div className="p-4 flex flex-col">
      <Editor
        value={text}
        onTextChange={(e) => setText(e.htmlValue || "")}
        style={{
          minHeight: "200px",
          maxHeight: "320px",
          height: "320px",
        }}
        className="sm:min-h-[200px] sm:max-h-[320px] md:min-h-[300px] md:max-h-[480px] lg:min-h-[400px] lg:max-h-[600px]"
      />
    </div>
  );
}
