"use server";

const API_URL = "https://lingopy-server.vercel.app/";

export async function runCode(code: string, language: string): Promise<string> {
  try {
    const MASTER_TOKEN = process.env.MASTER_TOKEN;

    // Clean the code - remove trailing newlines and extra whitespace
    const cleanCode = code.trim();

    const response = await fetch(`${API_URL}/runcode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MASTER_TOKEN}`,
      },
      body: JSON.stringify({
        code: cleanCode,
        language,
      }),
    });

    if (!response.ok) {
      // Try to parse JSON error response
      try {
        const errRes = await response.json();
        if (errRes.error === "invalidLanguage") {
          return "Mind your Language! Selcted language is wrong!";
        }
        return `Error: ${errRes.error || JSON.stringify(errRes)}`;
      } catch {
        const text = await response.text();
        return `Error: ${text}`;
      }
    }
    
    const result = await response.json();
    
    console.log("Full API response:", JSON.stringify(result, null, 2));
    console.log("result.error:", result.error);
    console.log("result.output:", result.output);
    
    // Check if the response contains an error
    if (result.error) {
      if (result.error === "invalidLanguage") {
        return "Mind your Language! Selcted language is wrong!";
      }
      return `Error: ${result.error}`;
    }
    
    return result.output || "No output returned";

  } catch (error) {
    return `Error executing code: ${
      error instanceof Error ? error.message : "Unknown error"
    }`;
  }
}
