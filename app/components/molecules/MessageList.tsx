import React from "react";
import { MessageBubble } from "../atoms/MessageBubble";
import { Message } from "@/lib/hooks/useAnswerMutation";

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  isLoading,
}) => (
  <div
    className="w-full"
    role="log"
    aria-label="Beszélgetés"
    aria-live="polite"
    aria-busy={isLoading}
  >
    {messages.length === 0 && !isLoading && (
      <div className="flex items-center justify-center h-64 text-[#374151] dark:text-[#d1d5db]" role="status">
        <p className="text-2xl font-medium">Kezdj egy beszélgetést!</p>
      </div>
    )}
    {messages.map((msg, index) => (
      <MessageBubble key={index} role={msg.role} content={msg.content} />
    ))}
    {isLoading && (
      <div className="flex justify-start mb-5" role="status" aria-live="polite" aria-label="Kéki válaszol">
        <div className="bg-[#e5e7eb] text-[#0d0d0d] dark:bg-[#374151] dark:text-[#f5f5f5] px-5 py-4 rounded-xl rounded-bl-none shadow-sm">
          <p className="text-xl font-semibold mb-1.5 m-0 text-[#374151] dark:text-[#d1d5db]">Kéki</p>
          <div className="flex items-center gap-2 loading-dots" aria-hidden="true">
            <span className="w-3 h-3 bg-[#4b5563] dark:bg-[#9ca3af] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-3 h-3 bg-[#4b5563] dark:bg-[#9ca3af] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
            <span className="w-3 h-3 bg-[#4b5563] dark:bg-[#9ca3af] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          </div>
        </div>
      </div>
    )}
  </div>
);
