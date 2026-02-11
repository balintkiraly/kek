import React from "react";
import { TextInput } from "../atoms/TextInput";
import { Button } from "../atoms/Button";

const MESSAGE_INPUT_ID = "message-input";

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
  <form onSubmit={onSubmit} className="w-full" aria-label="Üzenet küldése">
    <label htmlFor={MESSAGE_INPUT_ID} className="sr-only">
      Írd be a kérdésed vagy üzeneted
    </label>
    <TextInput
      id={MESSAGE_INPUT_ID}
      value={value}
      onChange={onChange}
      aria-describedby="message-input-hint"
    />
    <p id="message-input-hint" className="sr-only">
      Nyomd meg az Entert a küldéshez, vagy használd a Küldés gombot.
    </p>
    <Button disabled={disabled}>Küldés</Button>
  </form>
);
