import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCuQFNji8vSyTuTLTDQQAz-vVyCSzh_47Q" });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
      { role: "user", parts: [{ text: prompt }] }
    ],
  });

  const text = response?.candidates?.[0]?.content?.parts?.[0]?.text;
  console.log(text);
  return text ?? "No response text received.";
}

export default main;
