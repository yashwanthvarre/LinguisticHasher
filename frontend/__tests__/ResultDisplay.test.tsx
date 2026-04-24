import React from "react";
import { screen } from "@testing-library/react";
import ResultDisplay from "../src/components/ResultDisplay";
import { renderWithProviders } from "./test-utils";

describe("ResultDisplay", () => {
  it("displays the translated word and PIN", () => {
    renderWithProviders(<ResultDisplay translatedWord="こんにちは" pin="1234" />);
    expect(screen.getByText(/Translated Word/i)).toBeInTheDocument();
    expect(screen.getByText("こんにちは")).toBeInTheDocument();
    expect(screen.getByText(/Linguistic PIN/i)).toBeInTheDocument();
    expect(screen.getByText("1234")).toBeInTheDocument();
  });
});
