import React from "react";
import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { HiOutlineSparkles } from "react-icons/hi2";

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
    <InputGroup size="lg">
      <InputLeftElement pointerEvents="none" pl={2}>
        <Text color="rgba(209, 255, 245, 0.7)">
          <HiOutlineSparkles />
        </Text>
      </InputLeftElement>
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        h="68px"
        pl="54px"
        fontSize={{ base: "md", md: "lg" }}
        fontWeight="500"
        color="white"
        bg="rgba(7, 14, 24, 0.72)"
        border="1px solid"
        borderColor="rgba(138, 247, 223, 0.18)"
        borderRadius="24px"
        backdropFilter="blur(14px)"
        _placeholder={{ color: "rgba(214, 230, 255, 0.38)" }}
        _hover={{ borderColor: "rgba(138, 247, 223, 0.35)" }}
        _focusVisible={{
          borderColor: "#8af7df",
          boxShadow: "0 0 0 1px rgba(138, 247, 223, 0.55)",
        }}
      />
    </InputGroup>
  );
}
