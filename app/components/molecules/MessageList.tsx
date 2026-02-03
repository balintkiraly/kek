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
  <div className="w-full">
    {messages.length === 0 && !isLoading && (
      <div className="flex items-center justify-center h-64 text-gray-500 dark:text-gray-400">
        <p className="text-lg">Kezdj egy beszélgetést!</p>
      </div>
    )}
    {messages.map((msg, index) => (
      <MessageBubble key={index} role={msg.role} content={msg.content} />
    ))}
    {isLoading && (
      <div className="flex justify-start mb-4">
        <div className="bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 px-4 py-3 rounded-lg rounded-bl-none shadow-sm">
          <div className="text-sm font-semibold mb-1 text-gray-600 dark:text-gray-400">Kéki</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>
    )}
  </div>
);
