import React from "react";
import { TextInput } from "../atoms/TextInput";
import { Button } from "../atoms/Button";

interface MessageFormProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  disabled?: boolean;
}

export const MessageForm: React.FC<MessageFormProps> = ({
  value,
  onChange,
  onSubmit,
  disabled = false,
}) => (
  <form onSubmit={onSubmit} className="w-full">
    <TextInput value={value} onChange={onChange} />
    <Button value="Küldés" disabled={disabled} />
  </form>
);
