import React from "react";

import { Select } from "@chakra-ui/react";

interface LanguageSelectorProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function LanguageSelector({
  value,
  onChange,
}: LanguageSelectorProps) {
  return (
    <Select value={value} onChange={onChange} color="white" borderRadius={5}>
      <option value="japanese">Japanese</option>
      <option value="korean">Korean</option>
      <option value="devanagari">Devanagari (Hindi)</option>
      <option value="french">French</option>
      <option value="german">German</option>
    </Select>
  );
}
