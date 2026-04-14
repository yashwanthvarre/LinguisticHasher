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
    <Select
      value={value}
      onChange={onChange}
      h="60px"
      color="white"
      bg="rgba(7, 14, 24, 0.72)"
      border="1px solid"
      borderColor="rgba(138, 247, 223, 0.18)"
      borderRadius="20px"
      fontSize="md"
      fontWeight="500"
      iconColor="rgba(214, 230, 255, 0.72)"
      backdropFilter="blur(14px)"
      _hover={{ borderColor: "rgba(138, 247, 223, 0.35)" }}
      _focusVisible={{
        borderColor: "#8af7df",
        boxShadow: "0 0 0 1px rgba(138, 247, 223, 0.55)",
      }}
    >
      <option value="japanese">Japanese</option>
      <option value="korean">Korean</option>
      <option value="devanagari">Devanagari (Hindi)</option>
      <option value="french">French</option>
      <option value="german">German</option>
    </Select>
  );
}
