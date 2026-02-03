import React from "react";

interface HeaderProps {
  title?: string;
  description?: string[];
}

export const Header: React.FC<HeaderProps> = ({
  title = "KÉK Nyelvi Asszisztens",
  description = [
    "Üdvözöllek a KÉK Nyelvi Asszisztensben!",
    "Kérdezz tőlem bármit",
    "Ha valami nem világos, elmagyarázom másképp.",
    "Kérdezz bátran!",
  ],
}) => (
  <div>
    <h1 className="mb-8 text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-5xl">
      {title}
    </h1>
    <div>
      {description.map((desc, index) => (
        <p
          key={index}
          className="mb-1 text-zinc-700 dark:text-zinc-300 text-2xl"
        >
          {desc}
        </p>
      ))}
    </div>
  </div>
);
