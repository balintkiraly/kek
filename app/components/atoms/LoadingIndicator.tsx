import React from "react";

interface LoadingIndicatorProps {
  message?: string;
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  message = "Gondolkodom...",
}) => (
  <div className="mt-4 p-4 rounded-md bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
    <strong>KÉK Asszisztens:</strong>
    <p className="mt-2">{message}</p>
  </div>
);
