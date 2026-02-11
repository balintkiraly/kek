import { useMutation } from "@tanstack/react-query";
import type { KekLevel } from "@/lib/ai/generate-answer";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface AnswerRequest {
  prompt: string;
  level?: KekLevel;
}

export function useAnswerMutation(
  onSuccess: (answer: string, prompt: string) => void
) {
  return useMutation({
    mutationFn: async ({ prompt, level = 3 }: AnswerRequest) => {
      const response = await fetch("/api/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, format: "markdown", level }),
      });
      if (!response.ok) {
        throw new Error("Failed to get answer");
      }
      return response.json();
    },
    onSuccess: (data, { prompt }) => {
      onSuccess(data.answer, prompt);
    },
  });
}
