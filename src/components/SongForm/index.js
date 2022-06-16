import React, { useState } from "react";

const SongForm = () => {
  const [formData, setFormData] = useState({
    name: nameInput,
    song: songInput,
    desc: descInput,
  });
  const [nameInput, setNameInput] = useState("");
  const [songInput, setSongInput] = useState("");
  const [descInput, setDescInput] = useState("");

  const handleNameInput = (e) => setNameInput(e.target.value);
  const handleSongInput = (e) => setSongInput(e.target.value);
  const handleDescInput = (e) => setDescInput(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: nameInput,
      song: songInput,
      desc: descInput,
    });

    setNameInput("");
    setSongInput("");
    setDescInput("");
  };
  return (
    <>
      <h6 role="display">
        Tell us your favourite song! {formData.name ? formData.name : "A user"}
        's favourite song is {formData.song
          ? formData.song
          : "all of them"}{" "}
        because: {formData.desc ? formData.desc : "They are all so good!"}
      </h6>
      <form role="fd" onSubmit={handleFormSubmit}>
        <label htmlFor="nameInput">Enter your name</label>
        <input
          type="text"
          name="nameInput"
          id="nameInput"
          placeholder="What is your name?"
          value={nameInput}
          onChange={handleNameInput}
        />
        <label htmlFor="songInput">Enter your favourite song</label>
        <input
          type="text"
          name="songInput"
          id="songInput"
          value={songInput}
          onChange={handleSongInput}
        />
        <label htmlFor="descInput">Why do you love this song?</label>
        <input
          type="text"
          name="descInput"
          id="descInput"
          value={descInput}
          onChange={handleDescInput}
        />
        <input type="submit" value="Update!" />
      </form>
    </>
  );
};

export default SongForm;
