import { generateAnswer, type KekLevel } from "@/lib/ai/generate-answer";

const VALID_LEVELS: KekLevel[] = [1, 2, 3];

export async function POST(request: Request) {
  try {
    const { prompt, format = "markdown", level: rawLevel } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return Response.json(
        { error: "Missing or invalid 'prompt' field" },
        { status: 400 }
      );
    }

    const level: KekLevel = VALID_LEVELS.includes(rawLevel) ? rawLevel : 3;
    const answer = await generateAnswer(prompt, format, level);

    return Response.json({ answer }, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return Response.json(
      { error: "Failed to generate answer" },
      { status: 500 }
    );
  }
}
