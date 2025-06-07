import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CustomInput from "../src/components/CustomInput";

describe("CustomInput", () => {
  it("renders with correct placeholder", () => {
    render(
      <CustomInput value="" onChange={() => {}} placeholder="Type here..." />
    );
    expect(screen.getByPlaceholderText("Type here...")).toBeInTheDocument();
  });
});
