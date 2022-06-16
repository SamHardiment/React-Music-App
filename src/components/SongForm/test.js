/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import SongForm from ".";

describe("Song Form", () => {
  beforeEach(() => render(<SongForm />));

  it("There is text that displays a default message", () => {
    const p = screen.getByRole("display");
    expect(p.textContent).toBe(
      "Tell us your favourite song! A user's favourite song is all of them because: They are all so good!"
    );
  });

  it("Name doesn't submit value before enter", async () => {
    // const user = userEvent.setup()
    const inputName = screen.getByLabelText("Enter your name");
    await userEvent.type(inputName, "Sam");
    const p = screen.getByRole("display");
    expect(inputName.value).toBe("Sam");
    expect(p.textContent).toBe(
      "Tell us your favourite song! A user's favourite song is all of them because: They are all so good!"
    );
  });

  it("The name input is displayed in the personal message based on the form", async () => {
    // We use async to simulate a use interaction
    const user = userEvent.setup();

    const inputName = screen.getByLabelText("Enter your name");
    // const inputSong = screen.getByLabelText("Enter your favourite song");
    // const inputDesc = screen.getByLabelText("Why do you love this song?");
    // type will enter the text inside an input field, {enter} should take you to a new line OR simulate a submit event
    await user.type(inputName, "Sam{enter}");
    // await user.type(inputSong, "July{enter}");
    // await user.type(inputDesc, "It is a beautiful song{enter}");

    const p = screen.getByRole("display");
    expect(inputName.value).toBe("");
    expect(p.textContent).toBe(
      "Tell us your favourite song! Sam's favourite song is all of them because: They are all so good!"
    );
  });

  it("The song input is displayed in the personal message based on the form", async () => {
    const user = userEvent.setup();
    const inputSong = screen.getByLabelText("Enter your favourite song");
    await user.type(inputSong, "July{enter}");
    const p = screen.getByRole("display");
    expect(inputSong.value).toBe("");
    expect(p.textContent).toBe(
      "Tell us your favourite song! A user's favourite song is July because: They are all so good!"
    );
  });

  it("The desc input is displayed in the personal message based on the form", async () => {
    const user = userEvent.setup();
    const inputDesc = screen.getByLabelText("Why do you love this song?");
    await user.type(inputDesc, "It is a beautiful song{enter}");
    const p = screen.getByRole("display");
    expect(inputDesc.value).toBe("");
    expect(p.textContent).toBe(
      "Tell us your favourite song! A user's favourite song is all of them because: It is a beautiful song"
    );
  });
});
