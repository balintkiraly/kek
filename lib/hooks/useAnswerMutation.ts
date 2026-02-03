import { useMutation } from "@tanstack/react-query";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export function useAnswerMutation(
  onSuccess: (answer: string, prompt: string) => void
) {
  return useMutation({
    mutationFn: async (prompt: string) => {
      const response = await fetch("/api/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, format: "markdown" }),
      });
      if (!response.ok) {
        throw new Error("Failed to get answer");
      }
      return response.json();
    },
    onSuccess: (data, prompt) => {
      onSuccess(data.answer, prompt);
    },
  });
}
