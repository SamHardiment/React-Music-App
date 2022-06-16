/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
jest.mock("axios");

import Lyrics from ".";

describe("Lyrics", () => {
  beforeEach(() => jest.resetAllMocks());

  // it("It renders a loading... message when no lyrics are displayed", () => {
  //   // Gets our mock lyrics in the form of a response
  //   axios.get.mockResolvedValue({ data: { lyrics: "steam" } });
  //   // Now we render our lyrics
  //   render(<Lyrics />);
  //   // We should expect a loading message to be on the screen
  //   expect(screen.getByText("Loading...")).toBeInTheDocument();
  // });
});
