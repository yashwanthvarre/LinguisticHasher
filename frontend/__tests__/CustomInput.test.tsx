import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import CustomInput from "../src/components/CustomInput";
import { renderWithProviders } from "./test-utils";

describe("CustomInput", () => {
  it("renders with correct placeholder", () => {
    renderWithProviders(
      <CustomInput value="" onChange={() => {}} placeholder="Type here..." />
    );
    expect(screen.getByPlaceholderText("Type here...")).toBeInTheDocument();
  });
});
