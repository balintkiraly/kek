"use client";
import { ChatContainer } from "./components/organisms/ChatContainer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-2 top-2 z-50 -translate-y-16 bg-[#0d0d0d] text-white px-4 py-3 rounded-xl font-semibold text-lg focus:translate-y-0 focus-visible:translate-y-0 transition-transform duration-150 [@media(prefers-reduced-motion:reduce)]:transition-none"
      >
        Ugrás a tartalomra
      </a>
      <div className="flex min-h-screen items-center justify-center bg-[#f8f9fa] dark:bg-[#0a0a0a]">
        <ChatContainer />
      </div>
    </>
  );
}
