"use client";

import { useState } from "react";
import { useAtomValue } from "jotai";
import { languageAtom } from "@/atoms";
import { fetchCommands as getCommands } from "@/actions/commands";
import { Button } from "./button";

// Define the expected shape of the commands response
type CommandsResponse = {
  syntax?: Record<string, string>;
  translations?: Record<string, string>;
};
export default function Commands() {
  const language = useAtomValue(languageAtom) || "";
  const [show, setShow] = useState(false);
  // Store full JSON response
  const [responseData, setResponseData] = useState<CommandsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const fetchCommands = async () => {
    setLoading(true);
    setError("");
    try {
      // Use server action to fetch commands
      const data = await getCommands(language);
      setResponseData(data);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : String(e);
      setError(message || "Failed to load commands");
    } finally {
      setLoading(false);
    }
  };

  const toggle = () => {
    if (!show) {
      fetchCommands();
    }
    setShow(!show);
  };

  return (
    <>
      <Button onClick={toggle}>Commands</Button>
  <div className={`fixed top-0 right-0 bottom-16 w-64 bg-card text-card-foreground shadow-lg transform ${show ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 flex flex-col`}>  
        <div className="p-4 flex items-center justify-between border-b border-border flex-none">
          <h2 className="font-bold">Commands</h2>
          <button onClick={toggle} className="text-muted-foreground">Close</button>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && responseData && (
            // Only show translations
            responseData.translations && (
              <div>
                <h3 className="font-bold mb-2">Translations</h3>
                <ul className="space-y-2">
                  {Object.entries(responseData.translations as Record<string, string>).map(
                    ([word, translation], idx) => (
                      <li key={idx} className="flex items-center justify-between">
                        <span className="font-semibold">{word}</span>
                        <code className="font-mono text-sm bg-muted px-1 rounded">{translation}</code>
                        <button
                          className="ml-2 px-2 py-1 bg-blue-500 text-white text-sm rounded"
                          onClick={() => navigator.clipboard.writeText(translation)}
                        >Copy</button>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}