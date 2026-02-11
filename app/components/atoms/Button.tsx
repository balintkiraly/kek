import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  disabled = false,
}) => (
  <button
    type="submit"
    disabled={disabled}
    className={`mt-4 rounded-xl bg-[#333366] px-6 py-4 text-white text-xl font-semibold leading-relaxed hover:bg-[#2a2a55] focus:outline-none focus:ring-2 focus:ring-[#333366] focus:ring-offset-2 dark:focus:ring-offset-[#0f0f0f] disabled:opacity-50 disabled:cursor-not-allowed min-h-[3.25rem] ${className}`}
  >
    {children}
  </button>
);
