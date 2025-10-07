"use server";

const API_URL = "http://127.0.0.1:5000";

export async function runCode(code: string, language: string): Promise<string> {
  try {
    const MASTER_TOKEN = process.env.MASTER_TOKEN;

    const response = await fetch(`${API_URL}/runcode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MASTER_TOKEN}`,
      },
      body: JSON.stringify({
        code,
        language,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return `Error: ${response.status} - ${errorText}`;
    }

    const result = await response.json();
    
    return result.output || "No output returned";
  } catch (error) {
    console.error("Error running code:", error);
    return `Error executing code: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}