/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// We are importini this because we can only use useNaviagte() in the context of a <router> Component
import { MemoryRouter } from "react-router-dom";

import { BackButton } from "..";

describe("Back Button", () => {
  beforeEach(() => renderWithProviders(<BackButton />));

  it("Check if back button exists", () => {
    const btn = screen.getByRole("button", { name: "Go Back" });
    expect(btn).toBeInTheDocument();
  });
});
