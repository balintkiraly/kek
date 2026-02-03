"use client";
import React, { useState, useRef, useEffect } from "react";
import { MessageList } from "../molecules/MessageList";
import { MessageForm } from "../molecules/MessageForm";
import { useAnswerMutation, Message } from "@/lib/hooks/useAnswerMutation";

const WELCOME_MESSAGE = `Üdvözöllek a KÉK Nyelvi Asszisztensben!

Kérdezz tőlem bármit

Ha valami nem világos, elmagyarázom másképp.

Kérdezz bátran!`;

export const ChatContainer: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: WELCOME_MESSAGE },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
    answerMutation.mutate(message);
  };

  return (
    <main className="flex w-full max-w-6xl flex-col h-screen bg-white dark:bg-black">
      <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-8 md:px-12">
        <MessageList messages={messages} isLoading={answerMutation.isPending} />
        <div ref={messagesEndRef} />
      </div>
      <div className="flex-shrink-0 px-6 py-6 sm:px-8 md:px-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
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