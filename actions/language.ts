"use server";

import { LanguageList } from "@/types";

const API_URL = "https://lingopy-server.vercel.app/";

export async function getLangauges(): Promise<LanguageList | null> {
  try {
    const MASTER_TOKEN = process.env.MASTER_TOKEN;

    const response = await fetch(`${API_URL}/langlist`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MASTER_TOKEN}`,
      },
    });

    const languages: LanguageList = await response.json();

    return languages;
  } catch (error) {
    console.error("Error fetching languages:", error);
    return null;
  }
}
