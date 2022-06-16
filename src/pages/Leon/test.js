/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Leon from ".";

describe("Leon", () => {
  // beforeEach runs this bit of code before each test
  beforeEach(() => render(<Leon />));

  it("it loads with a bg of #f4f4f4 (rgb(244, 244, 244))", () => {
    const bgC = screen.getByRole("figure");
    expect(bgC.style.backgroundColor).toBe("rgb(244, 244, 244)");
  });

  it("div background changes to gold when onMouseOver p element", () => {
    const bgC = screen.getByRole("figure");
    const text = screen.getByRole("text");
    fireEvent.mouseEnter(text);
    expect(bgC.style.backgroundColor).toBe("gold");
    // userEvent.onMouseOver(text);
    // expect(bgC.style.backgroundColor).toBe("gold");
  });
});
