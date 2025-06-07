import React from "react";

import { Input } from "@chakra-ui/react";

interface CustomInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default function CustomInput({
  value,
  onChange,
  placeholder,
}: CustomInputProps) {
  return (
    <Input
      height={20}
      width="100%"
      border="none"
      textAlign="center"
      placeholder={placeholder}
      fontSize={60}
      fontFamily="inherit"
      fontWeight={300}
      borderColor="gray.300"
      borderRadius="md"
      _focus={{
        borderColor: "blue.500",
        boxShadow: "0 0 10px rgba(0, 0, 255, 0.2)",
      }}
      _hover={{ borderColor: "blue.400" }}
      value={value}
      onChange={onChange}
    />
  );
}
