import { generateAnswer } from "@/lib/ai/generate-answer";

export async function POST(request: Request) {
  try {
    const { prompt, format = "markdown" } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return Response.json(
        { error: "Missing or invalid 'prompt' field" },
        { status: 400 }
      );
    }

    const answer = await generateAnswer(prompt, format);

    return Response.json({ answer }, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return Response.json(
      { error: "Failed to generate answer" },
      { status: 500 }
    );
  }
}
