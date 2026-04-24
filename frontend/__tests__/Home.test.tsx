import React from "react";
import { screen } from "@testing-library/react";
import Home from "../src/pages";
import { renderWithProviders } from "./test-utils";

jest.mock("next/dynamic", () => () => {
  const MockOrbitalScene = () => <div data-testid="orbital-scene" />;
  MockOrbitalScene.displayName = "MockOrbitalScene";
  return MockOrbitalScene;
});

describe("Home", () => {
  it("renders heading and input", () => {
    renderWithProviders(<Home />);
    expect(
      screen.getByText(/Turn words into cinematic four-digit identity codes/i)
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Try “horizon”, “signal”, or “memory”/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Generate PIN/i })).toBeInTheDocument();
  });
});
