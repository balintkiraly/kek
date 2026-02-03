import React from "react";

interface AvatarProps {
  role: "user" | "assistant";
  name?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ role, name = "Kéki" }) => {
  const isUser = role === "user";

  if (isUser) {
    return (
      <></>
    );
  }

  return (
    <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl font-semibold flex-shrink-0 mr-2">
      <img src="/ETR.gif" className="rounded-full"/>
    </div>
  );
};
