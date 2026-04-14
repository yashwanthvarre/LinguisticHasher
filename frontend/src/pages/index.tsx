import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FaArrowRight, FaKey } from "react-icons/fa";
import { HiOutlineLanguage, HiOutlineSparkles } from "react-icons/hi2";
import CustomInput from "../components/CustomInput";
import LanguageSelector from "../components/LanguageSelector";
import ResultDisplay from "../components/ResultDisplay";
import { fetchPin } from "../utils/api";

const OrbitalScene = dynamic(() => import("../components/OrbitalScene"), {
  ssr: false,
});

const highlights = [
  "Translates English into visually distinct scripts",
  "Analyzes character shape complexity",
  "Returns a memorable four-digit pin",
];

const languageCards = [
  { label: "Japanese", tone: "#8af7df" },
  { label: "Korean", tone: "#7eaaff" },
  { label: "Hindi", tone: "#f6c177" },
];

export default function Home() {
  const [word, setWord] = useState("");
  const [language, setLanguage] = useState("japanese");
  const [pin, setPin] = useState("");
  const [translatedWord, setTranslatedWord] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const handleFetchPin = async () => {
    if (!word.trim()) {
      toast({
        title: "Input required",
        description: "Enter a word before generating a PIN.",
        status: "warning",
        duration: 2400,
        isClosable: true,
      });
      return;
    }

    try {
      setIsLoading(true);
      const data = await fetchPin(word, language);

      setShowResult(false);
      setTimeout(() => {
        setPin(data.pin);
        setTranslatedWord(data.translated);
        setShowResult(true);
        setIsLoading(false);
      }, 350);
    } catch (error) {
      console.error("Error fetching PIN:", error);
      setIsLoading(false);
      toast({
        title: "Generator unavailable",
        description: "The backend request failed. Make sure the API is running and try again.",
        status: "error",
        duration: 3200,
        isClosable: true,
      });
    }
  };

  return (
    <Box minH="100vh" position="relative" overflow="hidden" bg="#050816">
      <Box
        position="absolute"
        inset={0}
        bg="radial-gradient(circle at 22% 18%, rgba(138, 247, 223, 0.16), transparent 24%), radial-gradient(circle at 78% 30%, rgba(126, 170, 255, 0.16), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.04), transparent 32%)"
      />
      <Box
        position="absolute"
        inset={0}
        opacity={0.2}
        bgImage="linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)"
        bgSize="72px 72px"
        sx={{
          maskImage: "radial-gradient(circle at center, black 38%, transparent 88%)",
        }}
      />

      <Container maxW="7xl" position="relative" zIndex={1} py={{ base: 10, md: 16 }}>
        <Grid templateColumns={{ base: "1fr", xl: "1.05fr 0.95fr" }} gap={{ base: 10, xl: 8 }} alignItems="center">
          <GridItem>
            <Stack spacing={8}>
              <VStack align="start" spacing={5}>
                <Badge
                  px={4}
                  py={2}
                  borderRadius="full"
                  bg="rgba(138, 247, 223, 0.12)"
                  color="#b9fff1"
                  border="1px solid rgba(138, 247, 223, 0.16)"
                  textTransform="uppercase"
                  letterSpacing="0.18em"
                >
                  Linguistic Hasher
                </Badge>

                <Heading
                  fontSize={{ base: "4xl", md: "6xl", xl: "7xl" }}
                  lineHeight={{ base: 1.05, md: 0.95 }}
                  maxW="11ch"
                >
                  Turn words into cinematic four-digit identity codes.
                </Heading>

                <Text
                  maxW="2xl"
                  fontSize={{ base: "md", md: "xl" }}
                  color="rgba(214, 230, 255, 0.74)"
                >
                  A sharper interface for transliteration, script analysis, and instant PIN generation,
                  backed by a live 3D data sculpture instead of a flat empty screen.
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
                {languageCards.map((card) => (
                  <Box
                    key={card.label}
                    p={5}
                    borderRadius="24px"
                    bg="rgba(7, 14, 24, 0.7)"
                    border="1px solid rgba(255, 255, 255, 0.06)"
                    boxShadow="0 16px 50px rgba(0, 0, 0, 0.18)"
                  >
                    <Text fontSize="xs" textTransform="uppercase" letterSpacing="0.18em" color={card.tone} mb={3}>
                      Script Mode
                    </Text>
                    <Text fontSize="xl" fontWeight="700">
                      {card.label}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>

              <Stack spacing={3}>
                {highlights.map((item) => (
                  <HStack key={item} spacing={3} align="start">
                    <Icon as={HiOutlineSparkles} color="#8af7df" mt="4px" />
                    <Text color="rgba(214, 230, 255, 0.72)">{item}</Text>
                  </HStack>
                ))}
              </Stack>
            </Stack>
          </GridItem>

          <GridItem>
            <Box position="relative" minH={{ base: "460px", md: "620px" }}>
              <Box
                position="absolute"
                inset={{ base: "-24px", md: "-40px" }}
                borderRadius="36px"
                overflow="hidden"
                opacity={0.95}
              >
                <OrbitalScene />
              </Box>

              <Flex
                position="relative"
                zIndex={1}
                minH={{ base: "460px", md: "620px" }}
                align="end"
                p={{ base: 4, md: 8 }}
              >
                <Box
                  w="full"
                  p={{ base: 5, md: 7 }}
                  borderRadius="32px"
                  bg="linear-gradient(180deg, rgba(7, 14, 24, 0.8), rgba(4, 8, 15, 0.88))"
                  border="1px solid rgba(255,255,255,0.08)"
                  backdropFilter="blur(24px)"
                  boxShadow="0 30px 80px rgba(0, 0, 0, 0.38)"
                >
                  <VStack spacing={5} align="stretch">
                    <HStack justify="space-between" align="start">
                      <Box>
                        <Text
                          fontSize="xs"
                          textTransform="uppercase"
                          letterSpacing="0.22em"
                          color="rgba(214, 230, 255, 0.55)"
                          mb={2}
                        >
                          Interactive Generator
                        </Text>
                        <Heading fontSize={{ base: "2xl", md: "3xl" }}>
                          Build a PIN from script structure
                        </Heading>
                      </Box>
                      <Icon as={HiOutlineLanguage} color="#8af7df" boxSize={6} />
                    </HStack>

                    <Text color="rgba(214, 230, 255, 0.68)">
                      Type an English word, choose the target language, and let the system translate,
                      inspect, and hash it into a memorable code.
                    </Text>

                    <CustomInput
                      value={word}
                      onChange={(e) => setWord(e.target.value)}
                      placeholder="Try “horizon”, “signal”, or “memory”"
                    />

                    <LanguageSelector
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                    />

                    <Button
                      onClick={handleFetchPin}
                      isLoading={isLoading}
                      loadingText="Generating"
                      leftIcon={<Icon as={FaKey} />}
                      rightIcon={<Icon as={FaArrowRight} />}
                      h="64px"
                      borderRadius="22px"
                      bg="linear-gradient(135deg, #8af7df, #7eaaff)"
                      color="#051018"
                      fontSize="md"
                      fontWeight="800"
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "0 16px 40px rgba(126, 170, 255, 0.28)",
                      }}
                      _active={{ transform: "translateY(0px)" }}
                    >
                      Generate PIN
                    </Button>

                    {showResult ? (
                      <ResultDisplay translatedWord={translatedWord} pin={pin} />
                    ) : (
                      <Box
                        p={5}
                        borderRadius="24px"
                        border="1px dashed rgba(214, 230, 255, 0.14)"
                        color="rgba(214, 230, 255, 0.56)"
                        bg="rgba(255,255,255,0.02)"
                      >
                        <Text fontSize="sm" lineHeight="1.8">
                          Your translated script and generated PIN will appear here once you run the
                          generator.
                        </Text>
                      </Box>
                    )}
                  </VStack>
                </Box>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
