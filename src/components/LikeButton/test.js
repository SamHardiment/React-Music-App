/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { LikeButton } from "..";
import "@testing-library/jest-dom/extend-expect";

describe("Like Button", () => {
  beforeEach(() => render(<LikeButton />));

  it("like button is rendered", () => {
    const likeButton = screen.getByRole("like");
    expect(likeButton.textContent).toBe("Like");
  });
});
