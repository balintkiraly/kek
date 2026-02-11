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

  const authorName = isUser ? "Te" : "Kéki";
  return (
    <article
      className={`flex w-full justify-start mb-5 gap-3`}
      aria-label={`Üzenet: ${authorName}`}
    >
      {!isUser && <Avatar role={role} />}
      <div
        className={`max-w-5xl px-5 py-4 rounded-xl shadow-sm ${
          isUser
            ? "bg-[#333366] text-white rounded-br-none"
            : "bg-[#e5e7eb] text-[#0d0d0d] dark:bg-[#374151] dark:text-[#f5f5f5] rounded-bl-none"
        }`}
      >
        <p className={`text-xl font-semibold mb-1.5 m-0 ${isUser ? "text-[#c8c8d8]" : "text-[#374151] dark:text-[#d1d5db]"}`}>
          {authorName}
        </p>
        <div className={`${isUser ? "text-white" : "text-[#0d0d0d] dark:text-[#f5f5f5]"} text-xl sm:text-2xl leading-relaxed max-w-none`}>
          {isUser ? (
            <p className="m-0 leading-relaxed">{content}</p>
          ) : (
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} 
              className="prose-p:m-0 prose-p:text-xl sm:prose-p:text-2xl prose-p:leading-relaxed prose-ul:my-3 prose-ol:my-3 prose-li:my-1 prose-li:text-xl sm:prose-li:text-2xl prose-li:leading-relaxed prose-headings:my-3 prose-headings:font-bold prose-headings:text-2xl prose-a:text-[#333366] dark:prose-a:text-[#6666aa] prose-a:underline"
              components={{
                ul: ({node, ...props}) => (
                  <ul className="list-disc list-inside pl-2 space-y-2" {...props} />
                ),
                ol: ({node, ...props}) => (
                  <ol className="list-decimal list-inside pl-2 space-y-2" {...props} />
                ),
                li: ({node, ...props}) => (
                  <li className="text-xl sm:text-2xl leading-relaxed" {...props} />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          )}
        </div>
      </div>
      {isUser && <Avatar role={role} />}
    </article>
  );
};
