import React from "react";

interface HeaderProps {
  title?: string;
  description?: string[];
}

export const Header: React.FC<HeaderProps> = ({
  title = "KÉK Nyelvi Asszisztens",
  description = [
    "Üdvözöllek a KÉK Nyelvi Asszisztensben!",
    "Kérdezz bátran!",
  ],
}) => (
  <div>
    <h1 className="mb-8 text-4xl font-bold text-[#0d0d0d] dark:text-[#f5f5f5] sm:text-5xl md:text-6xl tracking-tight">
      {title}
    </h1>
    <div>
      {description.map((desc, index) => (
        <p
          key={index}
          className="mb-2 text-[#1f2937] dark:text-[#e5e7eb] text-2xl sm:text-3xl leading-relaxed"
        >
          {desc}
        </p>
      ))}
    </div>
  </div>
);
