"use client";
import React from "react";
import type { KekLevel } from "@/lib/ai/generate-answer";

const LEVEL_OPTIONS: { value: KekLevel; label: string; description: string }[] = [
  { value: 1, label: "1 – Legkönnyebb", description: "Nagyon rövid mondatok" },
  { value: 2, label: "2 – Könnyű", description: "Rövid mondatok" },
  { value: 3, label: "3 – KÉK szabvány", description: "KÉK szabályok szerint" },
];

interface LevelChooserProps {
  value: KekLevel;
  onChange: (level: KekLevel) => void;
  disabled?: boolean;
}

export const LevelChooser: React.FC<LevelChooserProps> = ({
  value,
  onChange,
  disabled = false,
}) => (
  <fieldset
    className="w-full border-0 p-0 m-0 min-w-0 mb-4"
    disabled={disabled}
    aria-describedby="kek-level-desc"
  >
    <legend className="text-xl font-semibold text-[#0d0d0d] dark:text-[#f5f5f5] mb-3 px-0">
      KÉK szint
    </legend>
    <p id="kek-level-desc" className="sr-only">
      Válaszd ki, milyen könnyen érthető legyen a válasz: 1 a legegyszerűbb, 3 a szabványos KÉK.
    </p>
    <div className="flex flex-wrap gap-3">
      {LEVEL_OPTIONS.map((opt) => (
        <label
          key={opt.value}
          className={`flex flex-col rounded-xl border-2 px-4 py-3 min-w-[10rem] cursor-pointer transition-colors duration-150 [@media(prefers-reduced-motion:reduce)]:transition-none ${
            value === opt.value
              ? "border-[#333366] bg-[#e8e8f0] dark:bg-[#2a2a44] dark:border-[#6666aa] shadow-[0_2px_8px_rgba(51,51,102,0.2)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
              : "border-[#1f2937] dark:border-[#4b5563] bg-white dark:bg-[#1f2937] hover:border-[#4b5563] dark:hover:border-[#6b7280] hover:bg-[#f8f9fa] dark:hover:bg-[#374151]"
          } ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
        >
          <input
            type="radio"
            name="kek-level"
            value={opt.value}
            checked={value === opt.value}
            onChange={() => !disabled && onChange(opt.value)}
            disabled={disabled}
            className="sr-only"
            aria-describedby={`kek-level-${opt.value}-desc`}
          />
          <span className="text-lg font-semibold text-[#0d0d0d] dark:text-[#f5f5f5]">
            {opt.label}
          </span>
          <span id={`kek-level-${opt.value}-desc`} className="text-base text-[#374151] dark:text-[#d1d5db] mt-0.5">
            {opt.description}
          </span>
        </label>
      ))}
    </div>
  </fieldset>
);
