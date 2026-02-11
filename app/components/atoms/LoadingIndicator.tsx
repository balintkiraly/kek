import React from "react";

interface LoadingIndicatorProps {
  message?: string;
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  message = "Gondolkodom...",
}) => (
  <div className="mt-4 p-5 rounded-xl bg-[#e5e7eb] text-[#0d0d0d] dark:bg-[#374151] dark:text-[#f5f5f5] text-xl">
    <strong className="font-semibold">KÉK Asszisztens:</strong>
    <p className="mt-2">{message}</p>
  </div>
);
