/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Albums } from "..";

describe("Albums", () => {
  let handleAlbumSelect = jest.fn();

  beforeEach(() => {
    const albumSub = [
      { id: 1, name: "Gold Digger Sounds", songs: ["Steam", "Born Again"] },
    ];
    render(<Albums albums={albumSub} handleAlbumSelect={handleAlbumSelect} />);
  });

  it("check that a list of albums is displayed from props", () => {
    const album = screen.getAllByRole("heading");
    expect(album.textContnt).toBe(album.name);
  });
});
