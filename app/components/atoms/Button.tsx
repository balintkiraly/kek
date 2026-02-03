import React from "react";

interface ButtonProps {
  value: string;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  value,
  className = "",
  disabled = false,
}) => (
  <input
    type="submit"
    value={value}
    disabled={disabled}
    className={`mt-4 rounded-md bg-blue-600 px-5 py-4 text-white text-lg leading-relaxed hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-blue-900 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
  />
);
