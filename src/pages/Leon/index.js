import React, { useState } from "react";
import { Albums, Songs, SongForm, Lyrics } from "../../components";

function Leon() {
  // Beining of React + Tests
  const initialBcC = "#f4f4f4";
  // Console.log and you get a varaile and a function when using useState
  const [bgC, setBgC] = useState(initialBcC);
  // So we name our variable bgC here and a function called setBgC
  const changeBg = (colour) => {
    setBgC(colour);
  };
  const resetBg = () => {
    setBgC(initialBcC);
  };
  // Passing Props
  const [albums, setAlbums] = useState([
    {
      id: 1,
      name: "Gold Digger Sounds",
      songs: [
        "Steam",
        "Born Again",
        "Motorbike",
        "Why Don't you Touch me",
        "Magnolias",
        "Gold-Diggers",
        "Details",
        "Sho Nuff",
        "Sweeter",
        "Don't Worry",
        "Blue Mesas",
        "Summer Rain",
      ],
    },
    {
      id: 2,
      name: "Good Thing",
      songs: [
        "Steam",
        "Born Again",
        "Motorbike",
        "Why Don't you Touch me",
        "Magnolias",
        "Gold-Diggers",
        "Details",
        "Sho Nuff",
        "Sweeter",
        "Don't Worry",
        "Blue Mesas",
        "Summer Rain",
      ],
    },
    {
      id: 3,
      name: "Coming Home",
      songs: [
        "Steam",
        "Born Again",
        "Motorbike",
        "Why Don't you Touch me",
        "Magnolias",
        "Gold-Diggers",
        "Details",
        "Sho Nuff",
        "Sweeter",
        "Don't Worry",
        "Blue Mesas",
        "Summer Rain",
      ],
    },
  ]);
  const [chosenAlbum, setChosenAlbum] = useState();

  const handleAlbumSelect = (albumId) => {
    const chosenAlbum = albums.find((alb) => alb.id === albumId);
    setChosenAlbum(chosenAlbum);
    console.log(chosenAlbum);
  };

  return (
    <>
      <div role="figure" style={{ backgroundColor: bgC }}>
        <h2>Leon Bridges</h2>
        <h6 onMouseEnter={() => changeBg("firebrick")} onMouseLeave={resetBg}>
          Genre: R&B && Soul
        </h6>
        {/* We need to use a callback function in order for the function not to fire instantly  */}
        <p
          role="text"
          onMouseEnter={() => changeBg("gold")}
          onMouseLeave={resetBg}
        >
          Leon Bridges' first strides as an R&B artist prompted comparisons to
          legends like Sam Cooke and Otis Redding, but the native Texan quickly
          came into his own with the remarkably refined Coming Home (2015) and
          Good Thing (2018), Top Ten albums that resulted in four Grammy
          nominations and a win in the category of Best Traditional R&B
          Performance.
        </p>
        <Albums albums={albums} handleAlbumSelect={handleAlbumSelect} />
        {chosenAlbum && <Songs album={chosenAlbum} />}
        <SongForm />
        <Lyrics />
      </div>
    </>
  );
}
export default Leon;
