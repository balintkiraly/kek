import React from "react";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder = "Kérdezz tőlem bármit...",
}) => (
  <input
    type="text"
    placeholder={placeholder}
    className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-blue-400 dark:focus:ring-blue-900 text-lg leading-relaxed"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);
