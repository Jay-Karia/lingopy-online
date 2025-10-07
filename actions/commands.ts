"use server";
const API_URL = "https://lingopy-server.vercel.app";
export async function fetchCommands(
  language: string
): Promise<Record<string, unknown>> {
  const MASTER_TOKEN = process.env.MASTER_TOKEN;
  const response = await fetch(`${API_URL}/langcommands/${language}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${MASTER_TOKEN}`,
    },
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Failed to fetch commands: ${response.status} ${text}`);
  }
  const data = await response.json();
  return data;
}
