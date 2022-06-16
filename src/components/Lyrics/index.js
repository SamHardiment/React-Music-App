import React, { useEffect, useState } from "react";
import axios from "axios";

const Lyrics = () => {
  const [lyrics, setLyrics] = useState("");
  const [song, setSong] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchSongLyrics(songName) {
      songName ||= "Steam";
      try {
        setLoading("Loading...");
        setError("");
        const URL = `https://api.lyrics.ovh/v1/Leon Bridges/${songName}`;
        const { data } = await axios.get(URL);
        setLyrics(data.lyrics);
        setLoading("");
      } catch (err) {
        setError(err);
        setLoading("Loading... (error)");
      }
    }
    fetchSongLyrics(search);
  }, [search]);

  const handleInputChange = (e) => {
    setSong(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setSearch(song);
    setSong("");
    setLyrics("");
    setLoading("Loading...");
  };

  return (
    <div>
      <header>
        {error ? (
          <h1>
            Sorry, wee couldn't find the lyrics for {search ? search : "Steam"}
          </h1>
        ) : (
          <div>
            <h2>Here are the lyrics for {search ? search : "Steam"}</h2>
            <h4>{loading ? loading : ""}</h4>
            <p>{lyrics}</p>
          </div>
        )}
      </header>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="songInput">Search for a song's lyrics</label>
        <input
          type="text"
          id="songInput"
          value={song}
          onChange={handleInputChange}
        ></input>
      </form>
    </div>
  );
};

export default Lyrics;
