import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../src/pages";
import { fetchPin } from "../src/utils/api";

jest.mock("../src/utils/api");

describe("Home", () => {
  it("renders heading and input", () => {
    render(<Home />);
    expect(
      screen.getByText(/Enter a word to generate a PIN/i)
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Type here/i)).toBeInTheDocument();
  });
});
