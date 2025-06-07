import React from "react";

import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ResultDisplayProps {
  translatedWord: string;
  pin: string;
}

export default function ResultDisplay({
  translatedWord,
  pin,
}: ResultDisplayProps) {
  return (
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
          Translated Word:
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color="blue.600">
          {translatedWord}
        </Text>
        <Text fontSize="xl" color="gray.700">
          Generated PIN:
        </Text>
        <Text fontSize="3xl" fontWeight="bold" color="blue.600">
          {pin}
        </Text>
      </Box>
    </motion.div>
  );
}
