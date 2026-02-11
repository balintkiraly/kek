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
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden" aria-hidden="true">
      <img src="/ETR.gif" alt="" className="rounded-full w-full h-full object-cover" />
    </div>
  );
};
