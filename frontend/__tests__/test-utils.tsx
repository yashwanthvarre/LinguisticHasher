import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import { theme } from "../src/theme";

export const renderWithProviders = (ui: React.ReactElement) =>
  render(<ChakraProvider theme={theme}>{ui}</ChakraProvider>);
