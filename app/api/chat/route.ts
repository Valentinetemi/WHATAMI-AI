import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { answers, personalityType } = await req.json();

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ACCOUNT_ID}/ai/run/@cf/meta/llama-3-8b-instruct`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CF_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: `You are a savage but loving Gen-Z personality analyst. 
              Give a short 2-3 sentence roast of the user based on their personality type. 
              Be fun, witty, and use gen-z slang. No markdown, no bullet points, 
              no asterisks. Just a short punchy paragraph under 50 words.`,
            },
            {
              role: "user",
              content: `My personality type is: ${personalityType}. My quiz answers were: ${JSON.stringify(answers)}. Roast me.`,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json({ result: data.result.response });
  } catch (error) {
    console.error("Cloudflare AI error:", error);
    return NextResponse.json(
      { error: "Failed to analyze personality" },
      { status: 500 }
    );
  }
}