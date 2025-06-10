import { useState } from "react";
import React from "react";
import CustomInput from "../components/CustomInput";
import LanguageSelector from "../components/LanguageSelector";
import ResultDisplay from "../components/ResultDisplay";
import { fetchPin } from "../utils/api"; // Adjust the import path as necessary
import {
  Button,
  VStack,
  Heading,
  Flex,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { FaKey } from "react-icons/fa";

export default function Home() {
  const [word, setWord] = useState("");
  const [language, setLanguage] = useState("japanese"); // Default language
  const [pin, setPin] = useState("");
  const [translatedWord, setTranslatedWord] = useState("");
  const [showResult, setShowResult] = useState(false);

  const toast = useToast();

  const handleFetchPin = async () => {
    if (!word.trim()) {
      toast({
        title: "Input required",
        description: "Please enter a word before generating a PIN.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    try {
      const data = await fetchPin(word, language);

      setShowResult(false);

      setTimeout(() => {
        setPin(data.pin);
        setTranslatedWord(data.translated);
        setShowResult(true);
      }, 1000);
    } catch (error) {
      console.error("Error fetching PIN:", error);
      toast({
        title: "Error",
        description: "Failed to fetch PIN. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      justify="center"
      align="center"
      height="100vh"
      p={4}
      backgroundColor="black"
      backgroundImage="url('/gradient.png')"
    >
      <VStack
        spacing={6}
        p={8}
        maxW="500px"
        width="full"
        textAlign="center"
        position="absolute"
      >
        <Heading size="lg" color="e7e7e7">
          Enter a word to generate PIN
        </Heading>
        <CustomInput
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Type here..."
        />
        <LanguageSelector
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <Button
          leftIcon={<Icon as={FaKey} />}
          bg="#a7a7a7"
          color="black"
          p="0.8rem 2rem"
          borderRadius="50px"
          border="none"
          fontSize="1rem"
          fontWeight="500"
          transition="background-color 0.3s ease"
          cursor="pointer"
        >
          Generate PIN
        </Button>
        {showResult && (
          <ResultDisplay translatedWord={translatedWord} pin={pin} />
        )}
      </VStack>
    </Flex>
  );
}
