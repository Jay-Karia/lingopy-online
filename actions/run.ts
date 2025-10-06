"use server";

const API_URL = "http://127.0.0.1:3000";

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
    
    // Assuming the API returns { output: string } or similar
    // Adjust based on your actual API response structure
    return result.output || result.result || JSON.stringify(result);
  } catch (error) {
    console.error("Error running code:", error);
    return `Error executing code: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}