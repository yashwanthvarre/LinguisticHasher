import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LanguageSelector from "../src/components/LanguageSelector";

describe("LanguageSelector", () => {
  it("renders with default value", () => {
    render(<LanguageSelector value="japanese" onChange={() => {}} />);
    const selectElement = screen.getByDisplayValue("Japanese");
    expect(selectElement).toBeInTheDocument();
  });

  it("calls onChange when a new language is selected", () => {
    const handleChange = jest.fn();
    render(<LanguageSelector value="japanese" onChange={handleChange} />);
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "french" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
