/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import About from ".";

describe("Home Page", () => {
  beforeEach(() => render(<About />));

  it("Header displaying about page is rendered", () => {
    const heading = screen.getByText("About Page");
    expect(heading).toBeInTheDocument();
  });
});
