import React from "react";
import { render, screen } from "@testing-library/react";
import ResultDisplay from "../src/components/ResultDisplay";

describe("ResultDisplay", () => {
  it("displays the translated word and PIN", () => {
    render(<ResultDisplay translatedWord="こんにちは" pin="1234" />);
    expect(screen.getByText(/Translated Word:/i)).toBeInTheDocument();
    expect(screen.getByText("こんにちは")).toBeInTheDocument();
    expect(screen.getByText(/Generated PIN:/i)).toBeInTheDocument();
    expect(screen.getByText("1234")).toBeInTheDocument();
  });
});
