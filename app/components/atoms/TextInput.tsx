import React from "react";

interface TextInputProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  id,
  value,
  onChange,
  placeholder = "Ide írj kérdést...",
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedBy,
}) => (
  <input
    id={id}
    type="text"
    placeholder={placeholder}
    autoComplete="off"
    aria-label={ariaLabel}
    aria-describedby={ariaDescribedBy}
    className="w-full rounded-xl border-2 border-[#1f2937] bg-white px-5 py-4 text-[#0d0d0d] shadow-sm focus:border-[#333366] focus:outline-none focus:ring-2 focus:ring-[#333366]/30 dark:border-[#4b5563] dark:bg-[#1f2937] dark:text-[#f5f5f5] dark:focus:border-[#6666aa] dark:focus:ring-[#6666aa]/30 text-xl leading-relaxed placeholder:text-[#6b7280] dark:placeholder:text-[#9ca3af]"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);
