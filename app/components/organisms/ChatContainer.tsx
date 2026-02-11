"use client";
import React, { useState, useRef, useEffect } from "react";
import { MessageList } from "../molecules/MessageList";
import { MessageForm } from "../molecules/MessageForm";
import { LevelChooser } from "../molecules/LevelChooser";
import { useAnswerMutation, Message } from "@/lib/hooks/useAnswerMutation";
import type { KekLevel } from "@/lib/ai/generate-answer";

const WELCOME_MESSAGE = `Üdvözöllek a KÉK Nyelvi Asszisztensben!

Kérdezz tőlem bármit!`;

export const ChatContainer: React.FC = () => {
  const [message, setMessage] = useState("");
  const [level, setLevel] = useState<KekLevel>(1);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: WELCOME_MESSAGE },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    messagesEndRef.current?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const answerMutation = useAnswerMutation((answer, prompt) => {
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: answer },
    ]);
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setMessage("");
    answerMutation.mutate({ prompt: message, level });
  };

  return (
    <main id="main-content" className="flex w-full max-w-6xl flex-col h-screen bg-white dark:bg-[#0f0f0f] text-[#0d0d0d] dark:text-[#f5f5f5]" tabIndex={-1}>
      <div className="flex-1 overflow-y-auto px-5 py-8 sm:px-8 md:px-10">
        <MessageList messages={messages} isLoading={answerMutation.isPending} />
        <div ref={messagesEndRef} />
      </div>
      <div className="flex-shrink-0 px-5 py-6 sm:px-8 md:px-10 border-t-2 border-[#1f2937] dark:border-[#374151] bg-white dark:bg-[#0f0f0f] space-y-4">
        <LevelChooser
          value={level}
          onChange={setLevel}
          disabled={answerMutation.isPending}
        />
        <MessageForm
          value={message}
          onChange={setMessage}
          onSubmit={onSubmit}
          disabled={answerMutation.isPending}
        />
      </div>
    </main>
  );
};