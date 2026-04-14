import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ResultDisplayProps {
  translatedWord: string;
  pin: string;
}

const MotionBox = motion(Box);

export default function ResultDisplay({
  translatedWord,
  pin,
}: ResultDisplayProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      w="full"
      p={{ base: 5, md: 6 }}
      borderRadius="28px"
      bg="linear-gradient(180deg, rgba(9, 19, 31, 0.92), rgba(5, 10, 18, 0.92))"
      border="1px solid rgba(138, 247, 223, 0.16)"
      boxShadow="0 24px 80px rgba(0, 0, 0, 0.32)"
      backdropFilter="blur(18px)"
    >
      <Text
        fontSize="xs"
        letterSpacing="0.24em"
        textTransform="uppercase"
        color="rgba(212, 234, 255, 0.6)"
        mb={4}
      >
        Generated Output
      </Text>

      <Grid templateColumns={{ base: "1fr", md: "1.2fr 0.8fr" }} gap={4}>
        <GridItem
          p={4}
          borderRadius="22px"
          bg="rgba(255, 255, 255, 0.03)"
          border="1px solid rgba(255, 255, 255, 0.05)"
        >
          <Text fontSize="xs" textTransform="uppercase" color="rgba(214, 230, 255, 0.55)" mb={2}>
            Translated Word
          </Text>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700" color="white">
            {translatedWord}
          </Text>
        </GridItem>

        <GridItem
          p={4}
          borderRadius="22px"
          bg="linear-gradient(135deg, rgba(138, 247, 223, 0.18), rgba(126, 170, 255, 0.2))"
          border="1px solid rgba(138, 247, 223, 0.22)"
        >
          <Text fontSize="xs" textTransform="uppercase" color="rgba(214, 230, 255, 0.7)" mb={2}>
            Linguistic PIN
          </Text>
          <Text
            fontFamily="mono"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="800"
            letterSpacing="0.2em"
            color="#f5fffd"
          >
            {pin}
          </Text>
        </GridItem>
      </Grid>
    </MotionBox>
  );
}
