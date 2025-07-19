import { NextResponse } from "next/server";

export async function POST(req) {
  const { message } = await req.json();

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "mixtral-8x7b-32768", // or "llama3-8b-8192"
      messages: [{ role: "user", content: message }],
    }),
  });

  const data = await res.json();
  const reply = data?.choices?.[0]?.message?.content || "Sorry, I couldn't understand.";

  return NextResponse.json({ reply });
}
