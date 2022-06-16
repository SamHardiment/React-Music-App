/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Home from ".";

describe("Home", () => {
  beforeEach(() => render(<Home />));

  it("A heading with Home Page is rendered", () => {
    const heading = screen.getByText("Home Page");
    expect(heading).toBeInTheDocument();
  });
});
