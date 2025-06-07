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
    <Flex justify="center" align="center" height="100vh" p={4}>
      <VStack
        spacing={6}
        p={8}
        maxW="500px"
        width="full"
        textAlign="center"
        position="absolute"
      >
        <Heading size="lg" color="gray.700">
          Enter a word to generate a PIN
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
          colorScheme="blue"
          borderRadius={30}
          size="lg"
          onClick={handleFetchPin}
          _hover={{ bg: "blue.600" }}
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
