import { useState } from "react";
import React from "react";

import {
  Box,
  Input,
  Button,
  VStack,
  Heading,
  Text,
  Flex,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { FaKey } from "react-icons/fa";
import axios from "axios";
import { motion } from "framer-motion";

export default function Home() {
  const [word, setWord] = useState("");
  const [pin, setPin] = useState("");
  const [devnagari_word, setDevnagariWord] = useState("");
  const [showResult, setShowResult] = useState(false); // Controls visibility

  const toast = useToast();

  const fetchPin = async () => {
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
      const response = await axios.get(
        `http://127.0.0.1:8000/generate-pin?word=${word}`
      );

      setShowResult(false); // Hide result while fetching new one

      setTimeout(() => {
        setPin(response.data.pin);
        setDevnagariWord(response.data.devnagari_word);
        setShowResult(true); // Show result with animation after delay
      }, 1000); // 1-second delay before showing results
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
        <Input
          height={20}
          width="100%"
          border="none"
          textAlign="center"
          placeholder="Type here..."
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
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />

        <Button
          leftIcon={<Icon as={FaKey} />}
          colorScheme="blue"
          borderRadius={30}
          size="lg"
          onClick={fetchPin}
          _hover={{ bg: "blue.600" }}
        >
          Generate PIN
        </Button>

        {showResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Box
              p={4}
              bg="gray.100"
              borderRadius="md"
              boxShadow="sm"
              w="full"
              textAlign="center"
            >
              <Text fontSize="xl" color="gray.700">
                Generated PIN:
              </Text>
              <Text fontSize="3xl" fontWeight="bold" color="blue.600">
                {pin}
              </Text>
              <Text fontSize="3xl" fontWeight="bold" color="blue.600">
                {devnagari_word}
              </Text>
            </Box>
          </motion.div>
        )}
      </VStack>
    </Flex>
  );
}
