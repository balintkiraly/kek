import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Avatar } from "./Avatar";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  role,
  content,
}) => {
  const isUser = role === "user";

  return (
    <div className={`flex w-full justify-start mb-4 gap-2`}>
      {!isUser && <Avatar role={role} />}
      <div
        className={`max-w-5xl px-4 py-3 rounded-lg shadow-sm ${
          isUser
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 rounded-bl-none"
        }`}
      >
        <div className={`text-base font-semibold mb-1 ${isUser ? "text-blue-100" : "text-gray-600 dark:text-gray-400"}`}>
          {isUser ? "Te" : "Kéki"}
        </div>
        <div className={`${isUser ? "text-white" : "text-gray-900 dark:text-gray-100"} text-lg leading-relaxed max-w-none`}>
          {isUser ? (
            <p className="m-0 leading-relaxed">{content}</p>
          ) : (
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} 
              className="prose-p:m-0 prose-p:text-lg prose-p:leading-relaxed prose-ul:my-3 prose-ol:my-3 prose-li:my-1 prose-li:text-lg prose-li:leading-relaxed prose-headings:my-3 prose-headings:font-bold prose-headings:text-lg prose-a:text-blue-500 dark:prose-a:text-blue-400"
              components={{
                ul: ({node, ...props}) => (
                  <ul className="list-disc list-inside pl-2 space-y-2" {...props} />
                ),
                ol: ({node, ...props}) => (
                  <ol className="list-decimal list-inside pl-2 space-y-2" {...props} />
                ),
                li: ({node, ...props}) => (
                  <li className="text-lg leading-relaxed" {...props} />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          )}
        </div>
      </div>
      {isUser && <Avatar role={role} />}
    </div>
  );
};
