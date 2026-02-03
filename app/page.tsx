"use client";
import { ChatContainer } from "./components/organisms/ChatContainer";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900">
      <ChatContainer />
    </div>
  );
}
